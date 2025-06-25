// // src/components/Admin/CarForm.tsx
// import React, { useState, useEffect } from 'react';

// interface Car {
//   id?: number;
//   model: string;
//   make: string;
//   year: number;
// }

// interface Props {
//   onSave: (car: Car) => void;
//   initialData?: Car;
//   onCancel?: () => void;
// }

// const CarForm: React.FC<Props> = ({ onSave, initialData, onCancel }) => {
//   const [form, setForm] = useState<Car>(initialData || { model: '', make: '', year: new Date().getFullYear() });

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: name === 'year' ? +value : value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(form);
//     if (!initialData) setForm({ model: '', make: '', year: new Date().getFullYear() });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="model" placeholder="Model" value={form.model} onChange={handleChange} required />
//       <input name="make" placeholder="Make" value={form.make} onChange={handleChange} required />
//       <input name="year" type="number" placeholder="Year" value={form.year} onChange={handleChange} required />
//       <button type="submit">{initialData ? 'Update' : 'Add'} Car</button>
//       {initialData && onCancel && <button onClick={onCancel}>Cancel</button>}
//     </form>
//   );
// };

// export default CarForm;


// // src/components/Admin/CarForm.tsx
// import React, { useState, useEffect } from 'react';

// interface Car {
//   id?: number;
//   model: string;
//   make: string;
//   year: number;
// }

// interface Props {
//   onSave: (car: Car) => void | Promise<void>; // ✅ Fixed type to accept async
//   initialData?: Car;
//   onCancel?: () => void;
// }

// const CarForm: React.FC<Props> = ({ onSave, initialData, onCancel }) => {
//   const [form, setForm] = useState<Car>(initialData || {
//     model: '',
//     make: '',
//     year: new Date().getFullYear(),
//   });

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: name === 'year' ? +value : value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(form); // ✅ async supported now
//     if (!initialData)
//       setForm({ model: '', make: '', year: new Date().getFullYear() });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="model"
//         placeholder="Model"
//         value={form.model}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="make"
//         placeholder="Make"
//         value={form.make}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="year"
//         type="number"
//         placeholder="Year"
//         value={form.year}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">{initialData ? 'Update' : 'Add'} Car</button>
//       {initialData && onCancel && (
//         <button type="button" onClick={onCancel}>
//           Cancel
//         </button>
//       )}
//     </form>
//   );
// };

// export default CarForm;




// src/components/Admin/CarForm.tsx
import React, { useEffect, useState } from 'react';
import { Car } from '../../types/Car'; 
 

interface Props {
  onSave: (car: Car) => void | Promise<void>;
  initialData?: Car;
  onCancel?: () => void;
}

const CarForm: React.FC<Props> = ({ onSave, initialData, onCancel }) => {
  const [form, setForm] = useState<Car>(
    initialData || {
      carID: 0,
      carModel: '',
      year: '',
      color: '',
      rentalRate: '',
      availability: true,
      locationID: undefined,
    }
  );

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    if (!initialData) {
      setForm({
        carID: 0,
        carModel: '',
        year: '',
        color: '',
        rentalRate: '',
        availability: true,
        locationID: undefined,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="carModel" placeholder="Model" value={form.carModel} onChange={handleChange} required />
      <input name="year" placeholder="Year" value={form.year} onChange={handleChange} required />
      <input name="color" placeholder="Color" value={form.color || ''} onChange={handleChange} />
      <input name="rentalRate" placeholder="Rate" value={form.rentalRate} onChange={handleChange} required />
      <label>
        Available:
        <input type="checkbox" name="availability" checked={form.availability} onChange={handleChange} />
      </label>
      <button type="submit">{initialData ? 'Update' : 'Add'} Car</button>
      {initialData && onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default CarForm;
