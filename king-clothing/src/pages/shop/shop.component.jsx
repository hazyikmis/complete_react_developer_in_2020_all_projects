//VER.3
//ShopPage is becoming a simple non-connected component now!
//We will now have the child component (CollectionOverview) to be connected

import React from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({collections}) => {
  //const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;

//shop data is stored in internal state, not in the redux store,
//lets move it to redux store

/*
//VER.1

import React, { useState } from "react";

import SHOP_DATA from "../../shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
*/

/*
//VER.2

import React from "react";

//import SHOP_DATA from "../../shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import {connect} from "react-redux";

import {selectShopCollections} from "../../redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";

const ShopPage = ({collections}) => {
  //const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

//this is how to write down mapStateToProps without using reselect functionality
// const mapStateToProps = state => ({
//   collections: state.shop.collections
// })

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);
*/
