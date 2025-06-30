// import React from 'react';

// const AdminDashboard = () => {
//   return (
//     <div className="container">
//       <h2>Admin Dashboard</h2>
//       <p>Manage cars, users, bookings, etc.</p>
//       {/* Link to ManageCars, Customers, Maintenance, etc. */}
//     </div>
//   );
// };





// // export default AdminDashboard;
// import React, { useEffect, useState, useCallback } from 'react';

// interface Car {
//   id: number;
//   model: string;
//   plateNumber: string;
//   color: string;
// }

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [newCar, setNewCar] = useState({ model: '', plateNumber: '', color: '' });
//   const [editingCarId, setEditingCarId] = useState<number | null>(null);
//   const [editCar, setEditCar] = useState({ model: '', plateNumber: '', color: '' });
//   const token = localStorage.getItem('token');

//   // const fetchCars = async () => {
//   //   const res = await fetch('http://localhost:3001/cars', {
//   //     headers: { Authorization: `Bearer ${token}` },
//   //   });
//   //   const data = await res.json();
//   //   setCars(data);
//   // };

//   // useEffect(() => {
//   //   fetchCars();
//   // }, []);


  

// // Inside component
// const fetchCars = useCallback(async () => {
//   const res = await fetch('http://localhost:3001/cars', {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   const data = await res.json();
//   setCars(data);
// }, [token]); // ✅ token is the dependency

// useEffect(() => {
//   fetchCars();
// }, [fetchCars]); // ✅ Now it's safe


//   const handleAddCar = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await fetch('http://localhost:3001/cars', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(newCar),
//     });
//     setNewCar({ model: '', plateNumber: '', color: '' });
//     fetchCars();
//   };

//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:3001/cars/${id}`, {
//       method: 'DELETE',
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     fetchCars();
//   };

//   const handleEdit = (car: Car) => {
//     setEditingCarId(car.id);
//     setEditCar({ model: car.model, plateNumber: car.plateNumber, color: car.color });
//   };

//   const handleUpdateCar = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (editingCarId === null) return;

//     await fetch(`http://localhost:3001/cars/${editingCarId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(editCar),
//     });

//     setEditingCarId(null);
//     setEditCar({ model: '', plateNumber: '', color: '' });
//     fetchCars();
//   };

//   return (
//     <div className="container">
//       <h2>Admin Dashboard: Manage Cars</h2>

//       {/* Add Car */}
//       <form onSubmit={handleAddCar}>
//         <h3>Add New Car</h3>
//         <input
//           type="text"
//           placeholder="Model"
//           value={newCar.model}
//           required
//           onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Plate Number"
//           value={newCar.plateNumber}
//           required
//           onChange={(e) => setNewCar({ ...newCar, plateNumber: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Color"
//           value={newCar.color}
//           required
//           onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
//         />
//         <button type="submit">Add Car</button>
//       </form>

//       {/* Car List */}
//       <h3>Existing Cars</h3>
//       <ul>
//         {cars.map((car) => (
//           <li key={car.id}>
//             <strong>{car.model}</strong> - {car.plateNumber} ({car.color})
//             <button onClick={() => handleEdit(car)}>Edit</button>
//             <button onClick={() => handleDelete(car.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       {/* Edit Car */}
//       {editingCarId !== null && (
//         <form onSubmit={handleUpdateCar}>
//           <h3>Edit Car</h3>
//           <input
//             type="text"
//             placeholder="Model"
//             value={editCar.model}
//             required
//             onChange={(e) => setEditCar({ ...editCar, model: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Plate Number"
//             value={editCar.plateNumber}
//             required
//             onChange={(e) => setEditCar({ ...editCar, plateNumber: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Color"
//             value={editCar.color}
//             required
//             onChange={(e) => setEditCar({ ...editCar, color: e.target.value })}
//           />
//           <button type="submit">Update</button>
//           <button type="button" onClick={() => setEditingCarId(null)}>Cancel</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;




// // src/pages/AdminDashboard.tsx
// import React, { useEffect, useState, useCallback } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';

