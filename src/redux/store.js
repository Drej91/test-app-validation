import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';


//create store and applyMiddleware are functions

//we are adding middleware to our store so that whenever actions get fired
// or dispatched we can catch them and then display them

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
