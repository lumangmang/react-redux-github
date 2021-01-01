/**
 * react-github.
 * Create by Devin on 2021/1/1.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

import {createStore, applyMiddleware, compose} from "redux";
import reducers from '../reducers';
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const configureStore = preloadedState => {
    const store = createStore(
        reducers,
        enhancer,
    );
    return store;
}

export default configureStore;
