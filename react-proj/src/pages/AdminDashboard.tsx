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




import React, { useCallback, useEffect, useState } from 'react';
import CarForm from '../components/Admin/CarForm';
import CarList from '../components/Admin/CarList';
import { Car } from '../types/Car'; // adjust path if needed

const AdminDashboard: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [editingCar, setEditingCar] = useState<Car | null>(null);

  const fetchCars = useCallback(async () => {
    const res = await fetch('http://localhost:3001/cars', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await res.json();
    setCars(data);
  }, []);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  // const handleSave = async (car: Car) => {
  //   const method = car.carID ? 'PUT' : 'POST';
  //   const url = car.carID ? `http://localhost:3001/cars/${car.carID}` : 'http://localhost:3001/cars';

  //   await fetch(url, {
  //     method,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  //     },
  //     body: JSON.stringify(car),
  //   });

  //   setEditingCar(null);
  //   fetchCars();
  // };


  const handleSave = async (car: Car) => {
  const isEdit = car.carID !== undefined;

  // Exclude carID when creating a new car
  const payload = isEdit
    ? car
    : {
        carModel: car.carModel,
        year: car.year,
        color: car.color,
        rentalRate: car.rentalRate,
        availability: car.availability,
        locationID: car.locationID,
      };

  const method = isEdit ? 'PUT' : 'POST';
  const url = isEdit
    ? `http://localhost:3001/cars/${car.carID}`
    : 'http://localhost:3001/cars';

  await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(payload),
  });

  setEditingCar(null);
  fetchCars();
};


  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3001/cars/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    fetchCars();
  };

  return (
    <div>
      <h2>Admin Dashboard — Manage Cars</h2>
      <CarForm
        onSave={handleSave}
        initialData={editingCar || undefined}
        onCancel={() => setEditingCar(null)}
      />
      <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
    </div>
  );
};

export default AdminDashboard;
