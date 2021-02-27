import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
//import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
    const store = createStore(
        //Reducer,
        //initialState,
        combineReducers({
            ...createForms({
                feedbackForm: InitialFeedback
            }),
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};