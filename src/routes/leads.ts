import { Router } from 'express';
import LeadsController from '../components/leads/controller/leadsController';

const router = Router();
const leadsController = new LeadsController();

router.post('/', leadsController.createLead);
router.get('/', leadsController.getLeads);
router.get('/:id', leadsController.getLeadById);
router.put('/:id', leadsController.updateLead);
router.delete('/:id', leadsController.deleteLead);

export default router;