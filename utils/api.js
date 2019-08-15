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

export const addDeck = (deck) => {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({ [deck.title]: deck })
  );
};

export const addCard = (deck, card) => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    console.log("data is:", data)  
    console.log("card is:", card)

    data[deck]  = {
      ...data[deck],
      questions: [
        ...data[deck].questions,
        {question: card.sideA, answer: card.sideB}
      ]
    }
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    console.log("new deck is:", data[deck])

  });
};

