import React, {useState} from 'react';
import axios from 'axios';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

 function GoogleSigIn()  {
    const [user] = useAuthState(auth);
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        
        console.log(auth);
    };
    const signOut = () => {
        auth.signOut();
    };

    const registerGoogle = async () => {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {username, email, password, adminPass});
    }
  return (
    <>
    <button className="sign-in">
          <img style={{width: '200px'}}
            onClick={googleSignIn}
            src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1678721571/singin_google_oxikhu.png"
            alt="sign in with google"
            type="button"
          />
        </button>
        <button onClick={signOut}>Sign out</button>
        </>
  )
}

export default GoogleSigIn