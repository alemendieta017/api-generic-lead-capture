import { Request, Response, NextFunction } from 'express'
import LeadsService from '../services/leadsService'
import LeadsRepository from '../repository/firestoreRepository'

const leadsRepository = new LeadsRepository()
const leadsService = new LeadsService(leadsRepository)

class LeadsController {
  async createLead(req: Request, res: Response, next: NextFunction) {
    try {
      const leadData = req.body
      const lead = await leadsService.createLead(leadData)
      res.status(201).json(lead)
    } catch (error) {
      next(error)
    }
  }

  async getLeads(req: Request, res: Response) {
    const leads = await leadsService.getLeads()
    res.status(200).json(leads)
  }

  async getLeadById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const lead = await leadsService.getLeadById(id)
      res.status(200).json(lead)
    } catch (error) {
      next(error)
    }
  }

  async updateLead(req: Request, res: Response) {
    const { id } = req.params
    const leadData = req.body
    const lead = await leadsService.updateLead(id, leadData)
    res.status(200).json(lead)
  }

  async deleteLead(req: Request, res: Response) {
    const { id } = req.params
    await leadsService.deleteLead(id)
    res.status(204).send()
  }
}

export default LeadsController
