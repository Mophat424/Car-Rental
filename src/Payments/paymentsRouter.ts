import { Router } from 'express';
import {
  getPaymentsHandler,
  createPaymentHandler,
  updatePaymentHandler,
  deletePaymentHandler,
} from './paymentsController';

const router = Router();

router.get('/', getPaymentsHandler);
router.post('/', createPaymentHandler);
router.put('/:id', updatePaymentHandler);
router.delete('/:id', deletePaymentHandler);

export default router;