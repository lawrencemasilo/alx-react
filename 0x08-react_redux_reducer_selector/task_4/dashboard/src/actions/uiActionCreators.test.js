import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS actions on successful login', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { /* Whatever response you want to simulate */ },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, payload: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions on failed login', () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, payload: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
