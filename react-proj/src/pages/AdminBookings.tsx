// import React, { useEffect, useState } from 'react';

// interface Booking {
//   bookingID: number;
//   carID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string;
//   userId: string;
// }

// const AdminBookings: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await fetch('http://localhost:3001/bookings', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         });
//         if (!res.ok) throw new Error('Failed to fetch bookings');
//         const data = await res.json();
//         setBookings(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An unexpected error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBookings();
//   }, []);

//   return (
//     <div>
//       <h2>All Bookings</h2>
//       {loading ? (
//         <p>Loading bookings...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Booking ID</th>
//               <th>Car ID</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Total Amount</th>
//               <th>User ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((b) => (
//               <tr key={b.bookingID}>
//                 <td>{b.bookingID}</td>
//                 <td>{b.carID}</td>
//                 <td>{b.rentalStartDate}</td>
//                 <td>{b.rentalEndDate}</td>
//                 <td>${b.totalAmount}</td>
//                 <td>{b.userId || 'N/A'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminBookings;



import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import {fetchUserBookings , selectBookings } from '../store/slices/bookingSlice';
import { Booking } from '../types/Booking';


const AdminBookings: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bookings, loading, error } = useAppSelector(selectBookings);

  useEffect(() => {
    dispatch(fetchUserBookings());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>All Bookings</h2>
      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Car ID</th>
              <th>Start</th>
              <th>End</th>
              <th>Total</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
         {bookings.map((b: Booking) => (
  <tr key={b.bookingID}>
    <td>{b.bookingID}</td>
    ...
  </tr>
))}

          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminBookings;
