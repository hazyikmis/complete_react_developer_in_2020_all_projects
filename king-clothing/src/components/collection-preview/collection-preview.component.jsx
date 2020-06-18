import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {/* 
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))} 
        */}
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

//IMPORTANT NOTE: We can use a selector her, and write down a mapStateToProps calling this selector...
//And in this selector we can decide how many items to show up, not in here, in the selector!!!
//Finally send into this component as "items". Not all items, just first 4 or more/less selected inside the shop.selector

export default CollectionPreview;

/*
{items
  .filter((item, idx) => idx < 4)
  .map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}

*/
