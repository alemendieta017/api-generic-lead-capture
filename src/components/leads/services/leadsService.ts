import { CustomError } from '../../../errors/custom.error'

class LeadsService {
  private leadsRepository: any

  constructor(leadsRepository: any) {
    this.leadsRepository = leadsRepository
  }

  createLead(leadData: any) {
    return this.leadsRepository.saveLead(leadData)
  }

  getLeads() {
    return this.leadsRepository.findAllLeads()
  }

  async getLeadById(id: string) {
    const result = await this.leadsRepository.findLeadById(id)

    if (!result) {
      throw CustomError.notFound('Lead not found')
    }

    return result
  }

  updateLead(id: string, leadData: any) {
    return this.leadsRepository.updateLead(id, leadData)
  }

  deleteLead(id: string) {
    return this.leadsRepository.deleteLead(id)
  }
}

export default LeadsService
