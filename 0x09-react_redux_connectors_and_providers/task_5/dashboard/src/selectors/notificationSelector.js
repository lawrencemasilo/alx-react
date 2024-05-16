import { createSelector } from 'reselect';

const getNotificationState = state => state.get('notifications');

export const filterTypeSelected = createSelector(
  getNotificationState,
  notifications => notifications.get('filter')
);

export const getNotifications = createSelector(
  getNotificationState,
  notifications => notifications.get('notifications')
);

export const getUnreadNotifications = createSelector(
  getNotificationState,
  notifications =>
    notifications
      .get('notifications')
      .filter(notification => !notification.get('isRead'))
);
