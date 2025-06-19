// import db from '../Drizzle/db';
// import { CustomerTable as customer } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';




// export const getCustomers = async () => {
//     return await db.select().from(customer);
// };

// export const createCustomer = async (data: { firstName: string; lastName: string; email: string; phoneNumber?: string; address?: string }) => {
//     const [result] = await db
//         .insert(customer)
//         .values(data)
//         .returning();
//     return result;
// };

// export const updateCustomer = async (id: number, data: { firstName?: string; lastName?: string; email?: string; phoneNumber?: string; address?: string }) => {
//     const [result] = await db
//         .update(customer)
//         .set(data)
//         .where(eq(customer.customerID, id))
//         .returning();
//     return result;
// };

// export const deleteCustomer = async (id: number) => {
//     const [result] = await db
//         .delete(customer)
//         .where(eq(customer.customerID, id))
//         .returning();
//     return result;
// };













// import db from '../Drizzle/db';
// import { CustomerTable, BookingsTable, PaymentTable } from '../Drizzle/schema';
// import { eq, inArray } from 'drizzle-orm';

// // Define interfaces for type safety
// interface Customer {
//   customerID: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string | null;
//   address: string | null;
// }

// interface Payment {
//   paymentID: number;
//   bookingID: number;
//   paymentDate: string;
//   amount: string;
//   paymentMethod: string | null;
// }

// interface Booking {
//   bookingID: number;
//   carID: number;
//   customerID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string | null;
//   payments: Payment[];
// }

// interface CustomerWithBookings {
//   customer: Customer | null;
//   bookings: Booking[];
// }

// export const getCustomerWithBookingsAndPayments = async (customerId: number): Promise<CustomerWithBookings> => {
//   // Step 1: Fetch the customer
//   const customerData = await db
//     .select({
//       customerID: CustomerTable.customerID,
//       firstName: CustomerTable.firstName,
//       lastName: CustomerTable.lastName,
//       email: CustomerTable.email,
//       phoneNumber: CustomerTable.phoneNumber,
//       address: CustomerTable.address,
//     })
//     .from(CustomerTable)
//     .where(eq(CustomerTable.customerID, customerId));

//   const customer: Customer | null =
//     customerData.length > 0
//       ? {
//           customerID: customerData[0].customerID,
//           firstName: customerData[0].firstName,
//           lastName: customerData[0].lastName,
//           email: customerData[0].email,
//           phoneNumber: customerData[0].phoneNumber,
//           address: customerData[0].address,
//         }
//       : null;

//   // Step 2: Fetch bookings for the customer
//   const bookingsData = await db
//     .select({
//       bookingID: BookingsTable.bookingID,
//       carID: BookingsTable.carID,
//       customerID: BookingsTable.customerID,
//       rentalStartDate: BookingsTable.rentalStartDate,
//       rentalEndDate: BookingsTable.rentalEndDate,
//       totalAmount: BookingsTable.totalAmount,
//     })
//     .from(BookingsTable)
//     .where(eq(BookingsTable.customerID, customerId));

//   const bookings: Booking[] = bookingsData.map(booking => ({
//     bookingID: booking.bookingID,
//     carID: booking.carID,
//     customerID: booking.customerID,
//     rentalStartDate: booking.rentalStartDate,
//     rentalEndDate: booking.rentalEndDate,
//     totalAmount: booking.totalAmount,
//     payments: [], // Initialize payments array
//   }));

//   // Step 3: Fetch payments for the bookings
//   const bookingIds = bookings.map(booking => booking.bookingID);
//   let payments: Payment[] = [];
//   if (bookingIds.length > 0) {
//     payments = await db
//       .select({
//         paymentID: PaymentTable.paymentID,
//         bookingID: PaymentTable.bookingID,
//         paymentDate: PaymentTable.paymentDate,
//         amount: PaymentTable.amount,
//         paymentMethod: PaymentTable.paymentMethod,
//       })
//       .from(PaymentTable)
//       .where(inArray(PaymentTable.bookingID, bookingIds)); // Use inArray for multiple booking IDs
//   }

//   // Step 4: Attach payments to bookings
//   bookings.forEach(booking => {
//     booking.payments = payments.filter(payment => payment.bookingID === booking.bookingID);
//   });

//   return {
//     customer,
//     bookings,
//   };
// };

// // Keep existing functions
// export const getCustomers = async () => {
//   return await db.select().from(CustomerTable);
// };

// export const createCustomer = async (data: { firstName: string; lastName: string; email: string; phoneNumber?: string; address?: string }) => {
//   const [result] = await db
//     .insert(CustomerTable)
//     .values(data)
//     .returning();
//   return result;
// };

