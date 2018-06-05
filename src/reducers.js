import {
    LOAD_CARDS_DEFINITIONS,
    LOAD_ERROR, LOAD_SUCCESS,
    IS_LOADED,
    FILTER_CARD_OPTIONS,
    SELECT_CARDS, GET_TOTAL_BALANCE,
    DELETE_SELECTED_CARD,
    REST_TOTAL_BALANCE
} from './constants';

export function cardReducer(state, action) {

    switch (action.type) {

        case LOAD_CARDS_DEFINITIONS:

            return {
                ...state,
                arr_offered_cards: action.payload
            };

        case FILTER_CARD_OPTIONS:

            const { income, employment_status } = action.options;

            const h_income = income || 0;

            return {
                ...state,
                arr_available_cards: state.arr_offered_cards.filter((card) => {

                    if ((card.min_required_income) && (h_income > card.min_required_income)) {
                        return card;
                    }

                    if (employment_status === "student" && card.availableFor === "student") {
                        return card;
                    }

                    if (h_income >= 0 && (card.availableFor && card.availableFor === 'anyone')) {
                        return card;
                    }
                })
            }

        case SELECT_CARDS:

            return {
                ...state,
                selectedCards: [...state.selectedCards, action.selectedCards].filter((item, index, arr) => {
                    const c = arr.map(item => item.Card_Type);
                    return index === c.indexOf(item.Card_Type)
                })
            };

        case GET_TOTAL_BALANCE:

            return {
                ...state,
                num_total_balance: state.selectedCards.reduce((total, next) => {
                    return total + next.Credit_Available
                }, 0)
            };

        case REST_TOTAL_BALANCE:
        return {
            ...state,
            num_total_balance: 0,
            selectedCards: []
        }    

        default:
            // This should be handled as error
            return state;
    }
}