import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../../models/User"

interface AuthState {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: {
    username: '',
    id: null,
  },
  isAuth: false,
  isLoading: false,
  error: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registration(state) {
      state.isLoading = true;
    },
    registrationSuccess(state) {
      state.isLoading = false;
    },
    registrationError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    login(state) {
      state.isLoading = true;
    },
    loginSuccess(state) {
      state.isLoading = false;
    },
    loginError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    checkAuth(state) {
      state.isLoading = true;
    },
    authorized(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
    },
    notAuthorized(state) {
      state.isLoading = false;
    }
  },
})

export default authSlice.reducer;