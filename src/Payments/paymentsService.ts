import  db  from '../Drizzle/db';
import { PaymentTable as payments } from '../Drizzle/schema';
import { eq } from 'drizzle-orm';

export const getPayments = async () => {
    return await db.select().from(payments);
};

export const createPayment = async (data: { bookingID: number; amount: string; paymentDate: string; paymentMethod: string }) => {
    const [result] = await db
        .insert(payments)
        .values(data)
        .returning();
    return result;
};

export const updatePayment = async (id: number, data: { amount?: string; paymentDate?: string; paymentMethod?: string }) => {
    const [result] = await db
        .update(payments)
        .set(data)
        .where(eq(payments.paymentID, id))
        .returning();
    return result;
};

export const deletePayment = async (id: number) => {
    const [result] = await db
        .delete(payments)
        .where(eq(payments.paymentID, id))
        .returning();
    return result;
};