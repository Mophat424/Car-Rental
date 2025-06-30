import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/User/BookingForm';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BookingFormWrapper: React.FC = () => {
  const query = useQuery();
  const carID = query.get('carID');

  if (!carID) {
    return <p>Error: No car selected.</p>;
  }

  return (
    <div>
      <h2>Book Car #{carID}</h2>
      <BookingForm preselectedCarID={Number(carID)} onBookingSuccess={() => window.location.href = '/bookings'} />
    </div>
  );
};

export default BookingFormWrapper;
