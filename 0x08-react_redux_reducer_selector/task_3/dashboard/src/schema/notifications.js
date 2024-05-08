import { normalize, schema } from 'normalizr';
import notificationsData from '../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const normalizedData = normalize(notificationsData, [notification]);

export function getAllNotificationsByUser(userId) {
  return normalizedData.result.reduce((accumulator, notificationId) => {
    const notification = normalizedData.entities.notifications[notificationId];
    if (notification.author === userId) {
      accumulator.push(notification.context);
    }
    return accumulator;
  }, []);
}
