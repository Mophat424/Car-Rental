import { Request, Response } from 'express';
import { getBookings, createBooking, updateBooking, deleteBooking } from './bookingsService';

export const getBookingsHandler = async (req: Request, res: Response) => {
    const bookings = await getBookings();
    res.status(200).json(bookings);
};

export const createBookingHandler = async (req: Request, res: Response) => {
    const { carID, customerID, rentalStartDate, rentalEndDate, totalAmount } = req.body;
    const booking = await createBooking({ carID, customerID, rentalStartDate, rentalEndDate, totalAmount });
    res.status(201).json([booking]);
};

export const updateBookingHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const booking = await updateBooking(Number(id), req.body);
    res.status(200).json([booking]);
};

export const deleteBookingHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const booking = await deleteBooking(Number(id));
    res.status(200).json({ message: 'Booking deleted', booking });
};