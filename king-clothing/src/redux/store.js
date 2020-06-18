import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //a middleware

import rootReducer from "./root-reducer";

import {persistStore} from "redux-persist"; 
//now, our browser can cache our store inside the localStorage/sessionStorage to according to some configuration parameters

//middleWares that the store expects from redux is going to be an array
//if we need to add more middlewares then just add to the array below
const middleWares = [logger];

//if we have just one logger middleware then the below code is enough
//const store = createStore(rootReducer, applyMiddleware(logger));

//const store = createStore(rootReducer, applyMiddleware(...middleWares));
//before "redux-persist", store had not been exported like below 
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistore = persistStore(store); //persistore is the persistent version of our store

//export default store;
export default {store, persistore};
