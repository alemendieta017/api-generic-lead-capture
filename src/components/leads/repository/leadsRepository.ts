class LeadsRepository {
  private leads: any[];

  constructor() {
    this.leads = [];
  }

  saveLead(leadData: any) {
    const newLead = { id: this.leads.length + 1, ...leadData };
    this.leads.push(newLead);
    return newLead;
  }

  findAllLeads() {
    return this.leads;
  }

  findLeadById(id: string) {
    return this.leads.find(lead => lead.id === parseInt(id));
  }

  updateLead(id: string, leadData: any) {
    const index = this.leads.findIndex(lead => lead.id === parseInt(id));
    if (index !== -1) {
      this.leads[index] = { ...this.leads[index], ...leadData };
      return this.leads[index];
    }
    return null;
  }

  deleteLead(id: string) {
    const index = this.leads.findIndex(lead => lead.id === parseInt(id));
    if (index !== -1) {
      this.leads.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default LeadsRepository;