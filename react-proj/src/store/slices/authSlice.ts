// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthState {
//   token: string | null;
//   isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//   token: localStorage.getItem('token'),
//   isAuthenticated: !!localStorage.getItem('token'),
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess(state, action: PayloadAction<string>) {
//       state.token = action.payload;
//       state.isAuthenticated = true;
//       localStorage.setItem('token', action.payload);
//     },
//     logout(state) {
//       state.token = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;

// export default authSlice.reducer;



// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthState {
//   token: string | null;
//   user: any | null;
// }

// const initialState: AuthState = {
//   token: null,
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess: (state, action: PayloadAction<{ token: string; user: any }>) => {
//       state.token = action.payload.token;
//       state.user = action.payload.user;
//     },
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  // add more user fields if your backend returns them
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

const tokenFromStorage = localStorage.getItem('token');

const initialState: AuthState = {
  token: tokenFromStorage,
  user: null,
  isAuthenticated: !!tokenFromStorage,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = true;
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
