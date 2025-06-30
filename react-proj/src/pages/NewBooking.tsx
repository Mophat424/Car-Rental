// // src/pages/NewBooking.tsx
// import React from 'react';
// import { useSearchParams } from 'react-router-dom';
// import BookingForm from '../components/User/BookingForm';

// const NewBooking: React.FC = () => {
//   const [params] = useSearchParams();
//   const carIDParam = params.get('carID');
//   const carID = carIDParam ? parseInt(carIDParam, 10) : undefined;

//   if (!carID) return <p>Invalid or missing car ID.</p>;

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto' }}>
//       <h2>Book Selected Car</h2>
//       <BookingForm preselectedCarID={carID} onBookingSuccess={() => window.location.href = '/user-dashboard'} />
//     </div>
//   );
// };

// export default NewBooking;



// import React from 'react';
// import BookingForm from '../components/User/BookingForm';

// const NewBooking: React.FC = () => {
//   return (
//     <div className="container">
//       <h2>Book a Car</h2>
//       <BookingForm />
//     </div>
//   );
// };

// export default NewBooking;





// src/pages/NewBooking.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/User/BookingForm';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const NewBooking: React.FC = () => {
  const query = useQuery();
  const carID = query.get('carID');

  if (!carID) {
    return <p>Error: No car selected.</p>;
  }

  return (
    <div className="container">
      <h2>Book Car #{carID}</h2>
      <BookingForm
        preselectedCarID={Number(carID)}
        onBookingSuccess={() => window.location.href = '/bookings'}
      />
    </div>
  );
};

export default NewBooking;
