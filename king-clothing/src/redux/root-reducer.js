//https://redux.js.org/api/combinereducers

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //regular storage
//import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
  //whitelist: ["user", "cart"],  //no need to keep "user" persistent by redux-persist lib, because it's already persistent by firebase!!!
  whitelist: ["cart"]
}

/*
export default combineReducers({
  user: userReducer,
  cart: cartReducer
})
*/

//in order to use redux-persist, we have changed the default export like below:
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);