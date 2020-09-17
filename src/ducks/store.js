import { createRef } from 'react'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

const rootReducer = combineReducers({
    username: reducer,
    profile: reducer,
    userId: reducer
})

export default createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
)