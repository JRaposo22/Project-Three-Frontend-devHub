import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import '../components/Navbar.css';


function Navbar() {
    const { loggedIn, user, logout } = useContext(AuthContext);
    const [hiddenJob, setHiddenJob] = useState(true);
    const [hiddenHint, setHiddenHint] = useState(true);

    
    const open = function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    const close = function closeNav() {
      document.getElementById("mySidenav").style.width = "75px";
    }

    const closeAndHidden = function closeHidden() {
      setHiddenHint(true);
      setHiddenJob(true);
      document.getElementById("mySidenav").style.width = "75px";
    }

    const closeAndLogout = function closeLogout() {
      document.getElementById("mySidenav").style.width = "75px";
      logout();
    }

    const hideJob = function hiddenApp() {
      setHiddenJob(!hiddenJob);
    }

    const hideHint = function hiddenApp2() {
      setHiddenHint(!hiddenHint);
    }

  return (
    <nav className='navbar'>
      <div>
      {!loggedIn &&
        <div className='style-both'>
          <Link to="/signup" className='options-style'>Signup</Link>
          <Link to="/login" className='options-style'>Login</Link>
        </div>
      }
    </div>
    {loggedIn && 
        <div id="mySidenav" className="sidenav">
          <button className='closebutton' onClick={close}> <img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678908074/close-icon_upokp8.png" alt="close window" /> </button>
          {loggedIn && (
          <div className='flex-icon'>
            <button onClick={open} ><img className='image-user' src={user && user.imageUrl} alt="" /></button>
            <Link to={`/profile/${user && user._id}`} className='link-sidenav' onClick={close}>Profile</Link>
          </div>
        )}
          <div className='flex-icon'>
            <button onClick={open}><img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678896984/home-icon_dvzapa.png" alt="" /></button>
            <Link className='home-link link-sidenav' to="/" onClick={close}>Home</Link>
          </div>
        {loggedIn ? (
        <>
          {(!user.admin) ? (
          <div className='flex-icon'>
            <button onClick={open}><img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678901805/job-icon_emlrex.png" alt="" /></button>            
            <Link to="/jobs" className='link-sidenav' onClick={close}>Jobs</Link>
          </div>
          ) : (
            <div className='flex-block'>
            <div className='flex-icon'>
              <button onClick={open}><img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678901805/job-icon_emlrex.png" alt="" /></button>
              <button className='link-sidenav link-items' onClick={hideJob}>Jobs</button>
            </div>
            <div className={`expand-jobs ${hiddenJob && 'hidden-app'}`}>
              <Link to="/jobs" className='expand-link' onClick={closeAndHidden}>Jobs</Link>
              <Link to="/jobs-approval" className='expand-link' onClick={closeAndHidden}>Jobs Aproval</Link>
            </div>
          </div>
          )}
          
          {(!user.admin) ? (
            <div className='flex-icon'>
              <button onClick={open}><img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678902162/hint-icon_pczegs.png" alt="" /></button>
              <Link to="/hints" className='link-sidenav' onClick={close}>Hints</Link>
            </div>
          ) : (
            <>
            <div className='flex-icon'>
              <button onClick={open}><img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678902162/hint-icon_pczegs.png" alt="" /></button>
              <button className='link-sidenav link-items' onClick={hideHint}>Hints</button>
            </div>
              <div className={`expand-hints ${hiddenHint && 'hidden-app'}`}>
                <Link to="/hints" className='expand-link' onClick={closeAndHidden}>Hints</Link>
                <Link to="/hints-approval" className='expand-link' onClick={closeAndHidden}>Hints Aproval</Link>
              </div>
            </>
            
          )}
          <div className='flex-icon'>
          <button onClick={open}><img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678902359/quiz-icon_axhtw9.png" alt="" /></button>
            <Link to="/quiz" className='link-sidenav' onClick={close}>Quiz</Link>
          </div>
          <div className='flex-icon'>
            <button onClick={open}><img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678902550/quiz-icon_isu1ih.png" alt="" /></button>
            <Link to="/chat" className='link-sidenav' onClick={close}>Chat</Link>
          </div>
          <div className='flex-icon logout-flex'>
            <button onClick={open} style={{marginTop: "8px"}}><img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678905369/logout_wzzi8x.png" alt="" /></button>
            <button className='link-sidenav button-link' onClick={closeAndLogout}>Logout</button>
          </div>
        </>
      ) : (
        <>
          <Link to="/signup" onClick={close} className='link-sidenav'>Signup</Link>
          <Link to="/login" onClick={close} className='link-sidenav'>Login</Link>
        </>
      )}
    </div>
    }

    </nav>
    )
}

export default Navbar;