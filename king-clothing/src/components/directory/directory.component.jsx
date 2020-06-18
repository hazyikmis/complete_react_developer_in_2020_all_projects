//sections are stored in local state not in the redux store!!!
//it's a debate whether static data like here, should be stored in redux store...
//if redux used, then we have some advantages about testing

//import React, { useState } from "react"; //state moved to redux with connect & directory.reducer.js
import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

import {connect} from "react-redux";

import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";

//const Directory = () => {
const Directory = ({sections}) => {
  // const initialSections = [
  //   {
  //     title: "hats",
  //     imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //     id: 1,
  //     linkUrl: "shop/hats",
  //   },
  //   {
  //     title: "jackets",
  //     imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //     id: 2,
  //     linkUrl: "shop/jackets",
  //   },
  //   {
  //     title: "sneakers",
  //     imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  //     id: 3,
  //     linkUrl: "shop/sneakers",
  //   },
  //   {
  //     title: "womens",
  //     imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //     size: "large",
  //     id: 4,
  //     linkUrl: "shop/womens",
  //   },
  //   {
  //     title: "mens",
  //     imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  //     size: "large",
  //     id: 5,
  //     linkUrl: "shop/mens",
  //   },
  // ];

  // const [sections, setSections] = useState(initialSections);

/*
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </div>
  );
*/
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

//this is how to write down mapStateToProps without using reselect functionality
// const mapStateToProps = (state) => ({
//   sections: state.sections
// })

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
