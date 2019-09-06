import { handleActions } from 'redux-actions';
import {SET_CONFIG, SHOW_CONFIG_MODAL, SET_ID} from '../constants/redux.constants';

export const app = handleActions({
    [SHOW_CONFIG_MODAL]: (state, action) => {
        const { modal } = action.payload;
        return {
            ...state,
            modal
        }
    },
    [SET_CONFIG]: (state, action) => {
        const { timer } = action.payload;
        return {
            ...state,
            timer
        }
    },
    [SET_ID]: (state, action) => {
        const { id } = action.payload;
        return {
            ...state,
            id
        }
    }
}, {});