import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from '../context/auth.context';
import { auth } from "../firebase";

//Home function
function Home() {
  const [userAuth] = useAuthState(auth);
  console.log(userAuth);
  const { user, loggedIn} = useContext(AuthContext);

  return (
    <div className='home-flex'>
      <div className='waviy'>
        <span className="span1">d</span>
        <span className="span2">e</span>
        <span className="span3">v</span>
        <span className="span4">H</span>
        <span className="span5">u</span>
        <span className="span6">b</span>
        <span className="span7">.</span>
      </div>
      {/* Checks if there's a user logged in */}
      {loggedIn ? (
        <div className='style-both'>
          <h2>Hello, {user.username}.</h2>
        </div>
      ) : (
        <></>
      )}
      
      <img className='background-image-home' src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678912808/background-img_s0slfp.jpg" alt="" />
      <div className='home-information'>
        <div className='home-container'>
          <Link to="/jobs" className='link-home-information'>Jobs</Link>
          <hr className='hr-line'/>
          <p>Find and share job opportunities.</p>
        </div>
        <div className='home-container'>
          <Link to="/hints" className='link-home-information'>Hints</Link>
          <hr className='hr-line'/>
          <p>Discover some tips for your development and also share.</p>
        </div>
        <div className='home-container'>
          <Link to="/quiz" className='link-home-information'>Quiz</Link>
          <hr className='hr-line'/>
          <p>Test your knowledge with a quiz.</p>
        </div>
        <div className='home-container'>
          <Link to="/chat" className='link-home-information'>Chat</Link>
          <hr className='hr-line'/>
          <p>Talk with your developer's community.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
