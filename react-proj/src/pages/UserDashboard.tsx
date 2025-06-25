// import React from 'react';

// const UserDashboard = () => {
//   return (
//     <div className="container">
//       <h2>User Dashboard</h2>
//       <p>Welcome! You can view cars and your bookings here.</p>
//     </div>
//   );
// };

// export default UserDashboard;


// src/pages/UserDashboard.tsx

// import React, { useEffect, useState } from 'react';

// interface Booking {
//   bookingID: number;
//   carID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string;
// }

// const UserDashboard: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchBookings = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (!res.ok) throw new Error('Failed to fetch bookings');

//       const data = await res.json();
//       setBookings(data);
//     } catch (err: any) {
//       setError(err.message || 'Unexpected error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to cancel this booking?')) return;

//     try {
//       const res = await fetch(`http://localhost:3001/bookings/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (!res.ok) throw new Error('Failed to cancel booking');

//       setBookings((prev) => prev.filter((b) => b.bookingID !== id));
//     } catch (err: any) {
//       alert(err.message || 'Error deleting booking');
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   if (loading) return <p>Loading bookings...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="container">
//       <h2>Your Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Car ID</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Total Amount</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((b) => (
//               <tr key={b.bookingID}>
//                 <td>{b.carID}</td>
//                 <td>{b.rentalStartDate}</td>
//                 <td>{b.rentalEndDate}</td>
//                 <td>${b.totalAmount}</td>
//                 <td>
//                   <button onClick={() => handleDelete(b.bookingID)}>Cancel</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;



// import React, { useEffect, useState } from 'react';


// interface Booking {
//   bookingID: number;
//   carID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string;
// }

// const UserDashboard: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchBookings = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (!res.ok) throw new Error('Failed to fetch bookings');

//       const data = await res.json();
//       setBookings(data);
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

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to cancel this booking?')) return;

//     try {
//       const res = await fetch(`http://localhost:3001/bookings/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (!res.ok) throw new Error('Failed to cancel booking');

//       setBookings((prev) => prev.filter((b) => b.bookingID !== id));
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         alert(err.message);
//       } else {
//         alert('Error deleting booking');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   if (loading) return <p>Loading bookings...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="container">
//       <h2>Your Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Car ID</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Total Amount</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((b) => (
//               <tr key={b.bookingID}>
//                 <td>{b.carID}</td>
//                 <td>{b.rentalStartDate}</td>
//                 <td>{b.rentalEndDate}</td>
//                 <td>${b.totalAmount}</td>
//                 <td>
//                   <button onClick={() => handleDelete(b.bookingID)}>Cancel</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;



// import React, { useEffect, useState } from 'react';
// import BookingForm from '../components/User/BookingForm';

// interface Booking {
//   bookingID: number;
//   carID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string;
// }

// const UserDashboard: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchBookings = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (!res.ok) throw new Error('Failed to fetch bookings');

//       const data = await res.json();
//       setBookings(data);
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

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to cancel this booking?')) return;

//     try {
//       const res = await fetch(`http://localhost:3001/bookings/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (!res.ok) throw new Error('Failed to cancel booking');

//       setBookings((prev) => prev.filter((b) => b.bookingID !== id));
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         alert(err.message);
//       } else {
//         alert('Error deleting booking');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
//     <div className="container">
//       <h2>Your Bookings</h2>

//       {/* Show the booking form */}
//       <BookingForm onBookingSuccess={fetchBookings} />

//       {/* Show bookings table */}
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
//               <th>Car ID</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Total Amount</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((b) => (
//               <tr key={b.bookingID}>
//                 <td>{b.carID}</td>
//                 <td>{b.rentalStartDate}</td>
//                 <td>{b.rentalEndDate}</td>
//                 <td>${b.totalAmount}</td>
//                 <td>
//                   <button onClick={() => handleDelete(b.bookingID)}>Cancel</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;




// src/pages/UserDashboard.tsx
import React, { useEffect, useState } from 'react';
import BookingForm from '../components/User/BookingForm';

interface Booking {
  bookingID: number;
  carID: number;
  rentalStartDate: string;
  rentalEndDate: string;
  totalAmount: string;
}

const UserDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBookings = async () => {
    try {
      const res = await fetch('http://localhost:3001/bookings', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!res.ok) throw new Error('Failed to fetch bookings');

      const data = await res.json();
      setBookings(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;

    try {
      const res = await fetch(`http://localhost:3001/bookings/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!res.ok) throw new Error('Failed to cancel booking');

      setBookings((prev) => prev.filter((b) => b.bookingID !== id));
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert('An unexpected error occurred');
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="container">
      <h2>Your Bookings</h2>

      <BookingForm onBookingSuccess={fetchBookings} />

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
              <th>Car ID</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.bookingID}>
                <td>{b.carID}</td>
                <td>{b.rentalStartDate}</td>
                <td>{b.rentalEndDate}</td>
                <td>${b.totalAmount}</td>
                <td>
                  <button onClick={() => handleDelete(b.bookingID)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserDashboard;
