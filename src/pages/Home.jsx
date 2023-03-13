import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSigIn from '../components/GoogleSigIn';


function Home() {
 
  return (
    <div>
<<<<<<< HEAD
      <h1>Hello</h1>
=======
      <Link to='/signup'>Signup</Link>
      <Link to='/quiz'>Quiz</Link>
      <GoogleSigIn/>
      <Link to='/chat'>Chat</Link>

      
>>>>>>> dev
    </div>
  );
}

export default Home;
