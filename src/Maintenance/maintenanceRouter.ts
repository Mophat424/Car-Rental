import { Router } from 'express';
import {
  getMaintenancesHandler,
  createMaintenanceHandler,
  updateMaintenanceHandler,
  deleteMaintenanceHandler,
} from './maintenanceController';

const router = Router();

router.get('/', getMaintenancesHandler);
router.post('/', createMaintenanceHandler);
router.put('/:id', updateMaintenanceHandler);
router.delete('/:id', deleteMaintenanceHandler);

export default router;