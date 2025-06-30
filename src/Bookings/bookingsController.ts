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


// 




// import { Request, Response } from 'express';
// import {
//   getBookings,
//   getBookingsByCustomerId,
//   createBooking,
//   updateBooking,
//   deleteBooking,
// } from './bookingsService';

// // Get bookings (admin or by user)
// export const getBookingsHandler = async (req: Request, res: Response): Promise<void> => {
//   const user = (req as any).user;

//   try {
//     const bookings = user.role === 'admin'
//       ? await getBookings()
//       : await getBookingsByCustomerId(user.id);

//     res.status(200).json(bookings);
//   } catch (err) {
//     console.error('Failed to get bookings:', err);
//     res.status(500).json({ message: 'Failed to fetch bookings.' });
//   }
// };

// // Create booking
// export const createBookingHandler = async (req: Request, res: Response): Promise<void> => {
//   const user = (req as any).user;
//   const { carID, rentalStartDate, rentalEndDate, totalAmount } = req.body;

//   if (!carID || typeof carID !== 'number' || !rentalStartDate || !rentalEndDate) {
//     res.status(400).json({ message: 'Missing or invalid fields.' });
//     return;
//   }

//   try {
//     const booking = await createBooking({
//       carID,
//       customerID: user.id,
//       rentalStartDate,
//       rentalEndDate,
//       totalAmount,
//     });

//     res.status(201).json(booking);
//   } catch (err) {
//     console.error('Booking creation failed:', err);
//     res.status(500).json({ message: 'Failed to create booking.' });
//   }
// };

// // Update booking
// export const updateBookingHandler = async (req: Request, res: Response): Promise<void> => {
//   const { id } = req.params;

//   try {
//     const updated = await updateBooking(Number(id), req.body);
//     res.status(200).json(updated);
//   } catch (err) {
//     console.error('Failed to update booking:', err);
//     res.status(500).json({ message: 'Update failed.' });
//   }
// };

// // Delete booking
// export const deleteBookingHandler = async (req: Request, res: Response): Promise<void> => {
//   const { id } = req.params;

//   try {
//     await deleteBooking(Number(id));
//     res.status(200).json({ message: 'Booking deleted' });
//   } catch (err) {
//     console.error('Failed to delete booking:', err);
//     res.status(500).json({ message: 'Delete failed.' });
//   }
// };



// import { Request, Response } from 'express';
// import {
//   getBookings,
//   getBookingsByCustomerId,
//   createBooking,
//   updateBooking,
//   deleteBooking,
// } from './bookingsService';
// import db from '../Drizzle/db';
// import { CarTable } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';
// import { differenceInDays } from 'date-fns';

// // GET /bookings - For admin: all, for user: own
// export const getBookingsHandler = async (req: Request, res: Response): Promise<void> => {
//   const user = (req as any).user;

//   try {
//     const bookings = user.role === 'admin'
//       ? await getBookings()
//       : await getBookingsByCustomerId(user.id);

//     res.status(200).json(bookings);
//   } catch (err) {
//     console.error('Failed to get bookings:', err);
//     res.status(500).json({ message: 'Failed to fetch bookings.' });
//   }
// };

// // POST /bookings - Create new booking with totalAmount calculation
// export const createBookingHandler = async (req: Request, res: Response): Promise<void> => {
//   const user = (req as any).user;
//   const { carID, rentalStartDate, rentalEndDate } = req.body;

//   if (!carID || typeof carID !== 'number' || !rentalStartDate || !rentalEndDate) {
//     res.status(400).json({ message: 'Missing or invalid fields.' });
//     return;
//   }

//   try {
//     // Fetch the car to get rentalRate
//     const car = await db.query.CarTable.findFirst({
//       where: eq(CarTable.carID, carID),
//     });

//     if (!car) {
//       res.status(404).json({ message: 'Car not found.' });
//       return;
//     }

