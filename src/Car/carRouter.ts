// //working
// import { Router } from 'express';
// import {
//   getCars,
//   createCar,
//   updateCar,
//   deleteCar,
//   getCarMaintenance
// } from './carController';
// import { authenticateToken } from '../Middleware/authMiddleware';

// const router = Router();

// router.get('/', authenticateToken, getCars);

// router.get('/:id/maintenance', authenticateToken, getCarMaintenance);

// router.post('/', authenticateToken, createCar);

// router.put('/:id', authenticateToken, updateCar);

// router.delete('/:id', authenticateToken, deleteCar);

// export default router;




import { Router } from 'express';
import {
  getCars,
  createCar,
  updateCar,
  deleteCar,
  getCarMaintenance
} from './carController';
import { authenticateToken } from '../Middleware/authMiddleware';
import { catchAsync } from '../utils/catchAsync'; // adjust path if needed

const router = Router();

router.get('/', authenticateToken, catchAsync(getCars));
router.get('/:id/maintenance', authenticateToken, catchAsync(getCarMaintenance));
router.post('/', authenticateToken, catchAsync(createCar));
router.put('/:id', authenticateToken, catchAsync(updateCar));
router.delete('/:id', authenticateToken, catchAsync(deleteCar));

export default router;

