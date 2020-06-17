import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector"; //for memoization

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect"; //in case in the future we would use many different selectors

import { withRouter } from "react-router-dom"; //to access history from inside this component

import { toggleCartHidden } from "../../redux/cart/cart.actions";

//const CartDropDown = ({ cartItems }) => (
//const CartDropDown = ({ cartItems, history }) => (
const CartDropDown = ({ cartItems, history, toggleCartHide }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHide();
      }}
    >
      Go To Checkout
    </CustomButton>
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

const mapDispatchToProps = (dispatch) => ({
  toggleCartHide: () => dispatch(toggleCartHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));
//withRouter used for accessing routeProps (match, location, history)
//now we can take history as props

//!HERE IS IMPORTANT THING:
//IF we only pass "mapStateToProps" to "connect", then "dispatch" function automatically passed to
//the component. If you define the component as> const CartDropDown = ({ cartItems, history, ...otherProps }) => (
//and console.log(otherProps) , then you'll see the "dispatch" along with cartItems and history
//So you can call directly actions by dispatch(toggleCartHidden()) for example.
//Yo do not need to define mapDispatchToProps if you not planning to make some changes on actions
//THIS VERSION WORKS AS IS, BUT IN ORDER TO SHOW THE METHOD EXPLAINED ABOVE PLEASE CHECK 
//OTHER VERSION OF cart-dropdown.component.jsx
