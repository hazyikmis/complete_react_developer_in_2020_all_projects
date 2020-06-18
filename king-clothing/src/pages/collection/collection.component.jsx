import React from "react";
import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

//const CollectionPage = ({ match }) => {
  //console.log(match); //match.path is "/shop/:collectionId", match.params is {collectionId: "hats"}
const CollectionPage = ({ collection }) => {
  //console.log(collection); //match.path is "/shop/:collectionId", match.params is {collectionId: "hats"}
  const {title, items} = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

//ownProps: optional 2nd parameter which is the own parameters of the component wrapped by connect
const mapStateToProps = (state, ownProps) => ({
  //the paramter defined inside the selectCollection is collectionUrlParam
  collection: selectCollection(ownProps.match.params.collectionId)(state)
  //SENDING STATE IS NECESSARY BECAUSE UNLIKE OTHER SELECTORS, THIS SELECTOR NEEDS A PART OF THE STATE DEPENDING ON THE URL PARAMETER!
  //BECAUSE THIS SELECTOR IS A FUNCTION!!!
})

export default connect(mapStateToProps)(CollectionPage);
