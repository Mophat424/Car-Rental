import {relations,} from "drizzle-orm";
import {text, varchar, serial, pgTable, decimal, integer, boolean, date} from "drizzle-orm/pg-core";





// CUSTOMER TABLE
// export const CustomerTable = pgTable("customer", {
//     customerID: serial("customerID").primaryKey(),
//     firstName: varchar("firstName", { length: 50 }).notNull(), // Changed from "FirstName" to "firstName"
//     lastName: varchar("lastName", { length: 50 }).notNull(),  // Changed from "LastName" to "lastName"
//     email: varchar("email", { length: 100 }).notNull().unique(), // Changed from "Email" to "email"
//     phoneNumber: text("phoneNumber"),                        // Changed from "PhoneNumber" to "phoneNumber"
//     address: varchar("address", { length: 255 })             // Changed from "Address" to "address"
// });


export const CustomerTable = pgTable("customer", {
  customerID: serial("customerID").primaryKey(),
  userID: integer("userID").references(() => UsersTable.id, { onDelete: "cascade" }).notNull(),
  firstName: varchar("firstName", { length: 50 }).notNull(),
  lastName: varchar("lastName", { length: 50 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  phoneNumber: text("phoneNumber"),
  address: varchar("address", { length: 255 }),
});




//LOCATION TABLE
// export const LocationTable = pgTable("location", {
//     LocationID: serial("LocationID").primaryKey(),
//     LocationName:varchar("LocationName", {length:150}).notNull(),
//     address:text("Address").notNull(),
//     contactNumber:varchar("ContactNumber", {length:20})
// });

// export const LocationTable = pgTable("locations", {
//   locationID: serial("locationID").primaryKey(),
//   locationName: varchar("locationName", { length: 100 }).notNull(),
//   address: varchar("address", { length: 255 }).notNull(),
//   contactNumber: varchar("contactNumber", { length: 20 }).notNull(),
// });

// Location Table
export const LocationTable = pgTable("locations", {
  locationID: serial("locationID").primaryKey(),
  locationName: varchar("locationName", { length: 100 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  contactNumber: varchar("contactNumber", { length: 20 }).notNull(),
});

// [Rest of your schema definitions: CustomerTable, CarTable, etc. remain unchanged]


//CAR TABLE
// export const CarTable = pgTable("car", {
//     carID:serial("CarID").primaryKey(),
//     carModel:varchar("CarModel", {length:100}).notNull(),
//     year:varchar("Year", { length: 10 }).notNull(),
//     color:varchar("Color", {length:100}),
//     rentalRate:decimal("RentalRate", {precision: 10, scale:2}).notNull(),
//     availability:boolean("Availability").default(true),
//     locationID:integer("LocationID").references(() => LocationTable.LocationID, {onDelete:"set null"})
// });
export const CarTable = pgTable("car", {
    carID: serial("carID").primaryKey(),
    carModel: varchar("carModel", { length: 100 }).notNull(),
    year: varchar("year", { length: 10 }).notNull(),
    color: varchar("color", { length: 100 }),
    rentalRate: decimal("rentalRate", { precision: 10, scale: 2 }).notNull(),
    availability: boolean("availability").default(true),
    locationID: integer("locationID")
});


// RESERVATION TABLE
export const ReservationTable = pgTable("reservation", {
    reservationID:serial("ReservationID").primaryKey(),
    customerID:integer("CustomerID").notNull().references(() => CustomerTable.customerID, {onDelete:"cascade"}),
    carID: integer("CarID").notNull().references(() => CarTable.carID, { onDelete: "cascade" }),
    reservationDate: date("ReservationDate").notNull(),
    pickupDate: date("PickupDate").notNull(),
    returnDate: date("ReturnDate")
});




//BOOKING TABLE
// export const BookingsTable = pgTable("bookings", {
//     bookingID:serial("BookingID").primaryKey(),
//     carID: integer("CarID").notNull().references(()=> CarTable.carID, {onDelete:"cascade"}),
//     customerID: integer("CustomerID").notNull().references(() => CustomerTable.customerID, { onDelete: "cascade" }),
//     rentalStartDate: date("RentalStartDate").notNull(),
//     rentalEndDate: date("RentalEndDate").notNull(),
//     totalAmount: decimal("TotalAmount", { precision: 10, scale: 2 })
// });

export const BookingsTable = pgTable("bookings", {
  "bookingID": serial("bookingID").primaryKey(),
  "carID": integer("carID").notNull().references(() => CarTable.carID, { onDelete: "cascade" }),
  "customerID": integer("customerID").notNull().references(() => CustomerTable.customerID, { onDelete: "cascade" }),
  "rentalStartDate": date("rentalStartDate").notNull(),
  "rentalEndDate": date("rentalEndDate").notNull(),
  "totalAmount": decimal("totalAmount", { precision: 10, scale: 2 }),
});






// PAYMENT TABLE
export const PaymentTable = pgTable("payment", {
    paymentID: serial("PaymentID").primaryKey(),
    bookingID: integer("BookingID").notNull().references(() => BookingsTable.bookingID, { onDelete: "cascade" }),
    paymentDate: date("PaymentDate").notNull(),
    amount: decimal("Amount", { precision: 10, scale: 2 }).notNull(), // {precision: 10, scale: 2} means 10 digits total, 2 of which are after the decimal point. i.e // 12345678.90
    paymentMethod: text("PaymentMethod")
});


// MAINTENANCE TABLE

export const MaintenanceTable = pgTable("maintenance", {
    maintenanceID: serial("MaintenanceID").primaryKey(),
    carID: integer("CarID").notNull().references(() => CarTable.carID, { onDelete: "cascade" }),
    maintenanceDate: date("MaintenanceDate").notNull(),
    description: varchar("Description", { length: 255 }),
    cost: decimal("Cost", { precision: 10, scale: 2 }),
    status: text('Status'),
});


// INSURANCE TABLE

export const InsuranceTable = pgTable("insurance", {
    insuranceID: serial("InsuranceID").primaryKey(),
    carID: integer("CarID").notNull().references(() => CarTable.carID, { onDelete: "cascade" }),
    insuranceProvider: varchar("InsuranceProvider", { length: 100 }).notNull(),
    policyNumber: varchar("PolicyNumber").notNull(),
    startDate: date("StartDate").notNull(),
    endDate: date("EndDate")
});




// USERS TABLE (for Authentication) - Simplified without pgEnum and timestamp
// export const UsersTable = pgTable('users', {
//     id: serial('id').primaryKey(),
//     email: varchar('email', { length: 255 }).notNull().unique(),
//     password: varchar('password', { length: 255 }).notNull(),
//     role: varchar('role', { length: 50 }).notNull().default('customer'), // Using varchar with default instead of pgEnum
//     createdAt: date('createdAt').notNull().default('now()') // Using date with now() function instead of timestamp
// });


export const UsersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).notNull().default('customer'),
  createdAt: date('createdAt').notNull().default('now()'),
  verificationCode: varchar('verificationCode', { length: 6 }), // for 6-digit OTP
  isVerified: boolean('isVerified').notNull().default(false),   // track email verification
});



// RELATIONSHIPS


// CustomerTable Relationships - 1 customer can have many reservations and bookings
export const CustomerRelations = relations(CustomerTable, ({ many }) => ({
    reservations: many(ReservationTable),
    bookings: many(BookingsTable)
}))

// LocationTable Relationships -  1 location can have many cars
export const LocationRelationships = relations(LocationTable, ({ many }) => ({
    cars: many(CarTable)
}))

// CarTable Relationships - 1 car can have many reservations, bookings, maintenance, and insurance
export const CarRelations = relations(CarTable, ({ many, one }) => ({
    location: one(LocationTable, {
        fields: [CarTable.locationID],
        references: [LocationTable.locationID]
    }),
    reservations: many(ReservationTable),
    bookings: many(BookingsTable),
    maintenanceRecords: many(MaintenanceTable),
    insurancePolicies: many(InsuranceTable)
}));

// ReservationTable Relationships - 1 reservation belongs to 1 customer and 1 car
export const ReservationRelations = relations(ReservationTable, ({ one }) => ({
    customer: one(CustomerTable, {
        fields: [ReservationTable.customerID],
        references: [CustomerTable.customerID]
    }),
    car: one(CarTable, {
        fields: [ReservationTable.carID],
        references: [CarTable.carID]
    })
}))

// BookingsTable Relationships - 1 booking belongs to 1 customer and 1 car, and can have many payments
export const BookingsRelations = relations(BookingsTable, ({ one, many }) => ({
    customer: one(CustomerTable, {
        fields: [BookingsTable.customerID],
        references: [CustomerTable.customerID]
    }),
    car: one(CarTable, {
        fields: [BookingsTable.carID],
        references: [CarTable.carID]
    }),
    payments: many(PaymentTable)
}))

// PaymentTable Relationships - 1 payment belongs to 1 booking
export const PaymentRelations = relations(PaymentTable, ({ one }) => ({
    booking: one(BookingsTable, {
        fields: [PaymentTable.bookingID],
        references: [BookingsTable.bookingID]
    })
}))

// MaintenanceTable Relationships - 1 maintenance record belongs to 1 car
export const MaintenanceRelations = relations(MaintenanceTable, ({ one }) => ({
    car: one(CarTable, {
        fields: [MaintenanceTable.carID],
        references: [CarTable.carID]
    })
}));

// InsuranceTable Relationships - 1 insurance policy belongs to 1 car
export const InsuranceRelations = relations(InsuranceTable, ({ one }) => ({
    car: one(CarTable, {
        fields: [InsuranceTable.carID],
        references: [CarTable.carID]
    })
}));



