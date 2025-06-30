import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Car {
  carID: number;
  carModel: string;
  year: string;
  color?: string;
  rentalRate: string;
  availability: boolean;
}

interface UserCarState {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

const initialState: UserCarState = {
  cars: [],
  loading: false,
  error: null,
};

export const fetchAvailableCars = createAsyncThunk<Car[], void, { rejectValue: string }>(
  'userCars/fetchAvailableCars',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:3001/cars?available=true', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
      });

      if (!res.ok) throw new Error('Failed to fetch available cars');
      return await res.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

const userCarsSlice = createSlice({
  name: 'userCars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailableCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAvailableCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchAvailableCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load cars';
      });
  },
});

export default userCarsSlice.reducer;
