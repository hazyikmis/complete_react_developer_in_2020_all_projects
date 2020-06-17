import { CartActionTypes } from "./cart.actionTypes";
import { addNewItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
        //no need to use action.payload in this action
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        //cartItems: [...state.cartItems, action.payload]
        cartItems: addNewItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        //cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id),
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
