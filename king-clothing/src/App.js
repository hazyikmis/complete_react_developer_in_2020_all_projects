import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { ShopPage } from "./pages/shop/shop.component";
import Header from "./components/header-component/header.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import {createStructuredSelector} from "reselect"; //in case in the future we would use many different selectors
import {selectCurrentUser} from "./redux/user/user.selector";

import CheckoutPage from "./pages/checkout/checkout.component";

// const HatsPage = (props) => {
//   //console.log(props);
//   return (
//     <div>
//       <p>HATS PAGE</p>
//     </div>
//   );
// };

/*
Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth  library 
or referenceObject, we get back a function that lets us unsubscribe 
from the listener we just instantiated. 
componentWillUnmount lifecycle method should we use to call that unsubscribe method in?
[THIS EXPLANATION FOR CLASS COMPONENTS!!!]
*/

//function App() {
function App(props) {
  //after instantiating redux, no need to keep state here
  //const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //     console.log(user);
  //   });
  // }, []);

  function authStateChange(callback) {
    return auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //console.log(user)
        //callback(user);
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          //console.log(snapShot.data()) //in order to retrieve data (email, displayName, createdAt etc...)
          //but id is not in snapShot.data(), it's directly in snapShot object
          //setCurrentUser({...}
          callback({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        //console.log("NULL")
        callback(null);
      }
    });
  }

  useEffect(() => {
    //const unsubscribe = authStateChange(setCurrentUser);  //setCurrentUser was a setState function when useState hook was used
    //to use "props" we have changed App declaration, added "props" as parameter
    //const {setCurrentUser} = props;
    const unsubscribe = authStateChange(props.setCurrentUser); //setCurrentUser now is a user action (because of redux)
    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  return (
    <div>
      {/* <Header currentUser={currentUser} /> */}
      {/* No need to pass currentUser as props, because redux initiated */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/hats" render={() => <HatsPage />} /> */}
        {/* <Route exact path="/hats" render={(routeProps) => <HatsPage {...routeProps}/>} /> */}
        {/* <Route path="/shop/hats" component={HatsPage} /> */}
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        {/* <Route path="/signin" component={SignInAndSignUp} /> */}
        <Route exact path="/signin" render={() => props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
      </Switch>
    </div>
  );
}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })
//now you can use props.currentUser from store

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
//now you can call props.setCurrentUser

export default connect(mapStateToProps, mapDispatchToProps)(App);

//routeProps: history+location+match
//<Route exact path="/" component={HomePage} /> --> PASS AUTOMATICALLY
//<Route exact path="/hats" render={() => <HatsPage />} /> --> NOT PASS
//<Route exact path="/hats" render={(routeProps) => <HatsPage {...routeProps}/>} /> --> PASS MANUALLY, ALONG WITH OTHER THINGS IF YOU WANT
