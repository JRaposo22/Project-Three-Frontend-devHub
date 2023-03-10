import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';


function Navbar() {
    const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav>
        <Link to="/">Home</Link>
        {loggedIn ? (
        <>
          <span>Hello {user.username}</span>
          <Link to="/jobs">Jobs</Link>
          <Link to="/hints">Hints</Link>
          <Link to="/quiz">Quiz</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar;