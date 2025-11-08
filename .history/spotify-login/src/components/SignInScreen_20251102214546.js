import React from "react";
import Header from "./Header";
import SignInButtons from "./SignInButtons";
import spotifyLogo from "../assets/spotify-logo.svg";

const SignInScreen = () => {
  return (
    <div className="signin-screen">
      <img src={spotifyLogo} alt="Spotify" className="spotify-logo" />
      <Header />
      <p className="signin-sub">Sign in with</p>
      <SignInButtons />
    </div>
  );
};

export default SignInScreen;