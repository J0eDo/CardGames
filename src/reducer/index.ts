import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { theGame } from './game'


const reducer = combineReducers({
    theGame
})

const defaultState = {

}

export const store = createStore(reducer, defaultState, composeWithDevTools(applyMiddleware(thunk)));