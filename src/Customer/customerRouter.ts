// import { Router } from 'express';
// import { getCustomersHandler, createCustomerHandler, updateCustomerHandler, deleteCustomerHandler } from './customerController';
// import { authenticateToken, authorizeRole } from '../Middleware/authMiddleware';

// const router = Router();

// // Allow all authenticated users to view customers
// router.get('/', authenticateToken, getCustomersHandler);



// // Restrict create, update, and delete to admin users only
// router.post('/', authenticateToken, authorizeRole(['admin']), createCustomerHandler);
// router.put('/:id', authenticateToken, authorizeRole(['admin']), updateCustomerHandler);
// router.delete('/:id', authenticateToken, authorizeRole(['admin']), deleteCustomerHandler);

// export default router;











//working
// import { Router, Request, Response, NextFunction } from 'express';
// import { getCustomersHandler, createCustomerHandler, updateCustomerHandler, deleteCustomerHandler } from './customerController';
// import { authenticateToken, authorizeRole } from '../Middleware/authMiddleware';
// import { getCustomerWithBookingsAndPayments } from './customerService';

// const router = Router();

// // Allow all authenticated users to view customers
// router.get('/', authenticateToken, getCustomersHandler);

// // New endpoint: Fetch a customer with bookings and payments
// router.get(
//   '/:id/bookings-payments',
//   authenticateToken,
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const customerId = parseInt(req.params.id);
//       if (isNaN(customerId)) {
//         res.status(400).json({ error: 'Invalid customer ID' });
//         return; // Explicit return to stop execution
//       }
//       const result = await getCustomerWithBookingsAndPayments(customerId);
//       if (!result.customer) {
//         res.status(404).json({ error: 'Customer not found' });
//         return; // Explicit return
//       }
//       res.status(200).json(result); // Implicitly satisfies Express handler
//     } catch (error: any) {
//       res.status(500).json({ error: 'Server error', details: error.message });
//     }
//     // No explicit return of Response object
//   }
// );

// // Restrict create, update, and delete to admin users only
// router.post('/', authenticateToken, authorizeRole(['admin']), createCustomerHandler);
// router.put('/:id', authenticateToken, authorizeRole(['admin']), updateCustomerHandler);
// router.delete('/:id', authenticateToken, authorizeRole(['admin']), deleteCustomerHandler);

// export default router;








// src/Customer/customerRouter.ts
import { Router } from 'express';
import {
  getCustomersHandler,
  createCustomerHandler,
  updateCustomerHandler,
  deleteCustomerHandler,
} from './customerController';
import { authenticateToken, authorizeRole } from '../Middleware/authMiddleware';
import { getCustomerWithBookingsAndPayments } from './customerService';
import { catchAsync } from '../utils/catchAsync'; // Importing the wrapper

const router = Router();

// Allow all authenticated users to view customers
router.get('/', authenticateToken, getCustomersHandler);

// New endpoint: Fetch a customer with bookings and payments
router.get(
  '/:id/bookings-payments',
  authenticateToken,
  catchAsync(async (req, res) => {
    const customerId = parseInt(req.params.id);
    if (isNaN(customerId)) {
      return res.status(400).json({ error: 'Invalid customer ID' });
    }

    const result = await getCustomerWithBookingsAndPayments(customerId);

    if (!result.customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    return res.status(200).json(result);
  })
);

// Restrict create, update, and delete to admin users only
// router.post('/', authenticateToken, authorizeRole(['admin']), createCustomerHandler);
router.post(  '/',  authenticateToken, authorizeRole(['admin']),  catchAsync(createCustomerHandler));
router.put('/:id', authenticateToken, authorizeRole(['admin']), updateCustomerHandler);
router.delete('/:id', authenticateToken, authorizeRole(['admin']), deleteCustomerHandler);

export default router;