// export const updateCustomer = async (id: number, data: { firstName?: string; lastName?: string; email?: string; phoneNumber?: string; address?: string }) => {
//   const [result] = await db
//     .update(CustomerTable)
//     .set(data)
//     .where(eq(CustomerTable.customerID, id))
//     .returning();
//   return result;
// };

// export const deleteCustomer = async (id: number) => {
//   const [result] = await db
//     .delete(CustomerTable)
//     .where(eq(CustomerTable.customerID, id))
//     .returning();
//   return result;
// };


// src/Customer/customerService.ts


// import db from '../Drizzle/db'; // Corrected path
// import { CustomerTable, BookingsTable, PaymentTable } from '../Drizzle/schema';
// import { eq, inArray } from 'drizzle-orm';

// // Define interfaces for type safety
// interface Customer {
//   customerID: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string | null;
//   address: string | null;
// }

// interface Payment {
//   paymentID: number;
//   bookingID: number;
//   paymentDate: string;
//   amount: string;
//   paymentMethod: string | null;
// }

// interface Booking {
//   bookingID: number;
//   carID: number;
//   customerID: number;
//   rentalStartDate: string;
//   rentalEndDate: string;
//   totalAmount: string | null;
//   payments: Payment[];
// }

// interface CustomerWithBookings {
//   customer: Customer | null;
//   bookings: Booking[];
// }

// export const getCustomerWithBookingsAndPayments = async (customerId: number): Promise<CustomerWithBookings> => {
//   // Step 1: Fetch the customer
//   const customerData = await db
//     .select({
//       customerID: CustomerTable.customerID,
//       firstName: CustomerTable.firstName,
//       lastName: CustomerTable.lastName,
//       email: CustomerTable.email,
//       phoneNumber: CustomerTable.phoneNumber,
//       address: CustomerTable.address,
//     })
//     .from(CustomerTable)
//     .where(eq(CustomerTable.customerID, customerId));

//   const customer: Customer | null =
//     customerData.length > 0
//       ? {
//           customerID: customerData[0].customerID,
//           firstName: customerData[0].firstName,
//           lastName: customerData[0].lastName,
//           email: customerData[0].email,
//           phoneNumber: customerData[0].phoneNumber,
//           address: customerData[0].address,
//         }
//       : null;

//   // Step 2: Fetch bookings for the customer
//   const bookingsData = await db
//     .select({
//       bookingID: BookingsTable.bookingID,
//       carID: BookingsTable.carID,
//       customerID: BookingsTable.customerID,
//       rentalStartDate: BookingsTable.rentalStartDate,
//       rentalEndDate: BookingsTable.rentalEndDate,
//       totalAmount: BookingsTable.totalAmount,
//     })
//     .from(BookingsTable)
//     .where(eq(BookingsTable.customerID, customerId));

//   const bookings: Booking[] = bookingsData.map(booking => ({
//     bookingID: booking.bookingID,
//     carID: booking.carID,
//     customerID: booking.customerID,
//     rentalStartDate: booking.rentalStartDate,
//     rentalEndDate: booking.rentalEndDate,
//     totalAmount: booking.totalAmount,
//     payments: [], // Initialize payments array
//   }));

//   // Step 3: Fetch payments for the bookings
//   const bookingIds = bookings.map(booking => booking.bookingID);
//   let payments: Payment[] = [];
//   if (bookingIds.length > 0) {
//     payments = await db
//       .select({
//         paymentID: PaymentTable.paymentID,
//         bookingID: PaymentTable.bookingID,
//         paymentDate: PaymentTable.paymentDate,
//         amount: PaymentTable.amount,
//         paymentMethod: PaymentTable.paymentMethod,
//       })
//       .from(PaymentTable)
//       .where(inArray(PaymentTable.bookingID, bookingIds)); // Use inArray for multiple booking IDs
//   }

//   // Step 4: Attach payments to bookings
//   bookings.forEach(booking => {
//     booking.payments = payments.filter(payment => payment.bookingID === booking.bookingID);
//   });

//   return {
//     customer,
//     bookings,
//   };
// };

// // Keep existing functions
// export const getCustomers = async () => {
//   return await db.select().from(CustomerTable);
// };

// export const createCustomer = async (data: { firstName: string; lastName: string; email: string; phoneNumber?: string; address?: string }) => {
//   const [result] = await db
//     .insert(CustomerTable)
//     .values(data)
//     .returning();
//   return result;
// };

