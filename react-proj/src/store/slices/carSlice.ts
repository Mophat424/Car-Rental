// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { Car } from '../../types/Car';

// const API_URL = 'http://localhost:3001/cars';

// export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
//   const res = await fetch(API_URL, {
//     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//   });
//   if (!res.ok) throw new Error('Failed to fetch cars');
//   return await res.json();
// });

// interface CarState {
//   cars: Car[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: CarState = {
//   cars: [],
//   loading: false,
//   error: null
// };

// const carSlice = createSlice({
//   name: 'cars',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCars.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCars.fulfilled, (state, action: PayloadAction<Car[]>) => {
//         state.loading = false;
//         state.cars = action.payload;
//       })
//       .addCase(fetchCars.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Error fetching cars';
//       });
//   }
// });

// export default carSlice.reducer;




import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface Car {
  carID: number;
  carModel: string;
  year: string;
  color?: string;
  rentalRate: string;
  availability: boolean;
  locationID?: number;
}

interface CarState {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  cars: [],
  loading: false,
  error: null,
};

// FETCH CARS
export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:3001/cars', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
      },
    });
    if (!res.ok) throw new Error('Failed to fetch cars');
    return await res.json();
  } catch (error) {
  if (error instanceof Error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  return thunkAPI.rejectWithValue('An unexpected error occurred');
}

});

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearCarError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action: PayloadAction<Car[]>) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCarError } = carSlice.actions;
export const selectCars = (state: RootState) => state.cars;
export default carSlice.reducer;
