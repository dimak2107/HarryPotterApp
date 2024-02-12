import AuthService from "../../services/AuthService";
import { authSlice } from "../reducers/AuthSlice";
import { AppDispatch } from "../store";

export const registration = (username: string, password: string) => (dispatch: AppDispatch) => {
  try {
    const response = AuthService.registration(username, password);
    if (response.status === 404) {
      throw new Error('Не возможно создать пользователя.')
    }
    dispatch(authSlice.actions.loginSuccess());
    dispatch(checkAuth());
  } catch(e) {
    const err = e as Error;
    dispatch(authSlice.actions.registrationError(err.message));
  }
}

export const login = (username: string, password: string) => (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.login());
    const response = AuthService.login(username, password);
    if (response.status === 404) {
      throw new Error('Пользователя не существует.');
    }
    dispatch(authSlice.actions.loginSuccess())
    dispatch(checkAuth());
  } catch(e) {
    const err = e as Error;
    dispatch(authSlice.actions.loginError(err.message));
  } 
}

export const checkAuth = () => (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.checkAuth());
  const response = AuthService.checkAuth();
  if (response) {
    dispatch(authSlice.actions.authorized(response));
  } else {
    dispatch(authSlice.actions.notAuthorized());
  }
}