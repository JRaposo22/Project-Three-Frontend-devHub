import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSigIn from '../components/GoogleSigIn';
import '../pages/Home.css';



function Home() {
 
  return (
    <div className='home-flex'>
      <div className='waviy'>
        <span className="span1">D</span>
        <span className="span2">e</span>
        <span className="span3">v</span>
        <span className="span4">H</span>
        <span className="span5">u</span>
        <span className="span6">b</span>
        <span className="span7">.</span>
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
