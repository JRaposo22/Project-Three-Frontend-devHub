import React, {useState, useContext} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/auth.context';


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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/login`, {email, password});
            localStorage.setItem('authToken', response.data.authToken);
            authenticateUser();
            console.log(response.data.authToken);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={handlePassword}/>

            <button type="submit">Login</button>

            <p>Don't have an account?</p>
            <Link to="/signup">Signup</Link>
        </form>
    </div>
  )
}

export default Login;
