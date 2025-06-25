CREATE TABLE "bookings" (
	"bookingID" serial PRIMARY KEY NOT NULL,
	"carID" integer NOT NULL,
	"customerID" integer NOT NULL,
	"rentalStartDate" date NOT NULL,
	"rentalEndDate" date NOT NULL,
	"totalAmount" numeric(10, 2)
);
--> statement-breakpoint
CREATE TABLE "car" (
	"carID" serial PRIMARY KEY NOT NULL,
	"carModel" varchar(100) NOT NULL,
	"year" varchar(10) NOT NULL,
	"color" varchar(100),
	"rentalRate" numeric(10, 2) NOT NULL,
	"availability" boolean DEFAULT true,
	"locationID" integer
);
--> statement-breakpoint
CREATE TABLE "customer" (
	"customerID" serial PRIMARY KEY NOT NULL,
	"userID" integer NOT NULL,
	"firstName" varchar(50) NOT NULL,
	"lastName" varchar(50) NOT NULL,
	"email" varchar(100) NOT NULL,
	"phoneNumber" text,
	"address" varchar(255),
	CONSTRAINT "customer_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "insurance" (
	"InsuranceID" serial PRIMARY KEY NOT NULL,
	"CarID" integer NOT NULL,
	"InsuranceProvider" varchar(100) NOT NULL,
	"PolicyNumber" varchar NOT NULL,
	"StartDate" date NOT NULL,
	"EndDate" date
);
--> statement-breakpoint
CREATE TABLE "locations" (
	"locationID" serial PRIMARY KEY NOT NULL,
	"locationName" varchar(100) NOT NULL,
	"address" varchar(255) NOT NULL,
	"contactNumber" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "maintenance" (
	"MaintenanceID" serial PRIMARY KEY NOT NULL,
	"CarID" integer NOT NULL,
	"MaintenanceDate" date NOT NULL,
	"Description" varchar(255),
	"Cost" numeric(10, 2),
	"Status" text
);
--> statement-breakpoint
CREATE TABLE "payment" (
	"PaymentID" serial PRIMARY KEY NOT NULL,
	"BookingID" integer NOT NULL,
	"PaymentDate" date NOT NULL,
	"Amount" numeric(10, 2) NOT NULL,
	"PaymentMethod" text
);
--> statement-breakpoint
CREATE TABLE "reservation" (
	"ReservationID" serial PRIMARY KEY NOT NULL,
	"CustomerID" integer NOT NULL,
	"CarID" integer NOT NULL,
	"ReservationDate" date NOT NULL,
	"PickupDate" date NOT NULL,
	"ReturnDate" date
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'customer' NOT NULL,
	"createdAt" date DEFAULT 'now()' NOT NULL,
	"verificationCode" varchar(6),
	"isVerified" boolean DEFAULT false NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_carID_car_carID_fk" FOREIGN KEY ("carID") REFERENCES "public"."car"("carID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_customerID_customer_customerID_fk" FOREIGN KEY ("customerID") REFERENCES "public"."customer"("customerID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "customer" ADD CONSTRAINT "customer_userID_users_id_fk" FOREIGN KEY ("userID") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "insurance" ADD CONSTRAINT "insurance_CarID_car_carID_fk" FOREIGN KEY ("CarID") REFERENCES "public"."car"("carID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "maintenance" ADD CONSTRAINT "maintenance_CarID_car_carID_fk" FOREIGN KEY ("CarID") REFERENCES "public"."car"("carID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment" ADD CONSTRAINT "payment_BookingID_bookings_bookingID_fk" FOREIGN KEY ("BookingID") REFERENCES "public"."bookings"("bookingID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_CustomerID_customer_customerID_fk" FOREIGN KEY ("CustomerID") REFERENCES "public"."customer"("customerID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_CarID_car_carID_fk" FOREIGN KEY ("CarID") REFERENCES "public"."car"("carID") ON DELETE cascade ON UPDATE no action;