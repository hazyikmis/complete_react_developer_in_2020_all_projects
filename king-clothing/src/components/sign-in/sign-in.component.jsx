import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="sign-in">
      <h2>I have already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
