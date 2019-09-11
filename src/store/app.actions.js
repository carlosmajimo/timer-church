import { createAction } from 'redux-actions';
import {SET_CONFIG, SHOW_CONFIG_MODAL, SET_ID, SET_SHOW} from '../constants/redux.constants';

export const toggleModal = createAction(SHOW_CONFIG_MODAL,
    (modal) => ({modal: modal})
);

export const setShow = createAction(SET_SHOW,
	(show) => ({show: show})
);

export const setConfig = createAction(SET_CONFIG,
    (config) => ({timer: config})
);

export const setId = createAction(SET_ID,
    (id) => ({id: id})
);