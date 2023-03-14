import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import '../components/Navbar.css';


function Navbar() {
    const { loggedIn, user, logout } = useContext(AuthContext);

    const open = function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    const close = function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

  return (
    <nav className='navbar'>
    <button className='openbutton' onClick={open}> <img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678738877/side-icon-removebg-preview_emiped.png" alt="open-menu" /> </button>
    <div id="mySidenav" className="sidenav">
        <button className='closebutton' onClick={close}> <img src="https://res.cloudinary.com/dwgakctdp/image/upload/v1678728090/close3_mjttvh.png" alt="close window" /> </button>
        <div><Link className='home-link link-sidenav' to="/" onClick={close}>Home</Link></div>
        {loggedIn ? (
        <>
          <Link to="/jobs" onClick={close}> <p className='link-sidenav'>Jobs</p> </Link>
          <Link to="/hints" onClick={close}><p className='link-sidenav'>Hints</p></Link>
          <Link to="/quiz" onClick={close}><p className='link-sidenav'>Quiz</p></Link>
          <button className='link-sidenav logout-link' onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup" onClick={close} className='link-sidenav'>Signup</Link>
          <Link to="/login" onClick={close} className='link-sidenav'>Login</Link>
        </>
      )}
    </div>
    </nav>
    )
}

export default Navbar;