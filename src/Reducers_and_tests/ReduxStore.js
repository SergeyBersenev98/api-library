import {applyMiddleware, combineReducers, createStore} from 'redux';
import MainPageReducer from './MainPageReducer.js'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
 MainPage : MainPageReducer,
})
let store = createStore (reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;