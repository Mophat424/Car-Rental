import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Booking } from '../../types/Booking';

interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  loading: false,
  error: null,
};

// === FETCH BOOKINGS ===
export const fetchUserBookings = createAsyncThunk(
  'bookings/fetchUser',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:3001/bookings', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
      });
      if (!res.ok) throw new Error('Failed to fetch bookings');
      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'Unexpected error'
      );
    }
  }
);

// === DELETE BOOKING ===
export const deleteBooking = createAsyncThunk(
  'bookings/delete',
  async (id: number, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/bookings/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
      });
      if (!res.ok) throw new Error('Failed to delete booking');

      // return the id so we can remove it from state
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'Unexpected error'
      );
    }
  }
);

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserBookings.fulfilled, (state, action: PayloadAction<Booking[]>) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchUserBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // 🔥 Handle delete success
      .addCase(deleteBooking.fulfilled, (state, action: PayloadAction<number>) => {
        state.bookings = state.bookings.filter(b => b.bookingID !== action.payload);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const selectBookings = (state: RootState) => state.bookings;
export default bookingSlice.reducer;
