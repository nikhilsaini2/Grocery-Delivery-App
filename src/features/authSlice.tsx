import { createSlice } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  users: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: { payload: User }) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    signup: (state, action: { payload: User }) => {
      state.users.push(action.payload);
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
