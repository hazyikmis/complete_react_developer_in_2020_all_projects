import React from "react";

//import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  // return (
  //   <div className="homepage">
  //     <Directory />
  //   </div>
  // );
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;