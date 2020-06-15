import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //a middleware

import rootReducer from "./root-reducer";

//middleWares that the store expects from redux is going to be an array
//if we need to add more middlewares then just add to the array below
const middleWares = [logger];

//if we have just one logger middleware then the below code is enough
//const store = createStore(rootReducer, applyMiddleware(logger));

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;