import React, { useEffect, useState } from "react";
import logo from "../assests/logo.png";
import "./Login.css";
import SignUpScreen from "./SignUpScreen";
function Login() {
  const [signIn, setSignIn] = useState(false);


  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img src={logo} className="loginscreen__logo" alt="" />
        <button className="loginscreen__button" onClick={()=>setSignIn(true)}>
          Sign in
        </button>
        <div className="loginscreen__gradient" />
      </div>
      <div className="loginscreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more,</h1>
            <h2>Watch anywhere, Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginscreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginscreen_getStarted"
                  onClick={()=>setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
