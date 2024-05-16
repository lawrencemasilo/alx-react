import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
  const state = fromJS({
    notifications: {
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: true, type: 'urgent', value: 'New data available' },
      },
    },
  });

  it('should select filterTypeSelected', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('should select getNotifications', () => {
    expect(getNotifications(state).toJS()).toEqual({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: true, type: 'urgent', value: 'New data available' },
    });
  });

  it('should select getUnreadNotifications', () => {
    expect(getUnreadNotifications(state).toJS()).toEqual({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    });
  });
});
