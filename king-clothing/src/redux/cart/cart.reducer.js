import { CartActionTypes } from "./cart.actionTypes";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
        //no need to use action.payload in this action
      };
    default:
      return state;
  }
};

export default cartReducer;