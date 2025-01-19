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

  async updateLead(id: string, leadData: ILead) {
    const leadExists = await this.leadsRepository.findLeadById(id)
    if (!leadExists) {
      throw CustomError.notFound('Lead not found')
    }
    return this.leadsRepository.updateLead(id, leadData)
  }

  deleteLead(id: string) {
    const leadExists = this.leadsRepository.findLeadById(id)
    if (!leadExists) {
      throw CustomError.notFound('Lead not found')
    }

    return this.leadsRepository.deleteLead(id)
  }

  countLeads(query: findAllLeadsQuery): Promise<number> {
    return this.leadsRepository.countLeads(query)
  }
}

export default LeadsService
