import React, {useState, useContext} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import '../pages/Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const { authenticateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {email, password});
            localStorage.setItem('authToken', response.data.authToken);
            authenticateUser();
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
  });

  //FIREBASE UPDATE
  updateProfile(auth.currentUser, {
    displayName: response.data.foundUser.username, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
    // Profile updated!
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });

            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div>
        <form className='login-flex' onSubmit={handleSubmit}>
            <div className='loginform-box'>
                <h1>Login</h1>

                <label htmlFor="email"></label>
                <input type="email" placeholder='Email' name="email" id="email" value={email} onChange={handleEmail}/>

                <label htmlFor="password"></label>
                <input type="password" placeholder='Password' name="password" id="password" value={password} onChange={handlePassword}/>

                <button type="submit">Login</button>

                <div className='flex-form-end'>
                    <p>Don't have an account?</p>
                    <Link className='signup-click' to="/signup">Signup</Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login;
