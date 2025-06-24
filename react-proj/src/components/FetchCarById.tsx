// import React, { useEffect, useState } from 'react';
// import type { Car } from '../types/Car';

// const CarList: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/cars');
//         if (!response.ok) throw new Error('Failed to fetch cars');
//         const data: Car[] = await response.json();
//         setCars(data);
//       } catch (err: unknown) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError('An unexpected error occurred');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   if (loading) return <p>Loading cars...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Available Cars</h2>
//       <ul>
//         {cars.map((car) => (
//           <li key={car.carID}>
//             {car.carModel} ({car.year}) - {car.color} - ${car.rentalPrice}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CarList;


// import React, { useState } from 'react';

// interface MaintenanceRecord {
//   maintenanceID: number;
//   carID: number;
//   maintenanceDate: string;
//   description: string;
//   cost: string;
// }

// interface Car {
//   carID: number;
//   carModel: string;
//   year: string;
//   color: string;
//   rentalRate: string;
//   availability: boolean;
//   locationID: number | null;
// }

// interface CarWithMaintenance {
//   car: Car;
//   maintenance: MaintenanceRecord[];
// }

// const FetchCarById: React.FC = () => {
//   const [carID, setCarID] = useState('');
//   const [carData, setCarData] = useState<CarWithMaintenance | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const fetchCarById = async () => {
//     setError(null);
//     setLoading(true);
//     setCarData(null);

//     try {
//       const response = await fetch(`http://localhost:3001/cars/${carID}/maintenance`);
//       if (!response.ok) throw new Error('Car not found');
//       const data: CarWithMaintenance = await response.json();
//       setCarData(data);
//     } catch (err: unknown) {
//       if (err instanceof Error) setError(err.message);
//       else setError('Unexpected error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Find Car by ID</h2>
//       <input
//         type="text"
//         value={carID}
//         onChange={(e) => setCarID(e.target.value)}
//         placeholder="Enter car ID"
//       />
//       <button onClick={fetchCarById} disabled={loading || !carID}>
//         {loading ? 'Searching...' : 'Search'}
//       </button>

//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       {carData && (
//         <div style={{ marginTop: '1rem' }}>
//           <h3>Car Details</h3>
//           <p><strong>Model:</strong> {carData.car.carModel}</p>
//           <p><strong>Year:</strong> {carData.car.year}</p>
//           <p><strong>Color:</strong> {carData.car.color}</p>
//           <p><strong>Rental Rate:</strong> ${carData.car.rentalRate}</p>
//           <p><strong>Available:</strong> {carData.car.availability ? "Yes" : "No"}</p>
//           <p><strong>Location ID:</strong> {carData.car.locationID ?? "N/A"}</p>

//           <h4>Maintenance Records</h4>
//           {carData.maintenance.length > 0 ? (
//             <ul>
//               {carData.maintenance.map((record) => (
//                 <li key={record.maintenanceID}>
//                   {record.maintenanceDate}: {record.description} - ${record.cost}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No maintenance records found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchCarById;



// import React, { useState } from 'react';
// import type { Car } from '../types/Car';

// const FetchCarById: React.FC = () => {
//   const [carID, setCarID] = useState('');
//   const [car, setCar] = useState<Car | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const fetchCarById = async () => {
//     setError(null);
//     setCar(null);
//     setLoading(true);

//     try {
//       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzUwMjk4MjYyLCJleHAiOjE3NTAzMDE4NjJ9.vNLTIs0u8ze8T3Bb0YrgAZopFudb5kmCoZHjTQO3Ur0"
//       if (!token) {
//         throw new Error('No auth token found. Please log in.');
//       }

//       const response = await fetch(`http://localhost:3001/cars/${carID}/maintenance`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       if (!response.ok) {
//         const errorBody = await response.json().catch(() => ({}));
//         throw new Error(errorBody?.error || 'Car not found');
//       }

//       const data = await response.json();
//       setCar(data.car); // if your backend returns { car, maintenance }

//     } catch (err) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('Unexpected error');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Find Car by ID</h2>
//       <input
//         type="text"
//         value={carID}
//         onChange={(e) => setCarID(e.target.value)}
//         placeholder="Enter car ID"
//       />
//       <button onClick={fetchCarById} disabled={loading || !carID}>
//         {loading ? 'Searching...' : 'Search'}
//       </button>

//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       {car && (
//         <div style={{ marginTop: '1rem' }}>
//           <p><strong>Model:</strong> {car.carModel}</p>
//           <p><strong>Year:</strong> {car.year}</p>
//           <p><strong>Color:</strong> {car.color}</p>
//           <p><strong>Rental Rate:</strong> ${car.rentalRate}</p>
//           <p><strong>Available:</strong> {car.availability ? "Yes" : "No"}</p>
//           <p><strong>Location ID:</strong> {car.locationID ?? "N/A"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchCarById;



// import React, { useState } from 'react';
// import type { Car } from '../types/Car';

// const FetchCarById: React.FC = () => {
//   const [carID, setCarID] = useState('');
//   const [car, setCar] = useState<Car | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const fetchCarById = async () => {
//     setError(null);
//     setLoading(true);

//     try {
//       const token = localStorage.getItem('token'); // Make sure token is stored here

//       if (!token) {
//         throw new Error('Missing authentication token. Please login.');
//       }

//       const response = await fetch(`http://localhost:3001/cars/${carID}/maintenance`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (!response.ok) {
//         const errBody = await response.json().catch(() => ({}));
//         throw new Error(errBody?.error || `Error ${response.status}`);
//       }

//       const data = await response.json();
//       setCar(data.car); // Assuming backend returns { car, maintenance }

//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('Unexpected error');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Find Car by ID</h2>
//       <input
//         type="text"
//         value={carID}
//         onChange={(e) => setCarID(e.target.value)}
//         placeholder="Enter car ID"
//       />
//       <button onClick={fetchCarById} disabled={loading || !carID}>
//         {loading ? 'Searching...' : 'Search'}
//       </button>

//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       {car && (
//         <div style={{ marginTop: '1rem' }}>
//           <p><strong>Model:</strong> {car.carModel}</p>
//           <p><strong>Year:</strong> {car.year}</p>
//           <p><strong>Color:</strong> {car.color}</p>
//           <p><strong>Rental Rate:</strong> ${car.rentalRate}</p>
//           <p><strong>Available:</strong> {car.availability ? "Yes" : "No"}</p>
//           <p><strong>Location ID:</strong> {car.locationID ?? "N/A"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchCarById;





import React, { useState } from 'react';
import type { Car } from '../types/Car';
import '../index.css';

const FetchCarById: React.FC = () => {
  const [carID, setCarID] = useState('');
  const [car, setCar] = useState<Car | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCarById = async () => {
    setError(null);
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Missing authentication token. Please login.');

      const response = await fetch(`http://localhost:3001/cars/${carID}/maintenance`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        throw new Error(errBody?.error || `Error ${response.status}`);
      }

      const data = await response.json();
      setCar(data.car);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError('Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Find Car by ID</h2>
      <input
        type="text"
        value={carID}
        onChange={(e) => setCarID(e.target.value)}
        placeholder="Enter car ID"
      />
      <button onClick={fetchCarById} disabled={loading || !carID}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p className="error">Error: {error}</p>}

      {car && (
        <div>
          <p><strong>Model:</strong> {car.carModel}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Color:</strong> {car.color}</p>
          <p><strong>Rental Rate:</strong> ${car.rentalRate}</p>
          <p><strong>Available:</strong> {car.availability ? 'Yes' : 'No'}</p>
          <p><strong>Location ID:</strong> {car.locationID ?? 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default FetchCarById;
