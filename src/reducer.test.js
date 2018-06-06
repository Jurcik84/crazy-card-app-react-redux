
import {cardReducer} from './reducers';

import * as types  from './actions';

import {
    LOAD_CARDS_DEFINITIONS,
    LOAD_ERROR, LOAD_SUCCESS,
    IS_LOADED,
    FILTER_CARD_OPTIONS,
    SELECT_CARDS, GET_TOTAL_BALANCE,
    DELETE_SELECTED_CARD,
    REST_TOTAL_BALANCE
} from './constants';



describe('app reducer', ()=>{

    it('should return initial state', ()=>{

        expect(cardReducer({}, {})).toEqual({})
    });

    it('shoul')

})