import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

test('markAsRead action creator returns correct action object', () => {
  const index = 1;
  const expectedAction = {
    type: MARK_AS_READ,
    index: index
  };
  expect(markAsRead(index)).toEqual(expectedAction);
});

test('setNotificationFilter action creator returns correct action object for DEFAULT filter', () => {
  const filter = 'DEFAULT';
  const expectedAction = {
    type: SET_TYPE_FILTER,
    filter: filter
  };
  expect(setNotificationFilter(filter)).toEqual(expectedAction);
});

test('setNotificationFilter action creator returns correct action object for URGENT filter', () => {
  const filter = 'URGENT';
  const expectedAction = {
    type: SET_TYPE_FILTER,
    filter: filter
  };
  expect(setNotificationFilter(filter)).toEqual(expectedAction);
});