// interface Car {
//   id: number;
//   model: string;
//   make: string;
//   year: number;
// }

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   const fetchCars = useCallback(async () => {
//     const res = await fetch('http://localhost:3001/cars', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     const data = await res.json();
//     setCars(data);
//   }, []);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

//   const handleSave = async (car: Car) => {
//     const method = car.id ? 'PUT' : 'POST';
//     const url = car.id ? `http://localhost:3001/cars/${car.id}` : `http://localhost:3001/cars`;

//     await fetch(url, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify(car),
//     });

//     setEditingCar(null);
//     fetchCars();
//   };

//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:3001/cars/${id}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     fetchCars();
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard — Manage Cars</h2>
//       <CarForm onSave={handleSave} initialData={editingCar || undefined} onCancel={() => setEditingCar(null)} />
//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default AdminDashboard;





// // src/pages/AdminDashboard.tsx
// import React, { useEffect, useState, useCallback } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';

// interface Car {
//   id: number;
//   model: string;
//   make: string;
//   year: number;
// }

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   const fetchCars = useCallback(async () => {
//     const res = await fetch('http://localhost:3001/cars', {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     const data = await res.json();
//     setCars(data);
//   }, []);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

//   const handleSave = async (car: Car) => {
//     const method = car.id ? 'PUT' : 'POST';
//     const url = car.id
//       ? `http://localhost:3001/cars/${car.id}`
//       : `http://localhost:3001/cars`;

//     await fetch(url, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify(car),
//     });

//     setEditingCar(null);
//     fetchCars();
//   };

//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:3001/cars/${id}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     fetchCars();
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard — Manage Cars</h2>
//       <CarForm
//         onSave={handleSave}
//         initialData={editingCar || undefined}
//         onCancel={() => setEditingCar(null)}
//       />
//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default AdminDashboard;






// import React, { useEffect, useState, useCallback } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';

// export interface Car {
//   id?: number;
//   model: string;
//   make: string;
//   year: number;
// }

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   const fetchCars = useCallback(async () => {
//     try {
//       const res = await fetch('http://localhost:3001/cars', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       if (!res.ok) throw new Error('Failed to fetch cars');
//       const data = await res.json();
//       setCars(data);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

//   const handleSave = async (car: Car): Promise<void> => {
//     try {
//       const method = car.id ? 'PUT' : 'POST';
//       const url = car.id
//         ? `http://localhost:3001/cars/${car.id}`
//         : `http://localhost:3001/cars`;

//       const res = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(car),
//       });

//       if (!res.ok) throw new Error('Failed to save car');

//       setEditingCar(null);
//       fetchCars();
//     } catch (error) {
//       console.error('Error saving car:', error);
//     }
//   };

//   const handleDelete = async (id: number): Promise<void> => {
//     try {
//       const res = await fetch(`http://localhost:3001/cars/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (!res.ok) throw new Error('Failed to delete car');

//       fetchCars();
//     } catch (error) {
//       console.error('Error deleting car:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard — Manage Cars</h2>
//       <CarForm
//         onSave={handleSave}
//         initialData={editingCar || undefined}
//         onCancel={() => setEditingCar(null)}
//       />
//       <CarList
//         cars={cars}
//         onEdit={setEditingCar}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// };

// export default AdminDashboard;




// import React, { useCallback, useEffect, useState } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';
// import { Car } from '../types/Car'; // adjust path if needed

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   const fetchCars = useCallback(async () => {
//     const res = await fetch('http://localhost:3001/cars', {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     const data = await res.json();
//     setCars(data);
//   }, []);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

//   // const handleSave = async (car: Car) => {
//   //   const method = car.carID ? 'PUT' : 'POST';
//   //   const url = car.carID ? `http://localhost:3001/cars/${car.carID}` : 'http://localhost:3001/cars';

//   //   await fetch(url, {
//   //     method,
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       Authorization: `Bearer ${localStorage.getItem('token')}`,
//   //     },
//   //     body: JSON.stringify(car),
//   //   });

//   //   setEditingCar(null);
//   //   fetchCars();
//   // };


//   const handleSave = async (car: Car) => {
//   const isEdit = car.carID !== undefined;

//   // Exclude carID when creating a new car
//   const payload = isEdit
//     ? car
//     : {
//         carModel: car.carModel,
//         year: car.year,
//         color: car.color,
//         rentalRate: car.rentalRate,
//         availability: car.availability,
//         locationID: car.locationID,
//       };

//   const method = isEdit ? 'PUT' : 'POST';
//   const url = isEdit
//     ? `http://localhost:3001/cars/${car.carID}`
//     : 'http://localhost:3001/cars';

//   await fetch(url, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//     body: JSON.stringify(payload),
//   });

//   setEditingCar(null);
//   fetchCars();
// };


//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:3001/cars/${id}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     fetchCars();
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard — Manage Cars</h2>
//       <CarForm
//         onSave={handleSave}
//         initialData={editingCar || undefined}
//         onCancel={() => setEditingCar(null)}
//       />
//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useCallback, useEffect, useState } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';
// import { Car } from '../types/Car';
// import { Link } from 'react-router-dom';

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   const fetchCars = useCallback(async () => {
//     const res = await fetch('http://localhost:3001/cars', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     const data = await res.json();
//     setCars(data);
//   }, []);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

//   const handleSave = async (car: Car) => {
//     const isEdit = car.carID !== undefined;
//     const payload = isEdit
//       ? car
//       : { carModel: car.carModel, year: car.year, color: car.color, rentalRate: car.rentalRate, availability: car.availability, locationID: car.locationID };
//     const method = isEdit ? 'PUT' : 'POST';
//     const url = isEdit ? `http://localhost:3001/cars/${car.carID}` : 'http://localhost:3001/cars';

//     await fetch(url, {
//       method,
//       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
//       body: JSON.stringify(payload),
//     });
//     setEditingCar(null);
//     fetchCars();
//   };

//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:3001/cars/${id}`, {
//       method: 'DELETE',
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     fetchCars();
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
      
//       {/* Quick Stats */}
//       <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//         <div style={{ background: '#f0f0f0', padding: '1rem' }}>
//           <h3>Cars</h3>
//           <p>{cars.length} Total</p>
//         </div>
//         <div style={{ background: '#f0f0f0', padding: '1rem' }}>
//           <h3>Users</h3>
//           <p>0 (TBD)</p> {/* Fetch users later */}
//         </div>
//         <Link to="/tables/bookings" style={{ textDecoration: 'none', color: 'blue' }}>View All Bookings</Link>
//       </div>

//       {/* Car Management */}
//       <h3>Manage Cars</h3>
//       <CarForm onSave={handleSave} initialData={editingCar || undefined} onCancel={() => setEditingCar(null)} />
//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />

//       {/* Navigation to Other Sections */}
//       <div style={{ marginTop: '2rem' }}>
//         <h3>Other Actions</h3>
//         <ul>
//           <li><Link to="/tables/customers">Manage Customers</Link></li>
//           <li><Link to="/tables/locations">Manage Locations</Link></li>
//           <li><Link to="/tables/payments">Manage Payments</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useCallback, useEffect, useState } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';
// import { Car } from '../types/Car';
// import { Link } from 'react-router-dom';

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   const fetchCars = useCallback(async () => {
//     console.log('Fetching cars...');
//     const res = await fetch('http://localhost:3001/cars', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     const data = await res.json();
//     console.log('Fetched cars:', data);
//     setCars(data);
//   }, []);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

// const handleSave = async (car: Car) => {
//   console.log('handleSave called with:', car); // Add this first
//   console.log('Raw car data from form:', car);
//   const isEdit = car.carID !== undefined;
//   const payload: Car = {
//     carID: car.carID,
//     carModel: car.carModel,
//     year: car.year,
//     color: car.color || '',
//     rentalRate: car.rentalRate,
//     availability: car.availability,
//     locationID: car.locationID || 0,
//   };
//   console.log('Payload being sent:', JSON.stringify(payload, null, 2));
//   const method = isEdit ? 'PUT' : 'POST';
//   const url = isEdit ? `http://localhost:3001/cars/${car.carID}` : 'http://localhost:3001/cars';

//   try {
//     const res = await fetch(url, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token') || 'no-token'}`,
//       },
//       body: JSON.stringify(payload),
//     });
//     if (!res.ok) {
//       const errorText = await res.text();
//       throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
//     }
//     const responseData = await res.json();
//     console.log('Server response:', responseData);
//     setEditingCar(null);
//     await fetchCars();
//   } catch (error) {
//     console.error('Error saving car:', error);
//     alert(`Failed to save car. Check console for details. Status: ${error instanceof Error ? error.message : 'Unknown'}`);
//   }
// };

//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:3001/cars/${id}`, {
//       method: 'DELETE',
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     fetchCars();
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
      
//       <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//         <div style={{ background: '#f0f0f0', padding: '1rem' }}>
//           <h3>Cars</h3>
//           <p>{cars.length} Total</p>
//         </div>
//         <div style={{ background: '#f0f0f0', padding: '1rem' }}>
//           <h3>Users</h3>
//           <p>0 (TBD)</p>
//         </div>
//         <Link to="/tables/bookings" style={{ textDecoration: 'none', color: 'blue' }}>View All Bookings</Link>
//       </div>

//       <h3>Manage Cars</h3>
//       <CarForm onSave={handleSave} initialData={editingCar || undefined} onCancel={() => setEditingCar(null)} />
//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />

//       <div style={{ marginTop: '2rem' }}>
//         <h3>Other Actions</h3>
//         <ul>
//           <li><Link to="/tables/customers">Manage Customers</Link></li>
//           <li><Link to="/tables/locations">Manage Locations</Link></li>
//           <li><Link to="/tables/payments">Manage Payments</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useCallback, useEffect, useState } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';
// import { Car } from '../types/Car';
// import { Link } from 'react-router-dom';

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   const fetchCars = useCallback(async () => {
//     console.log('Fetching cars...');
//     const res = await fetch('http://localhost:3001/cars', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token') || 'no-token'}` },
//     });
//     const data = await res.json();
//     console.log('Fetched cars:', data);
//     setCars(data);
//   }, []);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

// const handleSave = async (car: Car) => {
//   console.log('handleSave called with:', car);
//   console.log('Raw car data from form:', car);

//   const isEdit = car.carID !== undefined && car.carID > 0;

//   const payload: Partial<Car> = {
//     carModel: car.carModel,
//     year: car.year,
//     color: car.color || '',
//     rentalRate: car.rentalRate,
//     availability: car.availability,
//     locationID: car.locationID ? Number(car.locationID) : 0,
//     ...(isEdit && { carID: car.carID }),
//   };

//   console.log('Payload being sent:', JSON.stringify(payload, null, 2));

//   const method = isEdit ? 'PUT' : 'POST';
//   const url = isEdit ? `http://localhost:3001/cars/${car.carID}` : 'http://localhost:3001/cars';

//   try {
//     const res = await fetch(url, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token') || 'no-token'}`,
//       },
//       body: JSON.stringify(payload),
//     });

//     console.log('Response status:', res.status);
//     console.log('Response headers:', Object.fromEntries(res.headers.entries()));

//     if (!res.ok) {
//       const errorText = await res.text();
//       throw new Error(`HTTP error! status: ${res.status}, message: ${errorText || 'No response body'}`);
//     }

//     const contentType = res.headers.get('content-type');
//     let responseData = null;

//     if (contentType && contentType.includes('application/json')) {
//       responseData = await res.json();
//     } else {
//       responseData = await res.text();
//       console.log('Non-JSON response:', responseData);
//     }

//     console.log('Server response:', responseData);
//     setEditingCar(null);
//     await fetchCars();
//   } catch (error) {
//     console.error('Error saving car:', error);
//     alert(`Failed to save car. Check console for details. Status: ${error instanceof Error ? error.message : 'Unknown'}`);
//   }
// };


//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:3001/cars/${id}`, {
//       method: 'DELETE',
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     fetchCars();
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
      
//       <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//         <div style={{ background: '#f0f0f0', padding: '1rem' }}>
//           <h3>Cars</h3>
//           <p>{cars.length} Total</p>
//         </div>
//         <div style={{ background: '#f0f0f0', padding: '1rem' }}>
//           <h3>Users</h3>
//           <p>0 (TBD)</p>
//         </div>
        
//       </div>

//       <h3>Manage Cars</h3>
//       <CarForm onSave={handleSave} initialData={editingCar || undefined} onCancel={() => setEditingCar(null)} />
//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />

//       <div style={{ marginTop: '2rem' }}>
//         <h3>Other Actions</h3>
//         <ul>
//           <li><Link to="/tables/customers">Manage Customers</Link></li>
//           <li><Link to="/tables/locations">Manage Locations</Link></li>
//           <li><Link to="/tables/payments">Manage Payments</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useCallback, useEffect, useState } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';
// import { Car } from '../types/Car';
// import { Link } from 'react-router-dom';

// const AdminDashboard: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   const fetchCars = useCallback(async () => {
//     try {
//       const res = await fetch('http://localhost:3001/cars', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token') || 'no-token'}` },
//       });
//       const data = await res.json();
//       setCars(data);
//     } catch (err) {
//       console.error('Failed to fetch cars:', err);
//     }
//   }, []);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

//   const handleSave = async (car: Car) => {
//     const isEdit = car.carID !== undefined && car.carID > 0;

//     const payload: Partial<Car> = {
//       carModel: car.carModel,
//       year: car.year,
//       color: car.color || '',
//       rentalRate: car.rentalRate,
//       availability: car.availability,
//       locationID: car.locationID ? Number(car.locationID) : 0,
//       ...(isEdit && { carID: car.carID }),
//     };

//     const method = isEdit ? 'PUT' : 'POST';
//     const url = isEdit 
//   ? `http://localhost:3001/cars/${car.carID}` 
//   : `http://localhost:3001/cars`;


//     try {
//       const res = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token') || 'no-token'}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(`HTTP ${res.status}: ${errorText}`);
//       }

//       setEditingCar(null);
//       await fetchCars();
//     } catch (error) {
//       console.error('Error saving car:', error);
//       alert(`Failed to save car. ${error instanceof Error ? error.message : 'Unknown error'}`);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:3001/cars/${id}`, {
//       method: 'DELETE',
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     fetchCars();
//   };

//   return (
//     <div className="container">
//       <h2>Admin Dashboard</h2>

//       {/* Stats Cards */}
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '1rem',
//         justifyContent: 'space-between',
//         marginBottom: '2rem'
//       }}>
//         <div className="hover-card" style={cardStyle}>
//           <h3>Total Cars</h3>
//           <p style={statStyle}>{cars.length}</p>
//         </div>
//         <div className="hover-card" style={cardStyle}>
//           <h3>Available</h3>
//           <p style={statStyle}>{cars.filter(c => c.availability).length}</p>
//         </div>
//         <div className="hover-card" style={cardStyle}>
//           <h3>Unavailable</h3>
//           <p style={statStyle}>{cars.filter(c => !c.availability).length}</p>
//         </div>
//       </div>

//       {/* Car Form */}
//       <h3>Manage Cars</h3>
//       <CarForm
//         onSave={handleSave}
//         initialData={editingCar || undefined}
//         onCancel={() => setEditingCar(null)}
//       />

//       {/* Car List */}
//       <div style={{ marginTop: '2rem' }}>
//         <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
//       </div>

//       {/* Other Management Links */}
//       <div style={{ marginTop: '3rem' }}>
//         <h3>Other Management</h3>
//         <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
//           <li><Link to="/tables/customers">👥 Manage Customers</Link></li>
//           <li><Link to="/tables/locations">📍 Manage Locations</Link></li>
//           <li><Link to="/tables/payments">💳 Manage Payments</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const cardStyle: React.CSSProperties = {
//   backgroundColor: '#fff',
//   padding: '1.25rem',
//   borderRadius: '8px',
//   boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//   width: '200px',
//   textAlign: 'center',
//   flex: '1 1 200px'
// };

// const statStyle: React.CSSProperties = {
//   fontSize: '2rem',
//   fontWeight: 'bold',
//   marginTop: '0.5rem',
//   color: '#007bff',
// };

// export default AdminDashboard;












// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminDashboard: React.FC = () => {
//   return (
//     <div className="container">
//       <h2>Welcome, Admin</h2>
//       <p>Use the sidebar to manage cars, customers, and bookings.</p>

//       <div style={{ marginTop: '2rem' }}>
//         <h3>Quick Links</h3>
//         <ul>
//           <li><Link to="/tables/cars">Manage Cars</Link></li>
//           <li><Link to="/tables/customers">Manage Customers</Link></li>
//           <li><Link to="/tables/bookings">View Bookings</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




import React from 'react';

const AdminDashboard: React.FC = () => (
  <div className="container">
    <h2>Welcome, Admin</h2>
    <p>Use the sidebar menu to manage your resources.</p>
  </div>
);

export default AdminDashboard;
