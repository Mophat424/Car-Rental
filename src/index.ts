// import express from 'express';
// import dotenv from 'dotenv';
// import db from './Drizzle/db';
// import { UsersTable } from './Drizzle/schema';
// import carRouter from './Car/carRouter';
// import maintenanceRouter from './Maintenance/maintenanceRouter';
// import paymentsRouter from './Payments/paymentsRouter';
// import bookingsRouter from './Bookings/bookingsRouter';
// import customerRouter from './Customer/customerRouter';
// import userRouter from './User/userRouter'; // Ensure this import is correct
// import { sendWelcomeEmail } from './services/emailService';

// dotenv.config();
// console.log('EMAIL_USER:', process.env.EMAIL_USER);
// console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

// const app = express();
// app.use(express.json());

// app.use('/cars', carRouter);
// app.use('/maintenance', maintenanceRouter);
// app.use('/payments', paymentsRouter);
// app.use('/bookings', bookingsRouter);
// app.use('/customers', customerRouter);
// app.use('/users', userRouter); // Mount userRouter, not a handler

// // Initialize email transporter
// sendWelcomeEmail('test@example.com').catch((error) => {
//   console.error('Email service initialization failed:', error);
// });

// // Test database connection
// db.select()
//   .from(UsersTable)
//   .limit(1)
//   .then(() => {
//     console.log('Connected to the database');
//     app.listen(3001, () => {
//       console.log(`Server running at http://localhost:3001`);
//     });
//   })
//   .catch((err) => {
//     console.error('Database connection failed:', err);
//     process.exit(1);
//   });

//   export default (app);











// import express from 'express';
// import dotenv from 'dotenv';
// import db from './Drizzle/db';
// import { UsersTable } from './Drizzle/schema';
// import carRouter from './Car/carRouter';
// import { sendWelcomeEmail } from './services/emailService';

// dotenv.config();

// const app = express();
// app.use(express.json());

// app.use('/cars', carRouter);

// sendWelcomeEmail('test@example.com').catch(console.error);

// db.select()
//   .from(UsersTable)
//   .limit(1)
//   .then(() => {
//     console.log('Connected to the database');
//     app.listen(3001, () => {
//       console.log('Server running at http://localhost:3001');
//     });
//   })
//   .catch((err) => {
//     console.error('Database connection failed:', err);
//     process.exit(1);
//   });

// export default app;



import express from 'express';
import dotenv from 'dotenv';
import db from './Drizzle/db';
import { UsersTable } from './Drizzle/schema';
import carRouter from './Car/carRouter';
import customerRouter from './Customer/customerRouter'; // 
import userRouter from './User/userRouter';
import paymentsRouter from './Payments/paymentsRouter';
import maintenanceRouter from './Maintenance/maintenanceRouter';
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());



app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// ROUTES
app.use('/cars', carRouter);
app.use('/customers', customerRouter); // 
app.use('/users', userRouter);

app.use('/payments', paymentsRouter);
app.use('/maintenance', maintenanceRouter);



// DB Connection check
db.select()
  .from(UsersTable)
  .limit(1)
  .then(() => {
    console.log('Connected to the database');
    app.listen(3001, () => {
      console.log('Server running at http://localhost:3001');
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });



  

export default app;

