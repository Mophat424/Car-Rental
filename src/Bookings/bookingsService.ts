// import db from '../Drizzle/db'; // Change to default import
// import { BookingsTable as bookings } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';

// export const getBookings = async () => {
//     return await db.select().from(bookings);
// };

// export const createBooking = async (data: { carID: number; customerID: number; rentalStartDate: string; rentalEndDate: string; totalAmount?: string }) => {
//     const [result] = await db
//         .insert(bookings)
//         .values(data)
//         .returning();
//     return result;
// };

// export const updateBooking = async (id: number, data: { rentalStartDate?: string; rentalEndDate?: string; totalAmount?: string }) => {
//     const [result] = await db
//         .update(bookings)
//         .set(data)
//         .where(eq(bookings.bookingID, id))
//         .returning();
//     return result;
// };

// export const deleteBooking = async (id: number) => {
//     const [result] = await db
//         .delete(bookings)
//         .where(eq(bookings.bookingID, id))
//         .returning();
//     return result;
// };


// src/Bookings/bookingsService.ts




// import db from '../Drizzle/db'; // Correct path
// import { BookingsTable as bookings } from '../Drizzle/schema'; // Correct path
// import { eq } from 'drizzle-orm';

// export const getBookings = async () => {
//   return await db.select().from(bookings);
// };

// export const createBooking = async (data: { carID: number; customerID: number; rentalStartDate: string; rentalEndDate: string; totalAmount?: string }) => {
//   const [result] = await db
//     .insert(bookings)
//     .values(data)
//     .returning();
//   return result;
// };

// export const updateBooking = async (id: number, data: { rentalStartDate?: string; rentalEndDate?: string; totalAmount?: string }) => {
//   const [result] = await db
//     .update(bookings)
//     .set(data)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   return result;
// };

// export const deleteBooking = async (id: number) => {
//   const [result] = await db
//     .delete(bookings)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   return result;
// };





// import db from '../Drizzle/db';
// import { BookingsTable as bookings } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';

// export const getBookings = async () => {
//   return await db.select().from(bookings);
// };

// export const createBooking = async (data: { carID: number; customerID: number; rentalStartDate: string; rentalEndDate: string; totalAmount?: string }) => {
//   const [result] = await db
//     .insert(bookings)
//     .values(data)
//     .returning();
//   return result;
// };

// export const updateBooking = async (id: number, data: { rentalStartDate?: string; rentalEndDate?: string; totalAmount?: string }) => {
//   const [result] = await db
//     .update(bookings)
//     .set(data)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   return result;
// };

// export const deleteBooking = async (id: number) => {
//   const [result] = await db
//     .delete(bookings)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   return result;
// };

// import db from '../Drizzle/db';
// import { BookingsTable as bookings } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';

// export const getBookings = async () => {
//   return await db.select().from(bookings);
// };

// export const createBooking = async (data: { carID: number; customerID: number; rentalStartDate: string; rentalEndDate: string; totalAmount?: string }) => {
//   const [result] = await db
//     .insert(bookings)
//     .values(data)
//     .returning();
//   return result;
// };

// export const updateBooking = async (id: number, data: { rentalStartDate?: string; rentalEndDate?: string; totalAmount?: string }) => {
//   const [result] = await db
//     .update(bookings)
//     .set(data)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   if (!result) {
//     throw new Error(`Booking with ID ${id} not found`);
//   }
//   return result;
// };

// export const deleteBooking = async (id: number) => {
//   const [result] = await db
//     .delete(bookings)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   if (!result) {
//     throw new Error(`Booking with ID ${id} not found`);
//   }
//   return result;
// };

// import db from '../Drizzle/db';
// import { BookingsTable as bookings } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';

// export const getBookings = async () => {
//   return await db.select().from(bookings);
// };

// export const createBooking = async (data: { carID: number; customerID: number; rentalStartDate: string; rentalEndDate: string; totalAmount?: string }) => {
//   const [result] = await db
//     .insert(bookings)
//     .values(data)
//     .returning();
//   return result;
// };

