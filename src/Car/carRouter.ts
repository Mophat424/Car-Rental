// import {Router} from 'express';
// import {getCars, createCar, updateCar, deleteCar} from './carController';
// const router = Router();

// router.get('/', getCars);
// router.post('/', createCar);
// router.put('/:id', updateCar);
// router.delete('/:id', deleteCar);

// export default router;

// import { Router, Request, Response, NextFunction } from 'express';
// import { getAllCars, createCar, updateCar, deleteCar, getCarWithMaintenance } from './carService';
// import { authenticateToken, authorizeRole } from '../Middleware/authMiddleware';

// const router = Router();

// // Allow all authenticated users to view all cars
// router.get('/', authenticateToken, async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const cars = await getAllCars();
//     res.json(cars);
//   } catch (error: any) {
//     res.status(500).json({ error: 'Server error', details: error.message });
//   }
// });

// // New endpoint: Fetch a car with maintenance records
// router.get(
//   '/:id/maintenance',
//   authenticateToken,
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const carId = parseInt(req.params.id);
//       if (isNaN(carId)) {
//         res.status(400).json({ error: 'Invalid car ID' });
//         return;
//       }
//       const result = await getCarWithMaintenance(carId);
//       if (!result.car) {
//         res.status(404).json({ error: 'Car not found' });
//         return;
//       }
//       res.status(200).json(result);
//     } catch (error: any) {
//       res.status(500).json({ error: 'Server error', details: error.message });
//     }
//   }
// );

// // Restrict create, update, and delete to admin users only (example structure)
// router.post('/', authenticateToken, authorizeRole(['admin']), async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const carData = req.body;
//     const newCar = await createCar(carData);
//     res.status(201).json(newCar);
//   } catch (error: any) {
//     res.status(500).json({ error: 'Server error', details: error.message });
//   }
// });

// router.put('/:id', authenticateToken, authorizeRole(['admin']), async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const carId = parseInt(req.params.id);
//     const carData = req.body;
//     const updatedCar = await updateCar(carId, carData);
//     res.json(updatedCar);
//   } catch (error: any) {
//     res.status(500).json({ error: 'Server error', details: error.message });
//   }
// });

// router.delete('/:id', authenticateToken, authorizeRole(['admin']), async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const carId = parseInt(req.params.id);
//     const deletedCar = await deleteCar(carId);
//     res.json(deletedCar);
//   } catch (error: any) {
//     res.status(500).json({ error: 'Server error', details: error.message });
//   }
// });

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

const router = Router();

router.get('/', authenticateToken, getCars);

router.get('/:id/maintenance', authenticateToken, getCarMaintenance);

router.post('/', authenticateToken, createCar);

router.put('/:id', authenticateToken, updateCar);

router.delete('/:id', authenticateToken, deleteCar);

export default router;

