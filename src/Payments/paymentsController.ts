import { Request, Response } from 'express';
import { getPayments, createPayment, updatePayment, deletePayment } from './paymentsService';

export const getPaymentsHandler = async (req: Request, res: Response) => {
    const payments = await getPayments();
    res.status(200).json(payments);
};

export const createPaymentHandler = async (req: Request, res: Response) => {
    const { bookingID, amount, paymentDate, paymentMethod } = req.body;
    const payment = await createPayment({ bookingID, amount, paymentDate, paymentMethod });
    res.status(201).json([payment]);
};

export const updatePaymentHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const payment = await updatePayment(Number(id), req.body);
    res.status(200).json([payment]);
};

export const deletePaymentHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const payment = await deletePayment(Number(id));
    res.status(200).json({ message: 'Payment deleted', payment });
};