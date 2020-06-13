import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();



const rootStore = createStore(actions, states, applyMiddleware(sagaMiddleware));