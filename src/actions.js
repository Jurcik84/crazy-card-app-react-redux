
import { LOAD_CARDS_DEFINITIONS, LOAD_ERROR, LOAD_SUCCESS, IS_LOADED, FILTER_CARD_OPTIONS } from './constants';



// WHEN FETCHIN FROM EXTERNAL API
const loadCardsSuccess = () => ({
    type: LOAD_SUCCESS
});

const loadCardsError = () => ({
    type: LOAD_ERROR,
    error: true,
    contentLoaded: false

});

const loadCardsDefinitions = (arr_cardOptions) => ({
    type: LOAD_CARDS_DEFINITIONS,
    payload: arr_cardOptions,
    error: false,
    contentLoaded: true
});

// END OF EXTERNAL API FETCHING

// FILTER_CARD_OPTIONS the availableFor card for you 
const getAvailableCards = (ob_filter_options) => ({
    type: FILTER_CARD_OPTIONS,
    options: ob_filter_options
    
});



export const getAvailableCardsHandler = (options) => dispatch => dispatch(getAvailableCards(options))



export const loadCartsDefinitionsHandler = () => (dispatch) => {

    dispatch(loadCardsSuccess());
    fetch('http://localhost:8080/crazycards/')
        .then(resposne => resposne.json())
        .then(data => dispatch(loadCardsDefinitions(data)))
        .catch(error => dispatch(loadCardsError()))
}




// Another async / await options
