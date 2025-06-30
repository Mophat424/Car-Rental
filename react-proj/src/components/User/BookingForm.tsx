// import React, { useEffect, useState } from 'react';

// interface Car {
//   carID: number;
//   carModel: string;
//   rentalRate: string;
//   availability: boolean;
// }

// interface BookingFormProps {
//   onBookingSuccess: () => void;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ onBookingSuccess }) => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [selectedCar, setSelectedCar] = useState<number | null>(null);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchAvailableCars = async () => {
//       try {
//         const res = await fetch('http://localhost:3001/cars', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         const data = await res.json();
//         setCars(data.filter((car: Car) => car.availability));
//       } catch (err) {
//         setError('Failed to load cars');
//       }
//     };
//     fetchAvailableCars();
//   }, []);

//   const calculateTotal = (): string => {
//     if (!selectedCar || !startDate || !endDate) return '0';
//     const car = cars.find((c) => c.carID === selectedCar);
//     const days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24);
//     return (days * parseFloat(car?.rentalRate || '0')).toFixed(2);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     if (!selectedCar || !startDate || !endDate) {
//       setError('Please fill all fields');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify({
//           carID: selectedCar,
//           rentalStartDate: startDate,
//           rentalEndDate: endDate,
//           totalAmount: calculateTotal(),
//         }),
//       });

//       if (!res.ok) throw new Error('Booking failed');
//       onBookingSuccess();
//     } catch (err) {
//       setError('Could not complete booking');
//     }
//   };

//   return (
//     <div className="container">
//       <h3>Book a Car</h3>
//       <form onSubmit={handleSubmit}>
//         <select value={selectedCar || ''} onChange={(e) => setSelectedCar(Number(e.target.value))}>
//           <option value="">-- Select Car --</option>
//           {cars.map((car) => (
//             <option key={car.carID} value={car.carID}>
//               {car.carModel} - ${car.rentalRate}/day
//             </option>
//           ))}
//         </select>

//         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
//         <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />

//         <p><strong>Total:</strong> ${calculateTotal()}</p>

//         <button type="submit">Confirm Booking</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default BookingForm;



// import React, { useEffect, useState } from 'react';

// interface Car {
//   carID: number;
//   carModel: string;
//   rentalRate: string;
//   availability: boolean;
// }

// interface BookingFormProps {
//   onBookingSuccess: () => void;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ onBookingSuccess }) => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [selectedCar, setSelectedCar] = useState<number | null>(null);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchAvailableCars = async () => {
//       try {
//         const res = await fetch('http://localhost:3001/cars', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         const data = await res.json();
//         setCars(data.filter((car: Car) => car.availability));
//       } catch (err: unknown) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError('Failed to load cars');
//         }
//       }
//     };
//     fetchAvailableCars();
//   }, []);

//   const calculateTotal = (): string => {
//     if (!selectedCar || !startDate || !endDate) return '0';
//     const car = cars.find((c) => c.carID === selectedCar);
//     const days =
//       (new Date(endDate).getTime() - new Date(startDate).getTime()) /
//       (1000 * 60 * 60 * 24);
//     return (days * parseFloat(car?.rentalRate || '0')).toFixed(2);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     if (!selectedCar || !startDate || !endDate) {
//       setError('Please fill all fields');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify({
//           carID: selectedCar,
//           rentalStartDate: startDate,
//           rentalEndDate: endDate,
//           totalAmount: calculateTotal(),
//         }),
//       });

//       if (!res.ok) throw new Error('Booking failed');
//       onBookingSuccess();
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('Could not complete booking');
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <h3>Book a Car</h3>
//       <form onSubmit={handleSubmit}>
//         <select
//           value={selectedCar || ''}
//           onChange={(e) => setSelectedCar(Number(e.target.value))}
//         >
//           <option value="">-- Select Car --</option>
//           {cars.map((car) => (
//             <option key={car.carID} value={car.carID}>
//               {car.carModel} - ${car.rentalRate}/day
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           required
//         />

//         <p>
//           <strong>Total:</strong> ${calculateTotal()}
//         </p>

