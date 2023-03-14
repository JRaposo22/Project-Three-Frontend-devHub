import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from '../context/auth.context';
import { auth } from "../firebase";


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

      {loggedIn ? (
        <div className='style-both'>
          <h2>Hello, {user.username}.</h2>
        </div>
      ) : (
        <></>
      )}
      
      <div className='home-information'>
        <div className='home-container'>
        <Link to="/jobs" className='link-home-information'>Jobs</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dicta omnis ad itaque similique earum ipsa incidunt eos, provident accusantium. Necessitatibus consequuntur dolorem veritatis ab nulla fugiat quia voluptate quae!</p>
        </div>
        <div className='home-container'>
          <Link to="/hints" className='link-home-information'>Hints</Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam similique odio facere iure debitis, voluptatum placeat, aliquid veniam ut temporibus quo voluptates repellendus eveniet ducimus incidunt eum asperiores officia quaerat.</p>
        </div>
        <div className='home-container'>
          <Link to="/quiz" className='link-home-information'>Quiz</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusamus odit fuga magnam exercitationem ab enim dicta commodi ipsum! Ex quibusdam cupiditate doloribus aliquam pariatur commodi asperiores et deserunt quo.</p>
        </div>
        <div className='home-container'>
          <Link to="/chat" className='link-home-information'>Chat</Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum cum veritatis possimus rerum hic consequuntur libero dignissimos facilis et corrupti. Natus blanditiis ipsam nostrum architecto est. Autem atque placeat iure!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
