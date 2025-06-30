// import React, { useCallback, useEffect, useState } from 'react';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';
// import { Car } from '../types/Car';

// const AdminCarTable: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchCars = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await fetch('http://localhost:3001/cars', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//         },
//       });

//       if (!res.ok) throw new Error('Failed to fetch cars');
//       const data = await res.json();
//       setCars(data);
//     } catch (err) {
//       console.error('Error fetching cars:', err);
//       setError('Failed to load cars.');
//     } finally {
//       setLoading(false);
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
//       locationID: car.locationID ? Number(car.locationID) : undefined,
//       ...(isEdit && { carID: car.carID }),
//     };

//     const method = isEdit ? 'PUT' : 'POST';
//     const url = isEdit
//       ? `http://localhost:3001/cars/${car.carID}`
//       : 'http://localhost:3001/cars';

//     try {
//       const res = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(errorText || 'Failed to save car');
//       }

//       setEditingCar(null);
//       fetchCars();
//     } catch (error) {
//       console.error('Error saving car:', error);
//       alert(
//         `Failed to save car. ${
//           error instanceof Error ? error.message : 'Unknown error'
//         }`
//       );
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await fetch(`http://localhost:3001/cars/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//         },
//       });
//       fetchCars();
//     } catch (err) {
//       console.error('Error deleting car:', err);
//       alert('Failed to delete car.');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Manage Cars</h2>

//       {loading && <p>Loading cars...</p>}
//       {error && <p className="error">{error}</p>}

//       <CarForm
//         onSave={handleSave}
//         initialData={editingCar || undefined}
//         onCancel={() => setEditingCar(null)}
//       />

//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default AdminCarTable;








// import React, { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../store/hook';
// import { fetchCars, selectCars } from '../store/slices/carSlice';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';
// import { Car } from '../types/Car';

// const AdminCarTable: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { cars, loading, error } = useAppSelector(selectCars);
//   const [editingCar, setEditingCar] = React.useState<Car | null>(null);

//   useEffect(() => {
//     dispatch(fetchCars());
//   }, [dispatch]);

//   const handleSave = async (car: Car) => {
//     // This part can be converted to Redux later as well
//     // For now it directly uses fetch
//     const isEdit = car.carID !== undefined && car.carID > 0;

//     const method = isEdit ? 'PUT' : 'POST';
//     const url = isEdit
//       ? `http://localhost:3001/cars/${car.carID}`
//      : 'http://localhost:3001/cars';

//     try {
//       const res = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//         },
//         body: JSON.stringify(car),
//       });

//       if (!res.ok) throw new Error('Failed to save car');
//       dispatch(fetchCars());
//       setEditingCar(null);
//     } catch (err) {
//       console.error(err);
//       alert('Save failed');
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await fetch(`http://localhost:3001/cars/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//         },
//       });
//       dispatch(fetchCars());
//     } catch (err) {
//   console.error('Delete failed:', err);
//   alert('Delete failed');
// }

//   };

//   return (
//     <div className="container">
//       <h2>Manage Cars</h2>

//       {loading && <p>Loading cars...</p>}
//       {error && <p className="error">{error}</p>}

//       <CarForm
//         onSave={handleSave}
//         initialData={editingCar || undefined}
//         onCancel={() => setEditingCar(null)}
//       />

//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default AdminCarTable;



//working
// import React, { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../store/hook';
// import { fetchCars, saveCar, deleteCar, selectCars } from '../store/slices/carSlice';
// import CarForm from '../components/Admin/CarForm';
// import CarList from '../components/Admin/CarList';
// import { Car } from '../types/Car';

// const AdminCarTable: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { cars, loading, error } = useAppSelector(selectCars);
//   const [editingCar, setEditingCar] = useState<Car | null>(null);

//   useEffect(() => {
//     dispatch(fetchCars());
//   }, [dispatch]);

//   const handleSave = (car: Car) => {
//     dispatch(saveCar(car));
//     setEditingCar(null);
//   };

//   const handleDelete = (id: number) => {
//     dispatch(deleteCar(id));
//   };

//   return (
//     <div className="container">
//       <h2>Manage Cars</h2>
//       {loading && <p>Loading cars...</p>}
//       {error && <p className="error">{error}</p>}

//       <CarForm
//         onSave={handleSave}
//         initialData={editingCar || undefined}
//         onCancel={() => setEditingCar(null)}
//       />
//       <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default AdminCarTable;




import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { Car } from '../types/Car';
import { selectCars, fetchCars, saveCar, deleteCar } from '../store/slices/carSlice';
import CarForm from '../components/Admin/CarForm';
import CarList from '../components/Admin/CarList';

const AdminCarTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cars, loading, error } = useAppSelector(selectCars);
  const [editingCar, setEditingCar] = useState<Car | null>(null);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSave = async (car: Car) => {
    await dispatch(saveCar(car));
    setEditingCar(null);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      await dispatch(deleteCar(id));
    }
  };

  return (
    <div className="container">
      <h2>Manage Cars</h2>
      {loading && <p>Loading cars...</p>}
      {error && <p className="error">{error}</p>}

      <CarForm
        onSave={handleSave}
        initialData={editingCar || undefined}
        onCancel={() => setEditingCar(null)}
      />

      <CarList cars={cars} onEdit={setEditingCar} onDelete={handleDelete} />
    </div>
  );
};

export default AdminCarTable;
