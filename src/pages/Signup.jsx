import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminPass, setAdminPass] = useState("");

    const handleUsername = (e) => setUsername(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleAdminPass = (e) => setAdminPass(e.target.value);


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {username, email, password, adminPass});
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div>
        <h1>Signup</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" user="username" id="username" value={username} onChange={handleUsername}/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={handlePassword}/>

            <label htmlFor="adminPass">Admin Password</label>
            <input type="adminPass" name="adminPass" id="adminPass" value={adminPass} onChange={handleAdminPass}/>

            <button type="submit">Create account</button>

            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
        </form>
    </div>
  )
}

export default Signup;
