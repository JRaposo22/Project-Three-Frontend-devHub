import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <Link to='/signup'>Signup</Link>
      <Link to='/quiz'>Quiz</Link>
    </div>
  )
}

export default Home;