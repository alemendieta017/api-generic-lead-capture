import { Request, Response, NextFunction } from 'express'
import LeadsService from '../services/leadsService'
import MongoRepository from '../repository/mongoRepository'

const leadsRepository = new MongoRepository()
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

  async getLeads(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query
      const leads = await leadsService.getLeads(query)
      res.status(200).json(leads)
    } catch (error) {
      next(error)
    }
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

  async updateLead(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const leadData = req.body
      const lead = await leadsService.updateLead(id, leadData)
      res.status(200).json(lead)
    } catch (error) {
      next(error)
    }
  }

  async deleteLead(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      await leadsService.deleteLead(id)
      res.status(204).send()
    } catch (error) {
      next(error)
    }
  }

  async countLeads(req: Request, res: Response, next: NextFunction) {
    try {
      const count = await leadsService.countLeads()
      res.status(200).json({ count })
    } catch (error) {
      next(error)
    }
  }
}

export default LeadsController
