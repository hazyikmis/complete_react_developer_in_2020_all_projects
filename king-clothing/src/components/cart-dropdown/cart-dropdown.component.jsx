import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector"; //for memoization

import { connect } from "react-redux";

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

//this method (using a reselect selector: selectCartItems) prevents re-rendering of 
//cart-dropdown component which is unrelated to the cart data
//this is good for performance (means memoization)
const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
