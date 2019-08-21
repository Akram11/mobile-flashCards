import { RECEIVE_DECKS, CREATE_DECK, CREATE_CARD } from "../actions/decks";
// import initialData from '../utils/initialData'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks
      };
    }
    case CREATE_DECK:
      return {
        ...state,
        [action.deck.title]: {
          id: action.deck.id,
          title: action.deck.title,
          questions: action.deck.questions
        }
      };
    case CREATE_CARD:
      return {
        ...state,
        [action.deck.title]: {
          ...state[action.deck.title],
          questions: [
            ...state[action.deck.title].questions,
            { question: action.card.sideA, answer: card.sideB }
          ]
        }
      };
  }
};


// data[deck]  = {
//   ...data[deck],
//   questions: [
//     ...data[deck].questions,
//     {question: card.sideA, answer: card.sideB}
//   ]
// }

// data[deck]  = {
//     ...data[deck],
//     questions: [
//       ...data[deck].questions,
//       {question: card.sideA, answer: card.sideB}
//     ]
//   }


// FIX ADDING A CARD REDUCER/ API FUNCTION/ AND HOW TO SHOW IT IN UI