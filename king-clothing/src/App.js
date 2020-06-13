import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = (props) => {
  //console.log(props);
  return (
    <div>
      <p>HATS PAGE</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/hats" render={() => <HatsPage />} /> */}
        {/* <Route exact path="/hats" render={(routeProps) => <HatsPage {...routeProps}/>} /> */}
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;


//routeProps: history+location+match
//<Route exact path="/" component={HomePage} /> --> PASS AUTOMATICALLY
//<Route exact path="/hats" render={() => <HatsPage />} /> --> NOT PASS
//<Route exact path="/hats" render={(routeProps) => <HatsPage {...routeProps}/>} /> --> PASS MANUALLY, ALONG WITH OTHER THINGS IF YOU WANT