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




import React, { useEffect, useState } from 'react';

interface Car {
  carID: number;
  carModel: string;
  rentalRate: string;
  availability: boolean;
}

interface BookingFormProps {
  onBookingSuccess: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onBookingSuccess }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchAvailableCars = async () => {
      try {
        const res = await fetch('http://localhost:3001/cars', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await res.json();
        setCars(data.filter((car: Car) => car.availability));
      } catch {
        setError('Failed to load available cars.');
      }
    };
    fetchAvailableCars();
  }, []);

  const calculateTotal = (): string => {
    if (!selectedCar || !startDate || !endDate) return '0';
    const car = cars.find((c) => c.carID === selectedCar);
    const days =
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 60 * 60 * 24);
    return (days * parseFloat(car?.rentalRate || '0')).toFixed(2);
  };

  const calculateDays = (): number => {
    if (!startDate || !endDate) return 0;
    const days =
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 60 * 60 * 24);
    return Math.max(Math.floor(days), 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!selectedCar || !startDate || !endDate) {
      setError('Please fill all fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          carID: selectedCar,
          rentalStartDate: startDate,
          rentalEndDate: endDate,
          totalAmount: calculateTotal(),
        }),
      });

      if (!res.ok) throw new Error('Booking failed');
      setSuccess('Booking successful!');
      onBookingSuccess();
    } catch {
      setError('Could not complete booking');
    }
  };

  return (
    <div className="container booking-form">
      <h3>Book a Car</h3>
      <form onSubmit={handleSubmit} className="booking-form">
        <select
          value={selectedCar || ''}
          onChange={(e) => setSelectedCar(Number(e.target.value))}
        >
          <option value="">-- Select Car --</option>
          {cars.map((car) => (
            <option key={car.carID} value={car.carID}>
              {car.carModel} - ${car.rentalRate}/day
            </option>
          ))}
        </select>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        {startDate && endDate && (
          <p>
            <strong>Total:</strong> ${calculateTotal()} ({calculateDays()} days)
          </p>
        )}

        <button type="submit">Confirm Booking</button>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: 'green', marginTop: '1rem' }}>{success}</p>}
      </form>
    </div>
  );
};

export default BookingForm;