// export const updateCustomer = async (id: number, data: { firstName?: string; lastName?: string; email?: string; phoneNumber?: string; address?: string }) => {
//   const [result] = await db
//     .update(CustomerTable)
//     .set(data)
//     .where(eq(CustomerTable.customerID, id))
//     .returning();
//   return result;
// };

// export const deleteCustomer = async (id: number) => {
//   const [result] = await db
//     .delete(CustomerTable)
//     .where(eq(CustomerTable.customerID, id))
//     .returning();
//   return result;
// };


import db from '../Drizzle/db'; // Corrected path
import { CustomerTable, BookingsTable, PaymentTable } from '../Drizzle/schema';
import { eq, inArray } from 'drizzle-orm';

// Define interfaces for type safety
interface Customer {
  customerID: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  address: string | null;
}

interface Payment {
  paymentID: number;
  bookingID: number;
  paymentDate: string;
  amount: string;
  paymentMethod: string | null;
}

interface Booking {
  bookingID: number;
  carID: number;
  customerID: number;
  rentalStartDate: string;
  rentalEndDate: string;
  totalAmount: string | null;
  payments: Payment[];
}

interface CustomerWithBookings {
  customer: Customer | null;
  bookings: Booking[];
}

export const getCustomerWithBookingsAndPayments = async (customerId: number): Promise<CustomerWithBookings> => {
  // Step 1: Fetch the customer
  const customerData = await db
    .select({
      customerID: CustomerTable.customerID,
      firstName: CustomerTable.firstName,
      lastName: CustomerTable.lastName,
      email: CustomerTable.email,
      phoneNumber: CustomerTable.phoneNumber,
      address: CustomerTable.address,
    })
    .from(CustomerTable)
    .where(eq(CustomerTable.customerID, customerId));

  const customer: Customer | null =
    customerData.length > 0
      ? {
          customerID: customerData[0].customerID,
          firstName: customerData[0].firstName,
          lastName: customerData[0].lastName,
          email: customerData[0].email,
          phoneNumber: customerData[0].phoneNumber,
          address: customerData[0].address,
        }
      : null;

  // Step 2: Fetch bookings for the customer
  const bookingsData = await db
    .select({
      bookingID: BookingsTable.bookingID,
      carID: BookingsTable.carID,
      customerID: BookingsTable.customerID,
      rentalStartDate: BookingsTable.rentalStartDate,
      rentalEndDate: BookingsTable.rentalEndDate,
      totalAmount: BookingsTable.totalAmount,
    })
    .from(BookingsTable)
    .where(eq(BookingsTable.customerID, customerId));

  const bookings: Booking[] = bookingsData.map(booking => ({
    bookingID: booking.bookingID,
    carID: booking.carID,
    customerID: booking.customerID,
    rentalStartDate: booking.rentalStartDate,
    rentalEndDate: booking.rentalEndDate,
    totalAmount: booking.totalAmount,
    payments: [], // Initialize payments array
  }));

  // Step 3: Fetch payments for the bookings
  const bookingIds = bookings.map(booking => booking.bookingID);
  let payments: Payment[] = [];
  if (bookingIds.length > 0) {
    payments = await db
      .select({
        paymentID: PaymentTable.paymentID,
        bookingID: PaymentTable.bookingID,
        paymentDate: PaymentTable.paymentDate,
        amount: PaymentTable.amount,
        paymentMethod: PaymentTable.paymentMethod,
      })
      .from(PaymentTable)
      .where(inArray(PaymentTable.bookingID, bookingIds)); // Use inArray for multiple booking IDs
  }

  // Step 4: Attach payments to bookings
  bookings.forEach(booking => {
    booking.payments = payments.filter(payment => payment.bookingID === booking.bookingID);
  });

  return {
    customer,
    bookings,
  };
};

// Keep existing functions
export const getCustomers = async () => {
  return await db.select().from(CustomerTable);
};

export const createCustomer = async (data: { firstName: string; lastName: string; email: string; phoneNumber?: string; address?: string }) => {
  const [result] = await db
    .insert(CustomerTable)
    .values(data)
    .returning();
  return result;
};

export const updateCustomer = async (id: number, data: { firstName?: string; lastName?: string; email?: string; phoneNumber?: string; address?: string }) => {
  const [result] = await db
    .update(CustomerTable)
    .set(data)
    .where(eq(CustomerTable.customerID, id))
    .returning();
  if (!result) {
    throw new Error(`Customer with ID ${id} not found`);
  }
  return result;
};

export const deleteCustomer = async (id: number) => {
  const [result] = await db
    .delete(CustomerTable)
    .where(eq(CustomerTable.customerID, id))
    .returning();
  if (!result) {
    throw new Error(`Customer with ID ${id} not found`);
  }
  return result;
};