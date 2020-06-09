import React from "react";

import "./card-list.styles.css";

export const CardList = (props) => {
  const {monsters} = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
};

/*
export const CardList = (props) => (
  <div className="card-list">{props.children}</div>
);
*/

/*
export const CardList = (props) => (
  <div className="card-list">
    <h1>CardList!</h1>
    <h1>{props.name}</h1>
    <div>{props.children}</div>
  </div>
);
*/
