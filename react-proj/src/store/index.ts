// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';


// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },


//   });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;





import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import carReducer from './slices/carSlice';
import userCarsReducer from './slices/userCarsSlice';
import bookingReducer from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    userCars: userCarsReducer, 
    bookings: bookingReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
