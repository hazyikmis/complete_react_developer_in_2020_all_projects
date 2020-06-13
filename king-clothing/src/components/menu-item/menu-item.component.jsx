import React from "react";

import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

//title, imageUrl, size etc. send from Directory component but not history & match
//we can access history object with the help of withRouter hoc
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
//withRouter hoc allows MenuItem can access routeProps(history+location+match)