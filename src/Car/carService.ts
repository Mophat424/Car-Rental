
// import db from '../Drizzle/db';
// import { CarTable, MaintenanceTable } from '../Drizzle/schema';
// import { eq, inArray } from 'drizzle-orm';

// // Define interfaces for type safety
// interface Car {
//   carID: number;
//   carModel: string;
//   year: string;
//   color: string | null;
//   rentalRate: string;
//   availability: boolean | null;
//   locationID: number | null;
// }

// interface MaintenanceRecord {
//   maintenanceID: number;
//   carID: number;
//   maintenanceDate: string;
//   description: string | null; // Allow null to match schema
//   cost: string | null; // Allow null to match schema
//   status: string | null; // Already nullable, but confirm
// }

// interface CarWithMaintenance {
//   car: Car | null;
//   maintenanceRecords: MaintenanceRecord[];
// }

// export const getCarWithMaintenance = async (carId: number): Promise<CarWithMaintenance> => {
//   // Step 1: Fetch the car
//   const carData = await db
//     .select({
//       carID: CarTable.carID,
//       carModel: CarTable.carModel,
//       year: CarTable.year,
//       color: CarTable.color,
//       rentalRate: CarTable.rentalRate,
//       availability: CarTable.availability,
//       locationID: CarTable.locationID,
//     })
//     .from(CarTable)
//     .where(eq(CarTable.carID, carId));

//   const car: Car | null =
//     carData.length > 0
//       ? {
//           carID: carData[0].carID,
//           carModel: carData[0].carModel,
//           year: carData[0].year,
//           color: carData[0].color,
//           rentalRate: carData[0].rentalRate,
//           availability: carData[0].availability,
//           locationID: carData[0].locationID,
//         }
//       : null;

//   // Step 2: Fetch maintenance records for the car
//   const maintenanceData = await db
//     .select({
//       maintenanceID: MaintenanceTable.maintenanceID,
//       carID: MaintenanceTable.carID,
//       maintenanceDate: MaintenanceTable.maintenanceDate,
//       description: MaintenanceTable.description,
//       cost: MaintenanceTable.cost,
//       status: MaintenanceTable.status,
//     })
//     .from(MaintenanceTable)
//     .where(eq(MaintenanceTable.carID, carId));

//   const maintenanceRecords: MaintenanceRecord[] = maintenanceData.map(record => ({
//     maintenanceID: record.maintenanceID,
//     carID: record.carID,
//     maintenanceDate: record.maintenanceDate,
//     description: record.description,
//     cost: record.cost,
//     status: record.status,
//   }));

//   return {
//     car,
//     maintenanceRecords,
//   };
// };

// // Keep existing functions
// export const getAllCars = async (): Promise<Car[]> => {
//   return await db.select().from(CarTable);
// };

// export const createCar = async (carData: {
//   carModel: string;
//   year: string;
//   color?: string;
//   rentalRate: string;
//   availability?: boolean;
//   locationID?: number;
// }): Promise<Car[]> => {
//   return await db.insert(CarTable).values(carData).returning();
// };

// export const updateCar = async (carID: number, carData: {
//   carModel?: string;
//   year?: string;
//   color?: string;
//   rentalRate?: string;
//   availability?: boolean;
//   locationID?: number;
// }): Promise<Car[]> => {
//   return await db
//     .update(CarTable)
//     .set(carData)
//     .where(eq(CarTable.carID, carID))
//     .returning();
// };

// export const deleteCar = async (carID: number): Promise<Car[]> => {
//   return await db
//     .delete(CarTable)
//     .where(eq(CarTable.carID, carID))
//     .returning();
// };





import db from "../Drizzle/db";
import { CarTable } from "../Drizzle/schema";
import { eq } from "drizzle-orm";
import { MaintenanceTable } from "../Drizzle/schema";

export const getAllCars = async () => {
  return await db.select().from(CarTable);
};

export const createCar = async (carData: any) => {
  return await db.insert(CarTable).values(carData).returning();
};

export const updateCar = async (id: number, carData: any) => {
  return await db
    .update(CarTable)
    .set(carData)
    .where(eq(CarTable.carID, id))
    .returning();
};

export const deleteCar = async (id: number) => {
  return await db
    .delete(CarTable)
    .where(eq(CarTable.carID, id))
    .returning();
};

export const getCarWithMaintenance = async (carId: number) => {
  const car = await db.query.CarTable.findFirst({
    where: (cars, { eq }) => eq(cars.carID, carId),
  });

  const maintenanceRecords = await db
    .select()
    .from(MaintenanceTable)
    .where(eq(MaintenanceTable.carID, carId));

  return { car, maintenance: maintenanceRecords };
};





