import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import routeReducer from './reducers';

const middleware = [thunk];
const initialState = {};

const store = createStore(routeReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;