import {AsyncStorage} from 'react-native'
import {Notifications, Permission } from 'expo'




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
