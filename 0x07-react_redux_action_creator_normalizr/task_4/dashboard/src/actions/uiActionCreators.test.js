import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

test('login action creator returns correct action object', () => {
  const email = 'test@example.com';
  const password = 'password123';
  const expectedAction = {
    type: LOGIN,
    user: { email, password }
  };
  expect(login(email, password)).toEqual(expectedAction);
});

test('logout action creator returns correct action object', () => {
  const expectedAction = {
    type: LOGOUT
  };
  expect(logout()).toEqual(expectedAction);
});

test('displayNotificationDrawer action creator returns correct action object', () => {
  const expectedAction = {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
  expect(displayNotificationDrawer()).toEqual(expectedAction);
});

test('hideNotificationDrawer action creator returns correct action object', () => {
  const expectedAction = {
    type: HIDE_NOTIFICATION_DRAWER
  };
  expect(hideNotificationDrawer()).toEqual(expectedAction);
});
