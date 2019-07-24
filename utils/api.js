import { AsyncStorage } from "react-native";
import initialData from './initialData'
export const FLASHCARDS_STORAGE_KEY = "MobileApp:FlashCards";

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
};

export const addDeck = deck => {
    return AsyncStorage.mergeItem(
      FLASHCARD_STORAGE_KEY,
      JSON.stringify({ [deck.id]: deck })
    );
  };

  