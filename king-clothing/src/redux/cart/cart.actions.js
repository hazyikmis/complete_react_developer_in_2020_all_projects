import {CartActionTypes} from "./cart.actionTypes"

export const toggleCartHidden = user => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  //payload: //no need to pass payload
});

//this function below, adds a new item to the cart if its not exists in the cart, otherwise just increase the quantity
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

//this function below, removes the item completely from the cart, regardless of its quantity
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const decreaseItemQuantity = item => ({
  type: CartActionTypes.DECREASE_QUANTITY,
  payload: item
});