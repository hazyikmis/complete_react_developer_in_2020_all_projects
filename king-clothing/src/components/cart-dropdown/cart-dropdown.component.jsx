import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector"; //for memoization

import { connect } from "react-redux";

import {createStructuredSelector} from "reselect"; //in case in the future we would use many different selectors

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cartItems
// });

// const mapStateToProps = ({ cart: {cartItems} }) => ({
//   //cartItems: state.cartItems
//   cartItems,
// });

//this method (using a reselect selector: selectCartItems) prevents re-calculation and 
//re-rendering of cart-dropdown component which is unrelated to the cart data
//this is good for performance (means memoization)
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state),
// });

//memoization one step further using createStructuredSelector
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
