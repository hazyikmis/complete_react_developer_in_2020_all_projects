import React from "react";

import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decreaseItemQuantity,
} from "../../redux/cart/cart.actions";
import { decreaseCartItemQuantity } from "../../redux/cart/cart.utils";

//const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
const CheckoutItem = ({ cartItem, removeCartItem, addCartItem, decreaseCartItemQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => decreaseCartItemQuantity(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeItem(item)),
  //we need complete item (cartItem) to pass removeItem function through dispatch
  //but we have de-structured it at the definition of this component and its not accessible inside/here,
  //rather than de-structuring it at the definition, we de-structured it inside the component
  addCartItem: (item) => dispatch(addItem(item)),
  decreaseCartItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

//&#10005; is UTF-8 Dingbats (https://www.w3schools.com/charsets/ref_utf_dingbats.asp)

//cartItem passed by parent component (checkout.component.jsx), not with mapStateToProps!!!
//we need mapDispatchToProps because of the deletion action of items. And because of that
//we need to use connect
