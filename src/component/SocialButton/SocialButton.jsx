import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase.init";

const SocialButton = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const githubProvider = new GithubAuthProvider();
  const handleGithubSIgnIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="text-center">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-success"
      >
        Sign in With Google
        <div className="text-xl ml-2">
          <FaGoogle />
        </div>
      </button>
      <button
        onClick={handleGithubSIgnIn}
        className="btn btn-outline m-2 btn-info"
      >
        Sign in With Github
        <div className="text-xl m-2">
          <FaGithub />
        </div>
      </button>
    </div>
  );
};

export default SocialButton;
