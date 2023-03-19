import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { auth } from "../firebase";
import { useNavigate } from 'react-router';
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import '../components/GoogleSigIn.css';

//Google SignIn component
 function GoogleSigIn()  {
    const [user] = useAuthState(auth);
    const { authenticateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    //Function to authenticate with google using firebase
    const registerGoogle = async () => {  
      
      try {
        //Get the user email to check if it's already registered in mongoDB 
        const responseUser = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user.email}`);
        //If email doesn't exist, register on mongoDB 
        if(responseUser.data[0].email !== user.email){
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {username:user.displayName, email:user.email, password:import.meta.env.VITE_DEFAULT_PASS, adminPass:''});
        }else{
          //If it already exists, login using the email
          const responseBackend = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {email:user.email, password:import.meta.env.VITE_DEFAULT_PASS});
          localStorage.setItem('authToken', responseBackend.data.authToken);
          authenticateUser(); 
        }
        navigate('/');
        
      } catch (error) {
        console.log(error);
      }        
    }
    //Sign in with google and pass the user info to the firebase
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      
    };
    const signOut = () => {
        auth.signOut();
    };

    useEffect(() => {
      registerGoogle();
    }, [user])
    
  return (
    <>
    <button className="sign-in">
          <img style={{width: '150px'}}
            onClick={googleSignIn}
            src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1678721571/singin_google_oxikhu.png"
            alt="sign in with google"
            type="button"
          />
        </button>
        </>
  )
}

export default GoogleSigIn;