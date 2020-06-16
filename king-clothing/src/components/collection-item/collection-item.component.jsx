import React from "react";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

//const CollectionItem = ({ id, name, price, imageUrl, addItemToCart }) => {
//const CollectionItem = ({item: {name, price, imageUrl}, addItemToCart }) => {
const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

//after transferring some actions from cart.actions
//we can name them here whatever we want and then we can use them as props at the definition of
//this component with these new names
//for example the action "addItem" imported from cart.actions.js
//and below, with mapDispatchToProps, we defined it as "addItemToCart"
//and then used that name at the top: const CollectionItem = ({ id, name, price, imageUrl, addItemToCart }) => {
//addItemToCart props function accepts an item and passes it to addItem action
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
