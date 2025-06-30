// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: 'admin' | 'user';
// }

// interface AuthState {
//   token: string | null;
//   user: User | null;
//   isAuthenticated: boolean;
// }

// // Safely retrieve and parse user from localStorage
// let userFromStorage: User | null = null;
// const rawUser = localStorage.getItem('user');

// if (rawUser && rawUser !== 'undefined') {
//   try {
//     userFromStorage = JSON.parse(rawUser);
//   } catch (error) {
//     console.error('Invalid user JSON in localStorage:', error);
//     localStorage.removeItem('user'); // Optional: clean up invalid value
//   }
// }

// const tokenFromStorage = localStorage.getItem('token');

// const initialState: AuthState = {
//   token: tokenFromStorage,
//   user: userFromStorage,
//   isAuthenticated: !!tokenFromStorage,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess: (state, action: PayloadAction<{ token: string; user: User }>) => {
//       const { token, user } = action.payload;
//       state.token = token;
//       state.user = user;
//       state.isAuthenticated = true;

//       // Save token and user only if defined
//       if (token) {
//         localStorage.setItem('token', token);
//       }
//       if (user) {
//         localStorage.setItem('user', JSON.stringify(user));
//       }
//     },
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;


// src/store/slices/authSlice.ts




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  verifySuccess: boolean;
}

const tokenFromStorage = localStorage.getItem('token');
let userFromStorage: User | null = null;

try {
  const raw = localStorage.getItem('user');
  if (raw) userFromStorage = JSON.parse(raw);
} catch {
  localStorage.removeItem('user');
}

const initialState: AuthState = {
  token: tokenFromStorage,
  user: userFromStorage,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
  error: null,
  verifySuccess: false,
};

// THUNKS
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    { email, password, name, role }: { email: string; password: string; name: string; role: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch('http://localhost:3001/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Registration failed');
      return { email };
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Registration error');
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Login failed');
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Login error');
    }
  }
);


export const verifyUser = createAsyncThunk(
  'auth/verifyUser',
  async ({ email, code }: { email: string; code: string }, { rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:3001/users/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Verification failed');
      return true;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Verification error');
    }
  }
);

// SLICE
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Verify
      .addCase(verifyUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.verifySuccess = false;
      })
      .addCase(verifyUser.fulfilled, (state) => {
        state.loading = false;
        state.verifySuccess = true;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;

