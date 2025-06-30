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




// // src/components/Admin/CarForm.tsx
// import React, { useEffect, useState } from 'react';
// import { Car } from '../../types/Car'; 
 

// interface Props {
//   onSave: (car: Car) => void | Promise<void>;
//   initialData?: Car;
//   onCancel?: () => void;
// }

// const CarForm: React.FC<Props> = ({ onSave, initialData, onCancel }) => {
//   const [form, setForm] = useState<Car>(
//     initialData || {
//       carID: 0,
//       carModel: '',
//       year: '',
//       color: '',
//       rentalRate: '',
//       availability: true,
//       locationID: undefined,
//     }
//   );

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(form);
//     if (!initialData) {
//       setForm({
//         carID: 0,
//         carModel: '',
//         year: '',
//         color: '',
//         rentalRate: '',
//         availability: true,
//         locationID: undefined,
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="carModel" placeholder="Model" value={form.carModel} onChange={handleChange} required />
//       <input name="year" placeholder="Year" value={form.year} onChange={handleChange} required />
//       <input name="color" placeholder="Color" value={form.color || ''} onChange={handleChange} />
//       <input name="rentalRate" placeholder="Rate" value={form.rentalRate} onChange={handleChange} required />
//       <label>
//         Available:
//         <input type="checkbox" name="availability" checked={form.availability} onChange={handleChange} />
//       </label>
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




// import React, { useEffect, useState } from 'react';
// import { Car } from '../../types/Car';

// interface Props {
//   onSave: (car: Car) => void | Promise<void>;
//   initialData?: Car;
//   onCancel?: () => void;
// }

// const CarForm: React.FC<Props> = ({ onSave, initialData, onCancel }) => {
//   const [form, setForm] = useState<Car>(
//     initialData || {
//       carID: 0,
//       carModel: '',
//       year: '', // String as per interface
//       color: '',
//       rentalRate: '', // String as per interface
//       availability: true,
//       locationID: undefined,
//     }
//   );

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(form);
//     if (!initialData) {
//       setForm({
//         carID: 0,
//         carModel: '',
//         year: '',
//         color: '',
//         rentalRate: '',
//         availability: true,
//         locationID: undefined,
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//       <input name="carModel" placeholder="Model" value={form.carModel} onChange={handleChange} required />
//       <input name="year" placeholder="Year" value={form.year} onChange={handleChange} required />
//       <input name="color" placeholder="Color" value={form.color || ''} onChange={handleChange} />
//       <input name="rentalRate" placeholder="Rate" value={form.rentalRate} onChange={handleChange} required />
//       <label>
//         Available:
//         <input type="checkbox" name="availability" checked={form.availability} onChange={handleChange} />
//       </label>
//       <input name="locationID" placeholder="Location ID" value={form.locationID || ''} onChange={handleChange} />
//       <button type="submit">{initialData ? 'Update' : 'Add'} Car</button>
//       {initialData && onCancel && (
//         <button type="button" onClick={onCancel}>Cancel</button>
//       )}
//     </form>
//   );
// };

// export default CarForm;


// import React, { useEffect, useState } from 'react';
// import { Car } from '../../types/Car';

// interface Props {
//   onSave: (car: Car) => void | Promise<void>;
//   initialData?: Car;
//   onCancel?: () => void;
// }

