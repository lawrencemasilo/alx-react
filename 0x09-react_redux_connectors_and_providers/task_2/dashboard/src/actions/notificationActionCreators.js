import { markAsRead, setNotificationFilter } from './notificationActionCreators';

export const boundMarkAsRead = (index) => markAsRead(index);
export const boundSetNotificationFilter = (filter) => setNotificationFilter(filter);

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index: index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter: filter
});
