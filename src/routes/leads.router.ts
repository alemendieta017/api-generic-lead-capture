import { Router } from 'express'
import LeadsController from '../components/leads/controller/leadsController'
import ValidatorMiddleware from '../middlewares/validator.middleware'
import {
  createLeadSchema,
  updateLeadSchema,
  getLeadsQuerySchema,
  getLeadSchema,
  deleteLeadSchema
} from '../components/schemas/leads.schema'

const router = Router()
const leadsController = new LeadsController()

router.post(
  '/',
  new ValidatorMiddleware(createLeadSchema, 'body').handle,
  leadsController.createLead
)
router.get(
  '/',
  new ValidatorMiddleware(getLeadsQuerySchema, 'query').handle,
  leadsController.getLeads
)
router.get('/count', leadsController.countLeads)
router.get(
  '/:id',
  new ValidatorMiddleware(getLeadSchema, 'params').handle,
  leadsController.getLeadById
)
router.put(
  '/:id',
  new ValidatorMiddleware(updateLeadSchema, 'body').handle,
  leadsController.updateLead
)
router.delete(
  '/:id',
  new ValidatorMiddleware(deleteLeadSchema, 'params').handle,
  leadsController.deleteLead
)

export default router