// const CarForm: React.FC<Props> = ({ onSave, initialData, onCancel }) => {
//   const [form, setForm] = useState<Car>(
//     initialData || {
//       carID: 0,
//       carModel: '',
//       year: '', // Year as string (e.g., "2020")
//       color: '',
//       rentalRate: '',
//       availability: true,
//       locationID: undefined,
//     }
//   );

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form data being sent:', form);
//     onSave(form);
//     if (!initialData) {
//       setForm({
//         carID: 0,
//         carModel: '',
//         year: '',
//         color: '',
//         rentalRate: '',
//         availability: true,
//         locationID: undefined,
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//       <input name="carModel" placeholder="Model" value={form.carModel} onChange={handleChange} required />
//       <input name="year" placeholder="Year (e.g., 2020)" value={form.year} onChange={handleChange} required />
//       <input name="color" placeholder="Color" value={form.color || ''} onChange={handleChange} />
//       <input name="rentalRate" placeholder="Rate (e.g., 85.00)" value={form.rentalRate} onChange={handleChange} required />
//       <label>
//         Available:
//         <input type="checkbox" name="availability" checked={form.availability} onChange={handleChange} />
//       </label>
//       <input name="locationID" type="number" placeholder="Location ID" value={form.locationID || ''} onChange={handleChange} />
//       <button type="submit">{initialData ? 'Update' : 'Add'} Car</button>
//       {initialData && onCancel && (
//         <button type="button" onClick={onCancel}>Cancel</button>
//       )}
//     </form>
//   );
// };

// export default CarForm;


//working
// 





// import React, { useEffect, useState } from 'react';
// import { Car } from '../../types/Car';

// interface Props {
//   onSave: (car: Car) => void | Promise<void>;
//   initialData?: Car;
//   onCancel?: () => void;
// }

// const CarForm: React.FC<Props> = ({ onSave, initialData, onCancel }) => {
//   const [form, setForm] = useState<Car>(
//     initialData || {
//       carID: 0,
//       carModel: '',
//       year: '',
//       color: '',
//       rentalRate: '',
//       availability: true,
//       locationID: undefined,
//     }
//   );

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]:
//         type === 'checkbox'
//           ? checked
//           : name === 'locationID'
//           ? value === '' ? undefined : Number(value)
//           : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form data being sent:', form);
//     await onSave(form);
//     if (!initialData) {
//       setForm({
//         carID: 0,
//         carModel: '',
//         year: '',
//         color: '',
//         rentalRate: '',
//         availability: true,
//         locationID: undefined,
//       });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
//     >
//       <input name="carModel" placeholder="Model" value={form.carModel} onChange={handleChange} required />
//       <input
//         name="year"
//         type="number"
//         min="1990"
//         max="2050"
//         placeholder="Year (e.g., 2020)"
//         value={form.year}
//         onChange={handleChange}
//         required
//       />
//       <input name="color" placeholder="Color" value={form.color || ''} onChange={handleChange} />
//       <input
//         name="rentalRate"
//         type="number"
//         step="0.01"
//         min="1"
//         placeholder="Rate (e.g., 85.00)"
//         value={form.rentalRate}
//         onChange={handleChange}
//         required
//       />
//       <label>
//         Available:
//         <input type="checkbox" name="availability" checked={form.availability} onChange={handleChange} />
//       </label>
//       <input
//         name="locationID"
//         type="number"
//         min="1"
//         placeholder="Location ID"
//         value={form.locationID || ''}
//         onChange={handleChange}
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
      carModel: '',
      year: '',
      color: '',
      rentalRate: '',
      availability: true,
      locationID: undefined,
    }
  );

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : name === 'locationID'
          ? value === '' ? undefined : Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data being sent:', form);
    await onSave(form);

    // Reset form only if we're adding (not editing)
    if (!initialData) {
      setForm({
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
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <input
        name="carModel"
        placeholder="Model"
        value={form.carModel}
        onChange={handleChange}
        required
      />
      <input
        name="year"
        type="number"
        min="1990"
        max="2050"
        placeholder="Year (e.g., 2020)"
        value={form.year}
        onChange={handleChange}
        required
      />
      <input
        name="color"
        placeholder="Color"
        value={form.color || ''}
        onChange={handleChange}
      />
      <input
        name="rentalRate"
        type="number"
        step="0.01"
        min="1"
        placeholder="Rate (e.g., 85.00)"
        value={form.rentalRate}
        onChange={handleChange}
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          name="availability"
          checked={form.availability}
          onChange={handleChange}
        />
      </label>
      <input
        name="locationID"
        type="number"
        min="1"
        placeholder="Location ID"
        value={form.locationID || ''}
        onChange={handleChange}
      />
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
