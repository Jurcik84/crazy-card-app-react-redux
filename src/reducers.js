import { LOAD_CARDS_DEFINITIONS } from './constants';

export function cardReducer(state, action) {

    switch (action.type) {

        case LOAD_CARDS_DEFINITIONS:

            return {
                ...state,
                arr_offered_cards: action.payload
            };

        case "FILTER":

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

        default:
            // This should be handled as error
            return state;
    }
}