
import { LOAD_CARDS_DEFINITIONS, LOAD_ERROR, LOAD_SUCCESS, IS_LOADED, FILTER } from './constants';



// WHEN FETCHIN FROM EXTERNAL API
const loadCardsSuccess = () => ({
    type: LOAD_SUCCESS
});

const loadCardsDefinitions = (arr_cardOptions) => ({
    type: LOAD_CARDS_DEFINITIONS,
    payload: arr_cardOptions
});

const loadCardsError = () => ({
    type: LOAD_ERROR
});

// END OF EXTERNAL API FETCHING



// FILTER the availableFor card for you 
const getAvailableCards = (ob_filter_options) => ({
    type: FILTER,
    options: ob_filter_options
    
});



export const getAvailableCardsHandler = (options) => dispatch => dispatch(getAvailableCards(options))


export const loadCartsDefinitionsHandler = () => (dispatch) => {

    dispatch(loadCardsSuccess());

    fetch('')
        .then(resposne => resposne.json())
        .then(data => dispatch(loadCardsDefinitions(data)))
        .catch(error => dispatch(loadCardsError()))
}

