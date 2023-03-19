import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import GoogleSigIn from '../../components/GoogleSigIn';
import './Signup.css';




function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminPass, setAdminPass] = useState("");
    const [error, setError] = useState('');

    //Handler Functions
    const handleUsername = (e) => setUsername(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleAdminPass = (e) => setAdminPass(e.target.value);
    
    const navigate = useNavigate();

    //Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {username, email, password, adminPass});

            //FIREBASE REGISTER
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    // ..
  });
            navigate('/login');
        } catch (error) {
            setError(error.response.data.message);
            console.log(error);
        }
    }

  return (
    <div>
        <form  className='signup-flex' onSubmit={handleSubmit}>
            <div className='signupform-box'>
                <h1>Signup</h1>
                
                <label htmlFor="username"></label>
                <input type="text" placeholder='Username' user="username" id="username" value={username} onChange={handleUsername}/>
                <hr />
                <label htmlFor="email"></label>
                <input type="email" placeholder='Email' name="email" id="email" value={email} onChange={handleEmail}/>
                <hr />
                <label htmlFor="password"></label>
                <input type="password" placeholder='Password' name="password" id="password" value={password} onChange={handlePassword}/>
                <hr />
                <label htmlFor="adminPass"></label>
                <input type="password" placeholder='Admin Password' name="adminPass" id="adminPass" value={adminPass} onChange={handleAdminPass}/>
                <hr />
                <h3>{error}</h3>
                <button type="submit" className='signupform-box-button'>Create account</button>
                <GoogleSigIn/>
                <div className='flex-form-end'>
                    <p>Already have an account?</p>
                    <Link className='login-click' to="/login">Login</Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Signup;
