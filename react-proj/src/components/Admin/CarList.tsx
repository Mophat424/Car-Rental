// // src/components/Admin/CarList.tsx
// import React from 'react';

// interface Car {
//   id: number;
//   model: string;
//   make: string;
//   year: number;
// }

// interface Props {
//   cars: Car[];
//   onEdit: (car: Car) => void;
//   onDelete: (id: number) => void;
// }

// const CarList: React.FC<Props> = ({ cars, onEdit, onDelete }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Model</th>
//           <th>Make</th>
//           <th>Year</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cars.map((car) => (
//           <tr key={car.id}>
//             <td>{car.model}</td>
//             <td>{car.make}</td>
//             <td>{car.year}</td>
//             <td>
//               <button onClick={() => onEdit(car)}>Edit</button>
//               <button onClick={() => onDelete(car.id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default CarList;



// src/components/Admin/CarList.tsx


// import React from 'react';
// import { Car } from '../../types/Car'; 


// interface Props {
//   cars: Car[];
//   onEdit: (car: Car) => void;
//   onDelete: (id: number) => void;
// }

// const CarList: React.FC<Props> = ({ cars, onEdit, onDelete }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Model</th>
//           <th>Year</th>
//           <th>Color</th>
//           <th>Rate</th>
//           <th>Available</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cars.map((car) => (
//           <tr key={car.carID}>
//             <td>{car.carModel}</td>
//             <td>{car.year}</td>
//             <td>{car.color || '—'}</td>
//             <td>{car.rentalRate}</td>
//             <td>{car.availability ? 'Yes' : 'No'}</td>
//             <td>
//               <button onClick={() => onEdit(car)}>Edit</button>
//               <button onClick={() => onDelete(car.carID)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default CarList;



import React from 'react';
import { Car } from '../../types/Car'; 

interface Props {
  cars: Car[];
  onEdit: (car: Car) => void;
  onDelete: (id: number) => void;
}

const CarList: React.FC<Props> = ({ cars, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Rate</th>
          <th>Available</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.carID}>
            <td>{car.carModel}</td>
            <td>{car.year}</td>
            <td>{car.color || '—'}</td>
            <td>{car.rentalRate}</td>
            <td>{car.availability ? 'Yes' : 'No'}</td>
            <td>
              <button onClick={() => onEdit(car)}>Edit</button>
              <button
                onClick={() => {
                  if (car.carID !== undefined) {
                    onDelete(car.carID);
                  } else {
                    console.warn('carID is undefined and cannot be deleted');
                  }
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarList;
