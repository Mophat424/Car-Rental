// import express from 'express';
// import dotenv from 'dotenv';
// import db from './Drizzle/db';
// import { UsersTable } from './Drizzle/schema';
// import carRouter from './Car/carRouter';
// import customerRouter from './Customer/customerRouter'; // 
// import userRouter from './User/userRouter';
// import paymentsRouter from './Payments/paymentsRouter';
// import maintenanceRouter from './Maintenance/maintenanceRouter';
// import bookingsRouter from './Bookings/bookingsRouter';
// import cors from "cors";

// dotenv.config();

// const app = express();
// app.use(express.json());



// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true
// }));

// // ROUTES
// app.use('/cars', carRouter);
// app.use('/customers', customerRouter); // 
// app.use('/users', userRouter);
// app.use('/bookings', bookingsRouter);
// app.use('/payments', paymentsRouter);
// app.use('/maintenance', maintenanceRouter);



// // DB Connection check
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





// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';

// import db from './Drizzle/db';
// import { UsersTable } from './Drizzle/schema';

// import carRouter from './Car/carRouter';
// import customerRouter from './Customer/customerRouter';
// import userRouter from './User/userRouter';
// import paymentsRouter from './Payments/paymentsRouter';
// import maintenanceRouter from './Maintenance/maintenanceRouter';
// import bookingsRouter from './Bookings/bookingsRouter';

// dotenv.config();

// const app = express();
// app.use(express.json());


// const allowedOrigins = [
//   'http://localhost:5173',
//   process.env.CLIENT_URL,
// ];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
// }));

// // ROUTES
// app.use('/cars', carRouter);
// app.use('/customers', customerRouter);
// app.use('/users', userRouter);
// app.use('/bookings', bookingsRouter);
// app.use('/payments', paymentsRouter);
// app.use('/maintenance', maintenanceRouter);

// // Optional root route for health check
// app.get('/', (req, res) => {
//   res.send('Car Rental API is running!');
// });

// // DB Connection check + start server
// db.select()
//   .from(UsersTable)
//   .limit(1)
//   .then(() => {
//     console.log('Connected to the database');

//     const PORT = process.env.PORT || 3001;
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Database connection failed:', err);
//     process.exit(1);
//   });

// export default app;





import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import db from './Drizzle/db';
import { UsersTable } from './Drizzle/schema';

import carRouter from './Car/carRouter';
import customerRouter from './Customer/customerRouter';
import userRouter from './User/userRouter';
import paymentsRouter from './Payments/paymentsRouter';
import maintenanceRouter from './Maintenance/maintenanceRouter';
import bookingsRouter from './Bookings/bookingsRouter';

dotenv.config();

const app = express();
app.use(express.json());

// ✅ CORS Setup
const allowedOrigins = [
  'http://localhost:5173',
  process.env.CLIENT_URL?.trim(), // Clean any accidental spaces
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
    credentials: true,
  })
);

// ✅ Routes
app.use('/cars', carRouter);
app.use('/customers', customerRouter);
app.use('/users', userRouter);
app.use('/bookings', bookingsRouter);
app.use('/payments', paymentsRouter);
app.use('/maintenance', maintenanceRouter);

// ✅ Health check route
app.get('/', (_req, res) => {
  res.send('Car Rental API is running!');
});

// ✅ Connect to DB and start server
db.select()
  .from(UsersTable)
  .limit(1)
  .then(() => {
    console.log('✅ Connected to the database');

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`🚗 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  });

export default app;
