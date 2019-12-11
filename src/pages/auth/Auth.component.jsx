import React from "react";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/signUp.component";
import "./auth.styles.scss";

const Auth = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
