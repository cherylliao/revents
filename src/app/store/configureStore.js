import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const configureStore = () => {

    const middlewares= [thunk]
    const composedEnhander = composeWithDevTools(applyMiddleware(...middlewares))
    const store=createStore(rootReducer,
        composedEnhander)

    return store;
}

export default configureStore