//         <button type="submit">Confirm Booking</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default BookingForm;




// import React, { useEffect, useState } from 'react';

// interface Car {
//   carID: number;
//   carModel: string;
//   rentalRate: string;
//   availability: boolean;
// }

// interface BookingFormProps {
//   onBookingSuccess: () => void;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ onBookingSuccess }) => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [selectedCar, setSelectedCar] = useState<number | null>(null);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   useEffect(() => {
//     const fetchAvailableCars = async () => {
//       try {
//         const res = await fetch('http://localhost:3001/cars', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         const data = await res.json();
//         setCars(data.filter((car: Car) => car.availability));
//       } catch {
//         setError('Failed to load available cars.');
//       }
//     };
//     fetchAvailableCars();
//   }, []);

//   const calculateTotal = (): string => {
//     if (!selectedCar || !startDate || !endDate) return '0';
//     const car = cars.find((c) => c.carID === selectedCar);
//     const days =
//       (new Date(endDate).getTime() - new Date(startDate).getTime()) /
//       (1000 * 60 * 60 * 24);
//     return (days * parseFloat(car?.rentalRate || '0')).toFixed(2);
//   };

//   const calculateDays = (): number => {
//     if (!startDate || !endDate) return 0;
//     const days =
//       (new Date(endDate).getTime() - new Date(startDate).getTime()) /
//       (1000 * 60 * 60 * 24);
//     return Math.max(Math.floor(days), 0);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!selectedCar || !startDate || !endDate) {
//       setError('Please fill all fields');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify({
//           carID: selectedCar,
//           rentalStartDate: startDate,
//           rentalEndDate: endDate,
//           totalAmount: calculateTotal(),
//         }),
//       });

//       if (!res.ok) throw new Error('Booking failed');
//       setSuccess('Booking successful!');
//       onBookingSuccess();
//     } catch {
//       setError('Could not complete booking');
//     }
//   };

//   return (
//     <div className="container booking-form">
//       <h3>Book a Car</h3>
//       <form onSubmit={handleSubmit} className="booking-form">
//         <select
//           value={selectedCar || ''}
//           onChange={(e) => setSelectedCar(Number(e.target.value))}
//         >
//           <option value="">-- Select Car --</option>
//           {cars.map((car) => (
//             <option key={car.carID} value={car.carID}>
//               {car.carModel} - ${car.rentalRate}/day
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           required
//         />

//         {startDate && endDate && (
//           <p>
//             <strong>Total:</strong> ${calculateTotal()} ({calculateDays()} days)
//           </p>
//         )}

//         <button type="submit">Confirm Booking</button>
//         {error && <p className="error">{error}</p>}
//         {success && <p style={{ color: 'green', marginTop: '1rem' }}>{success}</p>}
//       </form>
//     </div>
//   );
// };

// export default BookingForm;



// import React, { useState } from 'react';

// interface BookingFormProps {
//   onBookingSuccess: () => void;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ onBookingSuccess }) => {
//   const [carId, setCarId] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch('http://localhost:3001/bookings', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify({ carId, rentalStartDate: startDate, rentalEndDate: endDate }),
//     });
//     if (res.ok) onBookingSuccess();
//   };

//   return (
//     <div>
//       <h3>Book a Car</h3>
//       <form onSubmit={handleSubmit}>
//         <select value={carId} onChange={(e) => setCarId(e.target.value)} required>
//           <option value="">Select a car</option>
//           {/* Populate with cars from UserDashboard state or a separate fetch */}
//         </select>
//         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
//         <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
//         <button type="submit">Book Now</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;


//GROK
// import React, { useState } from 'react';

// interface Car {
//   carID: number;
//   carModel: string;
//   year: number;
//   color: string;
//   rentalRate: number;
//   availability: boolean;
// }

// interface BookingFormProps {
//   cars: Car[];
//   onBookingSuccess: () => void;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ cars, onBookingSuccess }) => {
//   const [carId, setCarId] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch('http://localhost:3001/bookings', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify({ carId, rentalStartDate: startDate, rentalEndDate: endDate }),
//     });
//     if (res.ok) onBookingSuccess();
//   };

