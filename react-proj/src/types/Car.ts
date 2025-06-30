
// export interface Car {
//   carID: number;
//   carModel: string;
//   year: string;
//   color?: string;
//   rentalRate: string;
//   availability: boolean;
//   locationID?: number;
// }










export interface Car {
  carID?: number; 
  carModel: string;
  year: string;
  color?: string;
  rentalRate: string;
  availability: boolean;
  locationID?: number;
}


export interface MaintenanceRecord {
  maintenanceID: number;
  carID: number;
  maintenanceDate: string;
  description: string;
  cost: string;
}

export interface CarWithMaintenance {
  car: Car;
  maintenance: MaintenanceRecord[];
}
