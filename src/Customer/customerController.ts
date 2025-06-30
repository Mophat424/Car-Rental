// import { Request, Response } from 'express';
// import { eq } from 'drizzle-orm';
// import db from '../Drizzle/db';
// import { CustomerTable } from '../Drizzle/schema';

// export const getCustomersHandler = async (req: Request, res: Response) => {
//     try {
//         const customers = await db.select().from(CustomerTable);
//         res.status(200).json(customers);
//     } catch (error: any) {
//         res.status(500).json({ error: 'Failed to fetch customers' });
//     }
// };

// export const createCustomerHandler = async (req: Request, res: Response) => {
//     try {
//         const { firstName, lastName, email, phoneNumber, address } = req.body;
//         const [customer] = await db
//             .insert(CustomerTable)
//             .values({ firstName, lastName, email, phoneNumber, address })
//             .returning();
//         res.status(201).json(customer);
//     } catch (error: any) {
//         res.status(400).json({ error: 'Failed to create customer' });
//     }
// };

// export const updateCustomerHandler = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const { firstName, lastName, email, phoneNumber, address } = req.body;
//         const [customer] = await db
//             .update(CustomerTable)
//             .set({ firstName, lastName, email, phoneNumber, address })
//             .where(eq(CustomerTable.customerID, parseInt(id)))
//             .returning();
//         if (!customer) throw new Error('Customer not found');
//         res.status(200).json(customer);
//     } catch (error: any) {
//         res.status(400).json({ error: 'Failed to update customer' });
//     }
// };

// export const deleteCustomerHandler = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const [customer] = await db
//             .delete(CustomerTable)
//             .where(eq(CustomerTable.customerID, parseInt(id)))
//             .returning();
//         if (!customer) throw new Error('Customer not found');
//         res.status(200).json({ message: 'Customer deleted' });
//     } catch (error: any) {
//         res.status(400).json({ error: 'Failed to delete customer' });
//     }
// };




import { Request, Response } from 'express';
import { eq } from 'drizzle-orm';
import db from '../Drizzle/db';
import { CustomerTable } from '../Drizzle/schema';

// GET all customers
export const getCustomersHandler = async (req: Request, res: Response) => {
  try {
    const customers = await db.select().from(CustomerTable);
    res.status(200).json(customers);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};

// CREATE a customer
export const createCustomerHandler = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phoneNumber, address } = req.body;
    const userID = (req as any).user?.id;

    if (!userID) {
      return res.status(401).json({ error: 'Unauthorized: user ID missing' });
    }

    const [customer] = await db
      .insert(CustomerTable)
      .values({ userID, firstName, lastName, email, phoneNumber, address })
      .returning();

    res.status(201).json(customer);
  } catch (error: any) {
    res.status(400).json({ error: 'Failed to create customer' });
  }
};

// UPDATE a customer
export const updateCustomerHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, address } = req.body;

    const [customer] = await db
      .update(CustomerTable)
      .set({ firstName, lastName, email, phoneNumber, address })
      .where(eq(CustomerTable.customerID, parseInt(id)))
      .returning();

    if (!customer) throw new Error('Customer not found');
    res.status(200).json(customer);
  } catch (error: any) {
    res.status(400).json({ error: 'Failed to update customer' });
  }
};

// DELETE a customer
export const deleteCustomerHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [customer] = await db
      .delete(CustomerTable)
      .where(eq(CustomerTable.customerID, parseInt(id)))
      .returning();

    if (!customer) throw new Error('Customer not found');
    res.status(200).json({ message: 'Customer deleted' });
  } catch (error: any) {
    res.status(400).json({ error: 'Failed to delete customer' });
  }
};