//     // Calculate number of days
//     const days = differenceInDays(new Date(rentalEndDate), new Date(rentalStartDate));
//     if (days <= 0) {
//       res.status(400).json({ message: 'End date must be after start date.' });
//       return;
//     }

//     const rate = parseFloat(car.rentalRate);
//     const totalAmount = days * rate;

//     // Create the booking
//     const booking = await createBooking({
//       carID,
//       customerID: user.id,
//       rentalStartDate,
//       rentalEndDate,
//       totalAmount,
//     });

//     res.status(201).json(booking);
//   } catch (err) {
//     console.error('Booking creation failed:', err);
//     res.status(500).json({ message: 'Failed to create booking.' });
//   }
// };

// // PUT /bookings/:id - Update a booking
// export const updateBookingHandler = async (req: Request, res: Response): Promise<void> => {
//   const { id } = req.params;

//   try {
//     const updated = await updateBooking(Number(id), req.body);
//     res.status(200).json(updated);
//   } catch (err) {
//     console.error('Failed to update booking:', err);
//     res.status(500).json({ message: 'Update failed.' });
//   }
// };

// // DELETE /bookings/:id - Delete a booking
// export const deleteBookingHandler = async (req: Request, res: Response): Promise<void> => {
//   const { id } = req.params;

//   try {
//     await deleteBooking(Number(id));
//     res.status(200).json({ message: 'Booking deleted' });
//   } catch (err) {
//     console.error('Failed to delete booking:', err);
//     res.status(500).json({ message: 'Delete failed.' });
//   }
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
import db from '../Drizzle/db';
import { CarTable } from '../Drizzle/schema';
import { eq } from 'drizzle-orm';

function getDaysBetween(start: string, end: string): number {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const msInDay = 1000 * 60 * 60 * 24;
  return Math.ceil((endDate.getTime() - startDate.getTime()) / msInDay);
}

// ✅ Exported properly
export const getBookingsHandler = async (req: Request, res: Response): Promise<void> => {
  const user = (req as any).user;

  try {
    const bookings = user.role === 'admin'
      ? await getBookings()
      : await getBookingsByCustomerId(user.id);

    res.status(200).json(bookings);
  } catch (err) {
    console.error('Failed to get bookings:', err);
    res.status(500).json({ message: 'Failed to fetch bookings.' });
  }
};

// ✅ Exported properly
export const createBookingHandler = async (req: Request, res: Response): Promise<void> => {
  const user = (req as any).user;
  const { carID, rentalStartDate, rentalEndDate } = req.body;

  if (!carID || !rentalStartDate || !rentalEndDate) {
    res.status(400).json({ message: 'Missing required fields.' });
    return;
  }

  try {
    const [car] = await db.select().from(CarTable).where(eq(CarTable.carID, carID));
    if (!car) {
      res.status(404).json({ message: 'Car not found.' });
      return;
    }

    const days = getDaysBetween(rentalStartDate, rentalEndDate);
    const totalAmount = (days * parseFloat(car.rentalRate)).toFixed(2);

    const booking = await createBooking({
      carID,
      customerID: user.id,
      rentalStartDate,
      rentalEndDate,
      totalAmount,
    });

    res.status(201).json(booking);
  } catch (err) {
    console.error('Booking creation failed:', err);
    res.status(500).json({ message: 'Failed to create booking.' });
  }
};

// ✅ Exported properly
export const updateBookingHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const updated = await updateBooking(Number(id), req.body);
    res.status(200).json(updated);
  } catch (err) {
    console.error('Failed to update booking:', err);
    res.status(500).json({ message: 'Update failed.' });
  }
};

// ✅ Exported properly
export const deleteBookingHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await deleteBooking(Number(id));
    res.status(200).json({ message: 'Booking deleted' });
  } catch (err) {
    console.error('Failed to delete booking:', err);
    res.status(500).json({ message: 'Delete failed.' });
  }
};
