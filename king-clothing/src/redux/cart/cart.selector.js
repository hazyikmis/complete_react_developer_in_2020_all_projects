//purpose of this file is defining cach-able / memoizable functions
//and use them repeatedly without executing the steps again and in functions

import { createSelector } from "reselect";

//2 types of selectors:
//1-input selectors (do not need createSelector)
//2-output selectors (need createSelector & need input selector)

const selectCart = (state) => state.cart;
//receives whole state (store) and returns a piece of it (only cart)

// const selectUser = (state) => state.user;
// export const selectXXX = createSelector(
//   [selectCart, selectUser],
//   (cart, user) => ......
// );

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
)