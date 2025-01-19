import { Router } from 'express'
import LeadsController from '../components/leads/controller/leadsController'
import ValidatorMiddleware from '../middlewares/validator.middleware'
import AuthMiddleware from '../middlewares/auth.middleware'
import {
  createLeadSchema,
  updateLeadSchema,
  getLeadsQuerySchema,
  getLeadSchema,
  deleteLeadSchema
} from '../schemas/leads.schema'

const router = Router()
const leadsController = new LeadsController()

router.post(
  '/',
  new ValidatorMiddleware(createLeadSchema, 'body').handle,
  leadsController.createLead
)
router.get(
  '/',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(getLeadsQuerySchema, 'query').handle,
  leadsController.getLeads
)
router.get(
  '/count',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(getLeadsQuerySchema, 'query').handle,
  leadsController.countLeads
)
router.get(
  '/:id',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(getLeadSchema, 'params').handle,
  leadsController.getLeadById
)
router.put(
  '/:id',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(getLeadSchema, 'params').handle,
  new ValidatorMiddleware(updateLeadSchema, 'body').handle,
  leadsController.updateLead
)
router.delete(
  '/:id',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(deleteLeadSchema, 'params').handle,
  leadsController.deleteLead
)

export default router
