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

  getLeadById(id: string) {
    return this.leadsRepository.findLeadById(id)
  }

  updateLead(id: string, leadData: any) {
    return this.leadsRepository.updateLead(id, leadData)
  }

  deleteLead(id: string) {
    return this.leadsRepository.deleteLead(id)
  }
}

export default LeadsService
