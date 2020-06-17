import {CartActionTypes} from "./cart.actionTypes"

export const toggleCartHidden = user => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  //payload: //no need to pass payload
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});