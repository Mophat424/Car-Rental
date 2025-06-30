// // src/pages/UserCarTable.tsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface Car {
//   carID: number;
//   carModel: string;
//   year: string;
//   color?: string;
//   rentalRate: string;
//   availability: boolean;
// }

// const UserCarTable: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const res = await fetch('http://localhost:3001/cars?available=true', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         if (!res.ok) throw new Error('Failed to fetch available cars');
//         const data = await res.json();
//         setCars(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Unexpected error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   const handleBook = (carID: number) => {
//     navigate(`/bookings/new?carID=${carID}`);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (cars.length === 0) return <p>No available cars.</p>;

//   return (
//     <div>
//       <h2>Available Cars</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Model</th>
//             <th>Year</th>
//             <th>Color</th>
//             <th>Rate</th>
//             <th>Book</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cars.map((car) => (
//             <tr key={car.carID}>
//               <td>{car.carModel}</td>
//               <td>{car.year}</td>
//               <td>{car.color || '—'}</td>
//               <td>${car.rentalRate}/day</td>
//               <td>
//                 <button onClick={() => handleBook(car.carID)}>Book</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserCarTable;



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { fetchAvailableCars } from '../store/slices/userCarsSlice';

const UserCarTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { cars, loading, error } = useAppSelector((state) => state.userCars);

  useEffect(() => {
    dispatch(fetchAvailableCars());
  }, [dispatch]);

  const handleBook = (carID: number) => {
    navigate(`/bookings/new?carID=${carID}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (cars.length === 0) return <p>No available cars.</p>;

  return (
    <div>
      <h2>Available Cars</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Rate</th>
            <th>Book</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.carID}>
              <td>{car.carModel}</td>
              <td>{car.year}</td>
              <td>{car.color || '—'}</td>
              <td>${car.rentalRate}/day</td>
              <td>
                <button onClick={() => handleBook(car.carID)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCarTable;

