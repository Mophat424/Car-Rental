// import { Request, Response } from 'express';
// import { getBookings, getBookingsByCustomerId, createBooking, updateBooking, deleteBooking } from './bookingsService';


// export const getBookingsHandler = async (req: Request, res: Response) => {
//   const user = (req as any).user;

//   let bookings;
//   if (user.role === 'admin') {
//     bookings = await getBookings();
//   } else {
//     bookings = await getBookingsByCustomerId(user.id); // user's own bookings
//   }

//   res.status(200).json(bookings);
// };

// export const createBookingHandler = async (req: Request, res: Response) => {
//     const { carID, customerID, rentalStartDate, rentalEndDate, totalAmount } = req.body;
//     const booking = await createBooking({ carID, customerID, rentalStartDate, rentalEndDate, totalAmount });
//     res.status(201).json([booking]);
// };

// export const updateBookingHandler = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const booking = await updateBooking(Number(id), req.body);
//     res.status(200).json([booking]);
// };

// export const deleteBookingHandler = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const booking = await deleteBooking(Number(id));
//     res.status(200).json({ message: 'Booking deleted', booking });
// };


// src/Bookings/bookingsController.ts
import { Request, Response } from 'express';
import {
  getBookings,
  getBookingsByCustomerId,
  createBooking,
  updateBooking,
  deleteBooking,
} from './bookingsService';

export const getBookingsHandler = async (req: Request, res: Response) => {
  const user = (req as any).user;
  const bookings = user.role === 'admin'
    ? await getBookings()
    : await getBookingsByCustomerId(user.id);
  res.status(200).json(bookings);
};

export const createBookingHandler = async (req: Request, res: Response) => {
  const user = (req as any).user;
  const { carID, rentalStartDate, rentalEndDate, totalAmount } = req.body;
  const booking = await createBooking({
    carID,
    customerID: user.id,
    rentalStartDate,
    rentalEndDate,
    totalAmount,
  });
  res.status(201).json(booking);
};

export const updateBookingHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await updateBooking(Number(id), req.body);
  res.status(200).json(updated);
};

export const deleteBookingHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteBooking(Number(id));
  res.status(200).json({ message: 'Booking deleted' });
};
