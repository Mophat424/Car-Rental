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



//working
// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../index';

// export interface Car {
//   carID?: number;
//   carModel: string;
//   year: string;
//   color?: string;
//   rentalRate: string;
//   availability: boolean;
//   locationID?: number;
// }

// interface CarState {
//   cars: Car[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: CarState = {
//   cars: [],
//   loading: false,
//   error: null,
// };

// // === Fetch All Cars ===
// export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
//   try {
//     const res = await fetch('http://localhost:3001/cars', {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//       },
//     });
//     if (!res.ok) throw new Error('Failed to fetch cars');
//     return await res.json();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unexpected error');
//   }
// });

// // === Save Car (Add or Edit) ===
// export const saveCar = createAsyncThunk('cars/save', async (car: Car, thunkAPI) => {
//   const isEdit = !!car.carID;
//   const url = isEdit
//     ? `http://localhost:3001/cars/${car.carID}`
//     : 'http://localhost:3001/cars';
//   const method = isEdit ? 'PUT' : 'POST';

//   const res = await fetch(url, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//     },
//     body: JSON.stringify(car),
//   });

//   if (!res.ok) throw new Error('Failed to save car');
//   thunkAPI.dispatch(fetchCars());
//   return;
// });

// // === Delete Car ===
// export const deleteCar = createAsyncThunk('cars/delete', async (carID: number, thunkAPI) => {
//   const res = await fetch(`http://localhost:3001/cars/${carID}`, {
//     method: 'DELETE',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//     },
//   });
//   if (!res.ok) throw new Error('Failed to delete car');
//   thunkAPI.dispatch(fetchCars());
//   return;
// });

// const carSlice = createSlice({
//   name: 'cars',
//   initialState,
//   reducers: {
//     clearCarError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch cars
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
//         state.error = action.payload as string;
//       })

//       // Save car (no need to modify state because fetchCars is dispatched after)
//       .addCase(saveCar.rejected, (state, action) => {
//         state.error = action.payload as string;
//       })

//       // Delete car
//       .addCase(deleteCar.rejected, (state, action) => {
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearCarError } = carSlice.actions;
// export const selectCars = (state: RootState) => state.cars;
// export default carSlice.reducer;




// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../index';
// import { Car } from '../../types/Car';

// interface CarState {
//   cars: Car[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: CarState = {
//   cars: [],
//   loading: false,
//   error: null,
// };

// // === Fetch All Cars ===
// export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
//   try {
//     const res = await fetch('http://localhost:3001/cars', {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//       },
//     });
//     if (!res.ok) throw new Error('Failed to fetch cars');
//     return await res.json();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unexpected error');
//   }
// });

// // === Save Car (Add or Edit) ===
// export const saveCar = createAsyncThunk('cars/save', async (car: Car, thunkAPI) => {
//   const isEdit = !!car.carID;
//   const url = isEdit
//     ? `http://localhost:3001/cars/${car.carID}`
//     : 'http://localhost:3001/cars';
//   const method = isEdit ? 'PUT' : 'POST';

//   const res = await fetch(url, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//     },
//     body: JSON.stringify(car),
//   });

//   if (!res.ok) {
//     const msg = await res.text();
//     throw new Error(msg || 'Failed to save car');
//   }

//   thunkAPI.dispatch(fetchCars());
//   return;
// });

// // === Delete Car ===
// export const deleteCar = createAsyncThunk('cars/delete', async (carID: number, thunkAPI) => {
//   const res = await fetch(`http://localhost:3001/cars/${carID}`, {
//     method: 'DELETE',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
//     },
//   });

//   if (!res.ok) {
//     const msg = await res.text();
//     throw new Error(msg || 'Failed to delete car');
//   }

//   thunkAPI.dispatch(fetchCars());
//   return;
// });

// const carSlice = createSlice({
//   name: 'cars',
//   initialState,
//   reducers: {
//     clearCarError: (state) => {
//       state.error = null;
//     },
//   },
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
//         state.error = action.payload as string;
//       })
//       .addCase(saveCar.rejected, (state, action) => {
//         state.error = action.payload as string;
//       })
//       .addCase(deleteCar.rejected, (state, action) => {
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearCarError } = carSlice.actions;
// export const selectCars = (state: RootState) => state.cars;
// export default carSlice.reducer;








import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Car } from '../../types/Car';
import { API_BASE_URL } from '../../utils/apiBase';

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

export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await fetch(`${API_BASE_URL}/cars`, {
      // const res = await fetch('http://localhost:3001/cars', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
      },
    });
    if (!res.ok) throw new Error('Failed to fetch cars');
    return await res.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unexpected error');
  }
});

export const saveCar = createAsyncThunk('cars/save', async (car: Car, thunkAPI) => {
  const isEdit = !!car.carID;
  const url = isEdit
    ? `${API_BASE_URL}/cars/${car.carID}`
    // : 'http://localhost:3001/cars';
    : `${API_BASE_URL}/cars`;
  const method = isEdit ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
    body: JSON.stringify(car),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || 'Failed to save car');
  }

  thunkAPI.dispatch(fetchCars());
  return;
});

export const deleteCar = createAsyncThunk('cars/delete', async (carID: number, thunkAPI) => {
  const res = await fetch(`${API_BASE_URL}/cars/${carID}`, {
    // const res = await fetch(`http://localhost:3001/cars/${carID}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || 'Failed to delete car');
  }

  thunkAPI.dispatch(fetchCars());
  return;
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
      })
      .addCase(saveCar.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { clearCarError } = carSlice.actions;
export const selectCars = (state: RootState) => state.cars;
export default carSlice.reducer;
