import React from "react";
//import { Link } from "react-router-dom";

//import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

//after creating the header.styles.jsx file and adding the code below , we do not need anymore: import "./header.styles.scss";"
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  //OptionDiv,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  //console.log(currentUser)
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          // <OptionDiv onClick={() => auth.signOut()}>
          //   SIGN OUT
          // </OptionDiv>
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden ? <CartDropDown /> : null}
    </HeaderContainer>
  );
};

/*
const Header = ({ currentUser, hidden }) => {
  //console.log(currentUser)
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropDown /> : null}
    </div>
  );
};
*/

//state is the top level rootReducer
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

// const mapStateToProps = ({ user, cart }) => ({
//   currentUser: user.currentUser,
//   hidden: cart.hidden,
// });

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

//createStructuredSelector passes top level state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

//NOTES:
//1. We can create/use a local store (state for this component) in here (Header component) to keep CartDropDown's show/hide state
//That is completely fine. But we are not sure, maybe in the future we gonna call CartDropDown from inside another component
