// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   // add more user fields if your backend returns them
// }

// interface AuthState {
//   token: string | null;
//   user: User | null;
//   isAuthenticated: boolean;
// }

// const tokenFromStorage = localStorage.getItem('token');

// const initialState: AuthState = {
//   token: tokenFromStorage,
//   user: null,
//   isAuthenticated: !!tokenFromStorage,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess: (
//       state,
//       action: PayloadAction<{ token: string; user: User }>
//     ) => {
//       const { token, user } = action.payload;
//       state.token = token;
//       state.user = user;
//       state.isAuthenticated = true;
//       localStorage.setItem('token', token);
//     },
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
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
  role: 'admin' | 'user'; // 👈 added role here
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

