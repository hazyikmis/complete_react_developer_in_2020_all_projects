import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHide, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHide}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

//mapStateToProps first required to show number of items in the cart
// const mapStateToProps = (state) => ({
//   itemCount: state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
// });
// const mapStateToProps = ({cart: {cartItems}}) => ({
//   itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
// })
//this is a good example. We are not using the exact elements of state,
//we have computed and created a new state element (itemCount) based on existing state elements

//this is the updated version of mapStateToProps after using "reselect" npm lib, to bring memoization capability in our app
//by using this method, we never calculate how many items in the cart every time when user clicks the cart-icon
//calculation done only in the first time
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})


const mapDispatchToProps = (dispatch) => ({
  toggleCartHide: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