// export const updateBooking = async (id: number, data: { rentalStartDate?: string; rentalEndDate?: string; totalAmount?: string }) => {
//   const [result] = await db
//     .update(bookings)
//     .set(data)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   if (!result) {
//     throw new Error(`Booking with ID ${id} not found`);
//   }
//   return result;
// };

// export const deleteBooking = async (id: number) => {
//   const [result] = await db
//     .delete(bookings)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   if (!result) {
//     throw new Error(`Booking with ID ${id} not found`);
//   }
//   return result;
// };


// import db from '../Drizzle/db';
// import { BookingsTable as bookings } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';

// export const getBookings = async () => {
//   return await db.select().from(bookings);
// };

// export const createBooking = async (data: { carID: number; customerID: number; rentalStartDate: string; rentalEndDate: string; totalAmount?: string }) => {
//   const [result] = await db
//     .insert(bookings)
//     .values({
//       carID: data.carID,
//       customerID: data.customerID,
//       rentalStartDate: data.rentalStartDate,
//       rentalEndDate: data.rentalEndDate,
//       totalAmount: data.totalAmount,
//     })
//     .returning();
//   return result;
// };

// export const updateBooking = async (id: number, data: { rentalStartDate?: string; rentalEndDate?: string; totalAmount?: string }) => {
//   const [result] = await db
//     .update(bookings)
//     .set(data)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   if (!result) {
//     throw new Error(`Booking with ID ${id} not found`);
//   }
//   return result;
// };

// export const deleteBooking = async (id: number) => {
//   const [result] = await db
//     .delete(bookings)
//     .where(eq(bookings.bookingID, id))
//     .returning();
//   if (!result) {
//     throw new Error(`Booking with ID ${id} not found`);
//   }
//   return result;
// };


import db from '../Drizzle/db';
import { BookingsTable as bookings } from '../Drizzle/schema';
import { eq } from 'drizzle-orm';

export const getBookings = async () => {
  return await db.select().from(bookings);

};


export const getBookingsByCustomerId = async (customerId: number) => {
  return await db
    .select()
    .from(bookings)
    .where(eq(bookings.customerID, customerId));
};

export const createBooking = async (data: { carID: number; customerID: number; rentalStartDate: string; rentalEndDate: string; totalAmount?: string }) => {
  const [result] = await db
    .insert(bookings)
    .values({
      carID: data.carID,
      customerID: data.customerID,
      rentalStartDate: data.rentalStartDate,
      rentalEndDate: data.rentalEndDate,
      totalAmount: data.totalAmount,
    })
    .returning({
      bookingID: bookings.bookingID,
      carID: bookings.carID,
      customerID: bookings.customerID,
      rentalStartDate: bookings.rentalStartDate,
      rentalEndDate: bookings.rentalEndDate,
      totalAmount: bookings.totalAmount,
    });
  return result;
};

export const updateBooking = async (id: number, data: { rentalStartDate?: string; rentalEndDate?: string; totalAmount?: string }) => {
  const [result] = await db
    .update(bookings)
    .set({
      rentalStartDate: data.rentalStartDate,
      rentalEndDate: data.rentalEndDate,
      totalAmount: data.totalAmount,
    })
    .where(eq(bookings.bookingID, id))
    .returning({
      bookingID: bookings.bookingID,
      carID: bookings.carID,
      customerID: bookings.customerID,
      rentalStartDate: bookings.rentalStartDate,
      rentalEndDate: bookings.rentalEndDate,
      totalAmount: bookings.totalAmount,
    });
  if (!result) {
    throw new Error(`Booking with ID ${id} not found`);
  }
  return result;
};

export const deleteBooking = async (id: number) => {
  const [result] = await db
    .delete(bookings)
    .where(eq(bookings.bookingID, id))
    .returning({
      bookingID: bookings.bookingID,
      carID: bookings.carID,
      customerID: bookings.customerID,
      rentalStartDate: bookings.rentalStartDate,
      rentalEndDate: bookings.rentalEndDate,
      totalAmount: bookings.totalAmount,
    });
  if (!result) {
    throw new Error(`Booking with ID ${id} not found`);
  }
  return result;
};