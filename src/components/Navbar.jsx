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
    <nav id="mySidenav" className="sidenav">
        <Link to="/">Home</Link>
        <button onClick={open}>Open</button>
        {loggedIn ? (
        <>
          <button onClick={close}>Close</button>
          <Link to="/jobs"> <p className='link-sidenav'>Jobs</p> </Link>
          <Link to="/hints"><p className='link-sidenav'>Hints</p></Link>
          <Link to="/quiz"><p className='link-sidenav'>Quiz</p></Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup" className='link-sidenav'>Signup</Link>
          <Link to="/login" className='link-sidenav'>Login</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar;