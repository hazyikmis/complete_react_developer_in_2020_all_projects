export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  ADD_ITEM: "ADD_ITEM",  //this action also increase quantity by 1 if the item exists
  REMOVE_ITEM: "REMOVE_ITEM",
  DECREASE_QUANTITY: "DECREASE_QUANTITY"
}