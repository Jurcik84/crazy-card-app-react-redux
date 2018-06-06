
import {
    LOAD_CARDS_DEFINITIONS,
    LOAD_ERROR, LOAD_SUCCESS,
    IS_LOADED,
    FILTER_CARD_OPTIONS,
    SELECT_CARDS, GET_TOTAL_BALANCE,
    DELETE_SELECTED_CARD,
    REST_TOTAL_BALANCE
} from './constants';



// WHEN FETCHIN FROM EXTERNAL API
export const loadCardsSuccess = () => ({
    type: LOAD_SUCCESS
});

export const loadCardsError = () => ({
    type: LOAD_ERROR,
    error: true,
    contentLoaded: false

});

export const loadCardsDefinitions = (arr_cardOptions) => ({
    type: LOAD_CARDS_DEFINITIONS,
    payload: arr_cardOptions,
    error: false,
    contentLoaded: true
});

// END OF EXTERNAL API FETCHING

// FILTER_CARD_OPTIONS the availableFor card for you 
export const getAvailableCards = (ob_filter_options) => ({
    type: FILTER_CARD_OPTIONS,
    options: ob_filter_options

});

export const selectedCards = (selectedCards) => ({
    type: SELECT_CARDS,
    selectedCards

});


export const getTotalBalance = () => ({

    type: GET_TOTAL_BALANCE,
});


export const deleteSelectedCard = (cardType) => ({
    type: DELETE_SELECTED_CARD,
    cardType

});


export const resetTotalBalanceSum = ()=>({
    type: REST_TOTAL_BALANCE
})



export const deleteSelectedCardHandler = (cardType) => dispatch => dispatch(deleteSelectedCard(cardType));

export const getAvailableCardsHandler = (options) => dispatch => {
    dispatch(resetTotalBalanceSum());
    dispatch(getAvailableCards(options));
};

export const selectCardsHandler = (card) => dispatch => {
  
    dispatch(selectedCards(card));
    dispatch(getTotalBalance());
};

export const loadCartsDefinitionsHandler = () => (dispatch) => {

    dispatch(loadCardsSuccess());
    fetch('http://localhost:8080/crazycards/')
        .then(resposne => resposne.json())
        .then(data => dispatch(loadCardsDefinitions(data)))
        .catch(error => dispatch(loadCardsError()))
};




// Another async / await options
