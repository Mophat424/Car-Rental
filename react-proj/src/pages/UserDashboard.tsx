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




// // src/pages/UserDashboard.tsx
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
//         setError('An unexpected error occurred');
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
//         alert('An unexpected error occurred');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
//     <div className="container">
//       <h2>Your Bookings</h2>

//       <BookingForm onBookingSuccess={fetchBookings} />

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



// import React, { useEffect, useState } from 'react';
// import BookingForm from '../components/User/BookingForm';

// interface Car {
//   carID: number;
//   carModel: string;
//   year: number;
//   color: string;
//   rentalRate: number;
//   availability: boolean;
// }

// interface Booking {
//   bookingID: number;
//   carID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string;
// }

// const UserDashboard: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [cars, setCars] = useState<Car[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch bookings
//   const fetchBookings = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to fetch bookings');
//       const data = await res.json();
//       setBookings(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     }
//   };

//   // Fetch available cars
//   const fetchCars = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/cars?available=true', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to fetch cars');
//       const data = await res.json();
//       setCars(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//     fetchCars();
//   }, []);

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to cancel this booking?')) return;
//     try {
//       const res = await fetch(`http://localhost:3001/bookings/${id}`, {
//         method: 'DELETE',
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to cancel booking');
//       setBookings((prev) => prev.filter((b) => b.bookingID !== id));
//     } catch (err) {
//       alert(err instanceof Error ? err.message : 'An unexpected error occurred');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Your Dashboard</h2>

//       {/* Car List */}
//       <div>
//         <h3>Available Cars</h3>
//         {loading ? (
//           <p>Loading cars...</p>
//         ) : error ? (
//           <p className="error">{error}</p>
//         ) : cars.length === 0 ? (
//           <p>No cars available.</p>
//         ) : (
//           <ul>
//             {cars.map((car) => (
//               <li key={car.carID}>
//                 {car.carModel} ({car.year}, {car.color}) - ${car.rentalRate}/day
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Booking Form */}
//       <BookingForm onBookingSuccess={() => { fetchBookings(); fetchCars(); }} />

//       {/* Bookings List */}
//       <h3>Your Bookings</h3>
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


//GROK
// import React, { useEffect, useState } from 'react';
// import BookingForm from '../components/User/BookingForm';

// interface Car {
//   carID: number;
//   carModel: string;
//   year: number;
//   color: string;
//   rentalRate: number;
//   availability: boolean;
// }

// interface Booking {
//   bookingID: number;
//   carID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string;
// }

// const UserDashboard: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [cars, setCars] = useState<Car[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchBookings = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to fetch bookings');
//       const data = await res.json();
//       setBookings(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     }
//   };

//   const fetchCars = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/cars?available=true', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to fetch cars');
//       const data = await res.json();
//       setCars(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//     fetchCars();
//   }, []);

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to cancel this booking?')) return;
//     try {
//       const res = await fetch(`http://localhost:3001/bookings/${id}`, {
//         method: 'DELETE',
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to cancel booking');
//       setBookings((prev) => prev.filter((b) => b.bookingID !== id));
//     } catch (err) {
//       alert(err instanceof Error ? err.message : 'An unexpected error occurred');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Your Dashboard</h2>

//       {/* Available Cars */}
//       <div>
//         <h3>Available Cars</h3>
//         {loading ? (
//           <p>Loading cars...</p>
//         ) : error ? (
//           <p className="error">{error}</p>
//         ) : cars.length === 0 ? (
//           <p>No cars available.</p>
//         ) : (
//           <ul>
//             {cars.map((car) => (
//               <li key={car.carID}>
//                 {car.carModel} ({car.year}, {car.color}) - ${car.rentalRate}/day
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Booking Form */}
//       <BookingForm cars={cars} onBookingSuccess={() => { fetchBookings(); fetchCars(); }} />

//       {/* Bookings List */}
//       <h3>Your Bookings</h3>
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


// import React, { useEffect, useState } from 'react';
// import BookingForm from '../components/User/BookingForm';
// import { Car } from '../types/Car';

// interface Booking {
//   bookingID: number;
//   carID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string;
// }

// const UserDashboard: React.FC = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [cars, setCars] = useState<Car[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchBookings = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to fetch bookings');
//       const data = await res.json();
//       setBookings(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     }
//   };

//   const fetchCars = async () => {
//     try {
//       const res = await fetch('http://localhost:3001/cars?available=true', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to fetch cars');
//       const data = await res.json();
//       setCars(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//     fetchCars();
//   }, []);

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to cancel this booking?')) return;
//     try {
//       const res = await fetch(`http://localhost:3001/bookings/${id}`, {
//         method: 'DELETE',
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!res.ok) throw new Error('Failed to cancel booking');
//       setBookings((prev) => prev.filter((b) => b.bookingID !== id));
//     } catch (err) {
//       alert(err instanceof Error ? err.message : 'An unexpected error occurred');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Your Dashboard</h2>

//       {/* Available Cars */}
//       <div style={{ marginTop: '2rem' }}>
//         <h3>Available Cars</h3>
//         {loading ? (
//           <p>Loading cars...</p>
//         ) : error ? (
//           <p className="error">{error}</p>
//         ) : cars.length === 0 ? (
//           <p>No cars available at the moment.</p>
//         ) : (
//           <ul style={{ paddingLeft: '1rem' }}>
//             {cars.map((car) => (
//               <li key={car.carID}>
//                 <strong>{car.carModel}</strong> ({car.year}, {car.color}) — <em>${car.rentalRate}/day</em>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Booking Form */}
//       <div className="booking-form">
//         <BookingForm cars={cars} onBookingSuccess={() => { fetchBookings(); fetchCars(); }} />
//       </div>

//       {/* Bookings List */}
//       <div style={{ marginTop: '2rem' }}>
//         <h3>Your Bookings</h3>
//         {loading ? (
//           <p>Loading bookings...</p>
//         ) : error ? (
//           <p className="error">{error}</p>
//         ) : bookings.length === 0 ? (
//           <p>No bookings yet.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Car ID</th>
//                 <th>Start Date</th>
//                 <th>End Date</th>
//                 <th>Total Amount</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((b) => (
//                 <tr key={b.bookingID}>
//                   <td>{b.carID}</td>
//                   <td>{b.rentalStartDate}</td>
//                   <td>{b.rentalEndDate}</td>
//                   <td>${b.totalAmount}</td>
//                   <td>
//                     <button onClick={() => handleDelete(b.bookingID)}>Cancel</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const UserDashboard: React.FC = () => {
//   return (
//     <div className="container">
//       <h2>Welcome to Your Dashboard</h2>
//       <p>Use the sidebar to book a car, view available options, or manage your bookings.</p>

//       <div style={{ marginTop: '2rem' }}>
//         <h3>Quick Actions</h3>
//         <ul>
//           <li><Link to="/cars">View Available Cars</Link></li>
//           <li><Link to="/bookings/new">Book a Car</Link></li>
//           <li><Link to="/bookings">My Bookings</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;




import React from 'react';

const UserDashboard: React.FC = () => (
  <div className="container">
    <h2>Welcome to Your Dashboard</h2>
    <p>Use the sidebar menu to view cars, book, or manage your bookings.</p>
  </div>
);

export default UserDashboard;
