import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSigIn from '../components/GoogleSigIn';



function Home() {
 
  return (
    <div>
      <Link to='/signup'>Signup</Link>
      <Link to='/quiz'>Quiz</Link>
      <GoogleSigIn/>
      <Link to='/chat'>Chat</Link>

      
    </div>
  )
}

export default Home;