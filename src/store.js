
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { cardReducer } from './reducers';


// thunk : for asyn actions > love it
export default createStore(cardReducer, {

  arr_offered_cards: [
    {
      Card_Type: "Student Life Card",
      Apr: 18.9,
      Balance_Transfer_Offer_Duration: 0,
      Purchase_Offer_Duration: 6,
      Credit_Available: 1200,
      availableFor: "student",
    
      // income: 0
      // It looks like every student is elig. to have this student card event when they are not in employment
    },
    {
      Card_Type: "Anywhere Card",
      Apr: 33.9,
      Balance_Transfer_Offer_Duration: 0,
      Purchase_Offer_Duration: 0,
      Credit_Available: 300,
      availableFor: "anyone",
    },
    {
      Card_Type: "Liquid Card",
      Apr: 33.9,
      Balance_Transfer_Offer_Duration: 12,
      Purchase_Offer_Duration: 6,
      Credit_Available: 3000,
      min_required_income: 16001
    }
  ],
  arr_available_cards: []

}, applyMiddleware(thunk));