//   return (
//     <div>
//       <h3>Book a Car</h3>
//       <form onSubmit={handleSubmit}>
//         <select value={carId} onChange={(e) => setCarId(e.target.value)} required>
//           <option value="">Select a car</option>
//           {cars.map((car) => (
//             <option key={car.carID} value={car.carID}>
//               {car.carModel} ({car.year}, {car.color}) - ${car.rentalRate}/day
//             </option>
//           ))}
//         </select>
//         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
//         <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
//         <button type="submit">Book Now</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;





// import React, { useState, useEffect } from 'react';

// interface Car {
//   carID: number;
//   carModel: string;
//   year: number;
//   color: string;
//   rentalRate: number;
//   availability: boolean;
// }

// interface BookingFormProps {
//   cars: Car[];
//   preselectedCarID?: number;
//   onBookingSuccess?: () => void;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ cars, preselectedCarID, onBookingSuccess }) => {
//   const [form, setForm] = useState({
//     carID: preselectedCarID || '',
//     rentalStartDate: '',
//     rentalEndDate: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (preselectedCarID) {
//       setForm((prev) => ({ ...prev, carID: preselectedCarID }));
//     }
//   }, [preselectedCarID]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.carID || !form.rentalStartDate || !form.rentalEndDate) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await fetch('http://localhost:3001/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error('Booking failed');

//       setForm({
//         carID: preselectedCarID || '',
//         rentalStartDate: '',
//         rentalEndDate: '',
//       });

//       setError('');
//       alert('Booking successful!');
//       onBookingSuccess?.(); // Optional callback

//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An unexpected error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginTop: '1rem', marginBottom: '2rem' }}>
//       <h3>Book a Car</h3>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {!preselectedCarID && (
//         <select name="carID" value={form.carID} onChange={handleChange} required>
//           <option value="">-- Select a Car --</option>
//           {cars.map((car) => (
//             <option key={car.carID} value={car.carID}>
//               {car.carModel} ({car.year})
//             </option>
//           ))}
//         </select>
//       )}

//       <div>
//         <label>
//           Start Date:
//           <input type="date" name="rentalStartDate" value={form.rentalStartDate} onChange={handleChange} required />
//         </label>
//       </div>

//       <div>
//         <label>
//           End Date:
//           <input type="date" name="rentalEndDate" value={form.rentalEndDate} onChange={handleChange} required />
//         </label>
//       </div>

//       <button type="submit" disabled={loading}>
//         {loading ? 'Booking...' : 'Confirm Booking'}
//       </button>
//     </form>
//   );
// };

// export default BookingForm;


// import React, { useState } from 'react';
// import { Car } from '../../types/Car';

// interface BookingFormProps {
//   cars?: Car[]; // ✅ Made optional
//   preselectedCarID?: number;
//   onBookingSuccess?: () => void;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ cars, preselectedCarID, onBookingSuccess }) => {
//   const [form, setForm] = useState({
//     carID: preselectedCarID || '',
//     rentalStartDate: '',
//     rentalEndDate: '',
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.carID || !form.rentalStartDate || !form.rentalEndDate) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setSubmitting(true);
//     setError('');

//     try {
//       const res = await fetch('http://localhost:3001/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error('Failed to create booking');

//       setForm({ carID: preselectedCarID || '', rentalStartDate: '', rentalEndDate: '' });
//       onBookingSuccess?.();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Something went wrong');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Book a Car</h3>

//       {!preselectedCarID && cars && (
//         <div>
//           <label>Select Car:</label>
//           <select name="carID" value={form.carID} onChange={handleChange} required>
//             <option value="">-- Choose a Car --</option>
//             {cars.map((car) => (
//               <option key={car.carID} value={car.carID}>
//                 {car.carModel} ({car.year})
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       <div>
//         <label>Start Date:</label>
//         <input type="date" name="rentalStartDate" value={form.rentalStartDate} onChange={handleChange} required />
//       </div>

