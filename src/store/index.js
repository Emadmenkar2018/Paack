import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import sagas from "./sagas"; 
import { createStore, combineReducers, applyMiddleware, compose } from "redux";


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
