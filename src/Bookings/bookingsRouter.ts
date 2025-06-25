// import { Router } from 'express';
// import {
//   getBookingsHandler,
//   createBookingHandler,
//   updateBookingHandler,
//   deleteBookingHandler,
// } from './bookingsController';

// const router = Router();

// router.get('/', getBookingsHandler);
// router.post('/', createBookingHandler);
// router.put('/:id', updateBookingHandler);
// router.delete('/:id', deleteBookingHandler);

// export default router;



// import { Router } from 'express';
// import {
//   getBookingsHandler,
//   createBookingHandler,
//   updateBookingHandler,
//   deleteBookingHandler,
// } from './bookingsController';
// import { authenticateToken } from '../Middleware/authMiddleware';

// const router = Router();

// router.get('/', authenticateToken, getBookingsHandler);
// router.post('/', authenticateToken, createBookingHandler);
// router.put('/:id', authenticateToken, updateBookingHandler);
// router.delete('/:id', authenticateToken, deleteBookingHandler);

// export default router;



// src/Bookings/bookingsRouter.ts
import { Router } from 'express';
import {
  getBookingsHandler,
  createBookingHandler,
  updateBookingHandler,
  deleteBookingHandler,
} from './bookingsController';
import { authenticateToken } from '../Middleware/authMiddleware';

const router = Router();

router.get('/', authenticateToken, getBookingsHandler);
router.post('/', authenticateToken, createBookingHandler);
router.put('/:id', authenticateToken, updateBookingHandler);
router.delete('/:id', authenticateToken, deleteBookingHandler);

export default router;