//       <div>
//         <label>End Date:</label>
//         <input type="date" name="rentalEndDate" value={form.rentalEndDate} onChange={handleChange} required />
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <button type="submit" disabled={submitting}>
//         {submitting ? 'Booking...' : 'Book Now'}
//       </button>
//     </form>
//   );
// };

// export default BookingForm;



// import React, { useEffect, useState } from 'react';
// import { Car } from '../../types/Car';

// interface BookingFormProps {
//   cars?: Car[];
//   preselectedCarID?: number;
//   onBookingSuccess?: () => void;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ cars, preselectedCarID, onBookingSuccess }) => {
//   const [form, setForm] = useState({
//     carID: '',
//     rentalStartDate: '',
//     rentalEndDate: '',
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   // ✅ Set preselected carID if provided
//   useEffect(() => {
//     if (preselectedCarID) {
//       setForm((prev) => ({
//         ...prev,
//         carID: preselectedCarID.toString(), // force string to match <select> behavior
//       }));
//     }
//   }, [preselectedCarID]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!form.carID || form.rentalStartDate.trim() === '' || form.rentalEndDate.trim() === '') {
//     setError('Please fill in all fields.');
//     return;
//   }

//   setSubmitting(true);
//   setError('');

//   try {
//     const payload = {
//       ...form,
//       carID: Number(form.carID), // ✅ Convert string to number here
//     };

//     const res = await fetch('http://localhost:3001/bookings', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) throw new Error('Failed to create booking');

//     setForm({ carID: preselectedCarID?.toString() || '', rentalStartDate: '', rentalEndDate: '' });
//     onBookingSuccess?.();
//   } catch (err) {
//     setError(err instanceof Error ? err.message : 'Something went wrong');
//   } finally {
//     setSubmitting(false);
//   }
// };


//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Book a Car</h3>

//       {!preselectedCarID && cars && (
//         <div>
//           <label>Select Car:</label>
//           <select name="carID" value={form.carID} onChange={handleChange} required>
//             <option value="">-- Choose a Car --</option>
//             {cars.map((car) => (
//               <option key={car.carID} value={car.carID}>
//                 {car.carModel} ({car.year})
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       <div>
//         <label>Start Date:</label>
//         <input
//           type="date"
//           name="rentalStartDate"
//           value={form.rentalStartDate}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div>
//         <label>End Date:</label>
//         <input
//           type="date"
//           name="rentalEndDate"
//           value={form.rentalEndDate}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <button type="submit" disabled={submitting}>
//         {submitting ? 'Booking...' : 'Book Now'}
//       </button>
//     </form>
//   );
// };

// export default BookingForm;



import React, { useState } from 'react';
import { Car } from '../../types/Car';

interface BookingFormProps {
  cars?: Car[];
  preselectedCarID?: number;
  onBookingSuccess?: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ cars, preselectedCarID, onBookingSuccess }) => {
  const [form, setForm] = useState({
    carID: preselectedCarID?.toString() || '',
    rentalStartDate: '',
    rentalEndDate: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const carIDNumber = Number(form.carID);
    if (!carIDNumber || !form.rentalStartDate.trim() || !form.rentalEndDate.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          carID: carIDNumber,
          rentalStartDate: form.rentalStartDate,
          rentalEndDate: form.rentalEndDate,
        }),
      });

      if (!res.ok) throw new Error('Failed to create booking');

      setForm({
        carID: preselectedCarID?.toString() || '',
        rentalStartDate: '',
        rentalEndDate: '',
      });

      onBookingSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book a Car</h3>

      {!preselectedCarID && cars && (
        <div>
          <label>Select Car:</label>
          <select name="carID" value={form.carID} onChange={handleChange} required>
            <option value="">-- Choose a Car --</option>
            {cars.map((car) => (
              <option key={car.carID} value={car.carID?.toString()}>
                {car.carModel} ({car.year})
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="rentalStartDate"
          value={form.rentalStartDate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>End Date:</label>
        <input
          type="date"
          name="rentalEndDate"
          value={form.rentalEndDate}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={submitting}>
        {submitting ? 'Booking...' : 'Book Now'}
      </button>
    </form>
  );
};

export default BookingForm;
