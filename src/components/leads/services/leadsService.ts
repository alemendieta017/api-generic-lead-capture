import { CustomError } from '../../../errors/custom.error'
import MongoRepository from '../repository/mongoRepository'
import { ILead, findAllLeadsQuery } from '../interfaces/lead.interface'

class LeadsService {
  private leadsRepository: MongoRepository

  constructor(leadsRepository: MongoRepository) {
    this.leadsRepository = leadsRepository
  }

  createLead(leadData: ILead) {
    return this.leadsRepository.saveLead(leadData)
  }

  getLeads(query: findAllLeadsQuery) {
    return this.leadsRepository.findAllLeads(query)
  }

  async getLeadById(id: string) {
    const result = await this.leadsRepository.findLeadById(id)

    if (!result) {
      throw CustomError.notFound('Lead not found')
    }

    return result
  }

  updateLead(id: string, leadData: ILead) {
    return this.leadsRepository.updateLead(id, leadData)
  }

  deleteLead(id: string) {
    return this.leadsRepository.deleteLead(id)
  }

  countLeads() {
    return this.leadsRepository.countLeads()
  }
}

export default LeadsService
