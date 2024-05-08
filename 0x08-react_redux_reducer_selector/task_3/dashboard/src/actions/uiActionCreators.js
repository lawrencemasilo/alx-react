import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import fetch from 'node-fetch';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const boundLogin = (email, password) => login(email, password);
export const boundLogout = () => logout();
export const boundDisplayNotificationDrawer = () => displayNotificationDrawer();
export const boundHideNotificationDrawer = () => hideNotificationDrawer();

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const logout = () => ({
  type: LOGOUT
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login(email, password));
  try {
    const response = await fetch('/login-success.json');
    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};