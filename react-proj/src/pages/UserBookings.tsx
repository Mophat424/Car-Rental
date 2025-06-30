// // src/pages/UserBookings.tsx
// import React, { useEffect, useState } from 'react';

// interface Booking {
//   bookingID: number;
//   carID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string;
// }

// const UserBookings: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   const fetchBookings = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to fetch bookings');
//       const data = await res.json();
//       setBookings(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Unexpected error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to cancel this booking?')) return;

//     try {
//       const res = await fetch(`http://localhost:3001/bookings/${id}`, {
//         method: 'DELETE',
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to delete booking');
//       await fetchBookings();
//     } catch (err) {
//       alert(err instanceof Error ? err.message : 'An error occurred');
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
//     <div>
//       <h2>My Bookings</h2>
//       {loading ? (
//         <p>Loading bookings...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : bookings.length === 0 ? (
//         <p>No bookings found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Car ID</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Total</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={booking.bookingID}>
//                 <td>{booking.carID}</td>
//                 <td>{booking.rentalStartDate}</td>
//                 <td>{booking.rentalEndDate}</td>
//                 <td>${booking.totalAmount}</td>
//                 <td>
//                   <button onClick={() => handleDelete(booking.bookingID)}>Cancel</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UserBookings;






import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import {
  fetchUserBookings,
  deleteBooking,
  selectBookings,
} from '../store/slices/bookingSlice';
import { Booking } from '../types/Booking';


const UserBookings: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bookings, loading, error } = useAppSelector(selectBookings);

  useEffect(() => {
    dispatch(fetchUserBookings());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;
    dispatch(deleteBooking(id));
  };

  return (
    <div>
      <h2>My Bookings</h2>
      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Car ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking:Booking) => (
              <tr key={booking.bookingID}>
                <td>{booking.carID}</td>
                <td>{booking.rentalStartDate}</td>
                <td>{booking.rentalEndDate}</td>
                <td>${booking.totalAmount}</td>
                <td>
                  <button onClick={() => handleDelete(booking.bookingID)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserBookings;
