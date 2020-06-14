import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import { ShopPage } from "./pages/shop/shop.component";
import Header from "./components/header-component/header.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";

import { auth } from "./firebase/firebase.utils";

// const HatsPage = (props) => {
//   //console.log(props);
//   return (
//     <div>
//       <p>HATS PAGE</p>
//     </div>
//   );
// };

function authStateChange(callback) {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  });
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //     console.log(user);
  //   });
  // }, []);

  useEffect(() => {
    const unsubscribe = authStateChange(setCurrentUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/hats" render={() => <HatsPage />} /> */}
        {/* <Route exact path="/hats" render={(routeProps) => <HatsPage {...routeProps}/>} /> */}
        {/* <Route path="/shop/hats" component={HatsPage} /> */}
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;

//routeProps: history+location+match
//<Route exact path="/" component={HomePage} /> --> PASS AUTOMATICALLY
//<Route exact path="/hats" render={() => <HatsPage />} /> --> NOT PASS
//<Route exact path="/hats" render={(routeProps) => <HatsPage {...routeProps}/>} /> --> PASS MANUALLY, ALONG WITH OTHER THINGS IF YOU WANT
