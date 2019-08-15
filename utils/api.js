import { AsyncStorage } from 'react-native';
import initialData from './initialData';
export const FLASHCARDS_STORAGE_KEY = 'MobileApp:FlashCards';

// export const getDecks = () => {
//   checkInitialData();
//   return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
//     const data = JSON.parse(results);
//     return data;
//   });
// };

export const getInitialData = () => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    if (data === null) {
      return AsyncStorage.setItem(
        FLASHCARDS_STORAGE_KEY,
        JSON.stringify(initialData)
      );
    }
    return JSON.stringify(data);
  });
};

export const addDeck = (deck, title) => {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({ [title]: deck })
  );
};
