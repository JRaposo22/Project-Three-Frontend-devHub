import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSigIn from '../components/GoogleSigIn';
import '../pages/Home.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";


function Home() {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className='home-flex'>
      <div className='waviy'>
        <span className="--i:1">D</span>
        <span className="--i:2">e</span>
        <span className="--i:3">v</span>
        <span className="--i:4">H</span>
        <span className="--i:5">u</span>
        <span className="--i:6">b</span>
        <span className="--i:7">.</span>
      </div>
      <h2>Hello</h2>
      <Link to='/signup'>Signup</Link>
      <Link to='/quiz'>Quiz</Link>
      <GoogleSigIn/>
      <Link to='/chat'>Chat</Link>
    </div>
  );
}

export default Home;
