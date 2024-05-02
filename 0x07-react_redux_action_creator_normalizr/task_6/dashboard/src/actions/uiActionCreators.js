import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

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
