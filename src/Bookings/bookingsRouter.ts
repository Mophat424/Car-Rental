import { Router } from 'express';
import {
  getBookingsHandler,
  createBookingHandler,
  updateBookingHandler,
  deleteBookingHandler,
} from './bookingsController';

const router = Router();

router.get('/', getBookingsHandler);
router.post('/', createBookingHandler);
router.put('/:id', updateBookingHandler);
router.delete('/:id', deleteBookingHandler);

export default router;