import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { app } from './app.reducer'

const initialState = {
    modal: false,
    id: 0,
    timer: {
        date: Date.now(),
        message: ''
    }
};

/*const composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose : compose;*/

export const store = createStore(app, initialState, compose(applyMiddleware(promiseMiddleware)));