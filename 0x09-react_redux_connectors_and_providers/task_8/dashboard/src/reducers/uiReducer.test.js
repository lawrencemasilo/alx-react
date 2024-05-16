import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    }));
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action)).toEqual(Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map()
    }));
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action)).toEqual(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    }));
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    expect(uiReducer(undefined, action)).toEqual(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map()
    }));
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    expect(uiReducer(undefined, action)).toEqual(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    }));
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    expect(uiReducer(undefined, action)).toEqual(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    }));
  });
});
