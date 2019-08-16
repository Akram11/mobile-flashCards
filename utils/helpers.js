import {AsyncStorage} from 'react-native'
import { Notifications, Permissions } from "expo";


const NOTIFICATION_KEY = "FlashCards:notifications";

export const generateId = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};


export const clearLocalNotification = () => {
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
};

export const createNotification = () => {
  return {
    title: 'Time for a quiz!',
    body: "Don't let the day passed without a small quiz",
    android: {
      sound: true,
      sticky: false,
      priority: 'high',
      vibrate: true,
    }
  }
}

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
    if (data === null){
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({status}) => {
        if (status === 'granted'){
          Notifications.cancelAllScheduledNotificationsAsync()
          let tmrw = new Date()
          tmrw.setDate(tmrw.getDate() + 1)
          tmrw.setHours(20)
          tmrw.setMinutes(0)

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time: tmrw,
              repeat: 'day', 
            }
          )
          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        }
      })
    }
  } )  
}