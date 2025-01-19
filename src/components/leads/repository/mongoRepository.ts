import Lead from '../models/leadModel'
import { ILead, findAllLeadsQuery } from '../interfaces/lead.interface'
import { FilterQuery } from 'mongoose'

class MongoRepository {
  async saveLead(leadData: ILead) {
    const lead = new Lead(leadData)
    await lead.save()
    return lead.toObject()
  }

  async findAllLeads(query: findAllLeadsQuery) {
    const offset = query.offset ?? 0
    const limit = query.limit ?? 10
    const filter: FilterQuery<ILead> = {}
    if (query.firstName) {
      filter.firstName = { $regex: query.firstName, $options: 'i' }
    }
    if (query.lastName) {
      filter.lastName = { $regex: query.lastName, $options: 'i' }
    }
    if (query.email) {
      filter.email = { $regex: query.email, $options: 'i' }
    }
    if (query.dateFrom) {
      filter.createdAt = { ...filter.createdAt, $gte: new Date(query.dateFrom) }
    }
    if (query.dateTo) {
      filter.createdAt = { ...filter.createdAt, $lte: new Date(query.dateTo) }
    }

    return Lead.find(filter).skip(offset).limit(limit).exec()
  }

  async findLeadById(id: string) {
    return Lead.findById(id).exec()
  }

  async updateLead(id: string, leadData: ILead) {
    return Lead.findByIdAndUpdate(id, leadData, { new: true }).exec()
  }

  async deleteLead(id: string): Promise<boolean> {
    const result = await Lead.findByIdAndDelete(id).exec()
    return result !== null
  }

  async countLeads(query: findAllLeadsQuery): Promise<number> {
    const filter: FilterQuery<ILead> = {}
    if (query.firstName) {
      filter.firstName = { $regex: query.firstName, $options: 'i' }
    }
    if (query.lastName) {
      filter.lastName = { $regex: query.lastName, $options: 'i' }
    }
    if (query.email) {
      filter.email = { $regex: query.email, $options: 'i' }
    }
    if (query.dateFrom) {
      filter.createdAt = { ...filter.createdAt, $gte: new Date(query.dateFrom) }
    }
    if (query.dateTo) {
      filter.createdAt = { ...filter.createdAt, $lte: new Date(query.dateTo) }
    }
    return Lead.countDocuments(filter).exec()
  }
}

export default MongoRepository
