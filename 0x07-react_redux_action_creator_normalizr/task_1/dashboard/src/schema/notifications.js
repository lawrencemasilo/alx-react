import notificationsData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  return notificationsData.filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}import { normalize, schema } from 'normalizr';
import notificationsData from '../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export function getAllNotificationsByUser(userId) {
  const normalizedData = normalize(notificationsData, [notification]);
  const userNotifications = normalizedData.result.filter(notificationId => {
    const notification = normalizedData.entities.notifications[notificationId];
    return notification.author === userId;
  });
  return userNotifications.map(notificationId => normalizedData.entities.notifications[notificationId].context);
}