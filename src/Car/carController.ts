// import {Request, Response} from 'express';
// import {getAllCars, createCar as createCarService, updateCar as updateCarService, deleteCar as deleteCarService} from './carService';


// export const getCars = async (req: Request, res:Response) => {
//     try {
//         const cars = await getAllCars();
//         res.json(cars);
//     }

//     catch (error) {
//         console.error('Error fetching cars:', error);
//         res.status(500).json({error:'Failed to fetch cars'});

//     }
// };

// export const createCar = async(req:Request, res:Response) => {
//     try{
//         const carData = req.body;
//         const newCar = await createCarService(carData);
//         res.status(201).json(newCar);
//     }
//     catch(error){
//         console.error('Error creating car:', error);
//         res.status(500).json({error:'Failed to create car'});
//     }
// };


// export const updateCar = async(req:Request, res:Response) => {
//     try{
//        const carID = parseInt(req.params.id);
//        const carData = req.body;
//        const updatedCar = await updateCarService(carID, carData);
//        res.json(updatedCar[0]);
//     }

//     catch (error) {
//         console.error('Error updating car:', error);
//         res.status(500).json({error: 'failed to update car'});
//     }
// };


// export const deleteCar = async (req:Request, res:Response) => {
//     try{
//         const carID = parseInt(req.params.id);
//         const deletedCar = await deleteCarService(carID);
//         res.json({message: 'Car Deleted', car:deletedCar[0]})
//     }
//     catch(error) {
//         console.error('Error deleting car:', error);
//         res.status(500).json({error: 'Failed to delete car'})
//     }
// };





import { Request, Response } from 'express';
import {
  getAllCars,
  createCar as createCarService,
  updateCar as updateCarService,
  deleteCar as deleteCarService,
  getCarWithMaintenance,
} from './carService';

// GET /cars - Get all cars
export const getCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars = await getAllCars();
    res.json(cars);
  } catch (error: any) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ error: 'Failed to fetch cars', details: error.message });
  }
};

// POST /cars - Create a new car
export const createCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const carData = req.body;
    const newCar = await createCarService(carData);
    res.status(201).json(newCar);
  } catch (error: any) {
    console.error('Error creating car:', error);
    res.status(500).json({ error: 'Failed to create car', details: error.message });
  }
};

// PUT /cars/:id - Update a car
export const updateCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const carID = parseInt(req.params.id);
    const carData = req.body;
    const updatedCar = await updateCarService(carID, carData);
    res.json(updatedCar[0]); // Assuming your service returns [updatedCar]
  } catch (error: any) {
    console.error('Error updating car:', error);
    res.status(500).json({ error: 'Failed to update car', details: error.message });
  }
};

// DELETE /cars/:id - Delete a car
export const deleteCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const carID = parseInt(req.params.id);
    const deletedCar = await deleteCarService(carID);
    res.json({ message: 'Car Deleted', car: deletedCar[0] });
  } catch (error: any) {
    console.error('Error deleting car:', error);
    res.status(500).json({ error: 'Failed to delete car', details: error.message });
  }
};

// GET /cars/:id/maintenance - Get car with maintenance
export const getCarMaintenance = async (req: Request, res: Response): Promise<void> => {
  try {
    const carID = parseInt(req.params.id);
    if (isNaN(carID)) {
      res.status(400).json({ error: 'Invalid car ID' });
      return;
    }

    const result = await getCarWithMaintenance(carID);
    if (!result.car) {
      res.status(404).json({ error: 'Car not found' });
      return;
    }

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error fetching car maintenance:', error);
    res.status(500).json({ error: 'Failed to fetch car maintenance', details: error.message });
  }
};
