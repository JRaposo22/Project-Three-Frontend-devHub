import React from 'react';
import { Link } from 'react-router-dom';
import quizService from '../../services/quiz.service';
import './Quiz.css'
import Typed from 'typed.js'; /* Gets the package for the typing animation */


function Quiz() {

  function MyComponent() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
  
    /* Config of the text to be animated */
    React.useEffect(() => {
      const typed = new Typed(".auto-type", {
        strings: ['General', 'JavaScript', 'CSS', 'HTML'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  }

  MyComponent();

  return (
    <div className="quizes-container">
    <img className="quiz-bg-image" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1679006122/devHub/quiz_background_rxxyie.jpg" alt="" />
      <div className="quiz-general-title">
        <h1 className='cursor'><span className="auto-type"></span> <span className='h1-title'>Quiz</span> </h1>
      </div>
     
      <div className="quiz-links-flex">
        <div className ="quiz-link-container">
          <Link className="quiz-links" to='/quiz/general'>General</Link>
          <p>Answer 10 questions that may include JavaScript, HTML or React.</p>
        </div>
        <div className ="quiz-link-container">
          <Link className="quiz-links" to='/quiz/javascript'>Javascritp</Link>
          <p>Answer 10 questions about JavaScript.</p>
        </div>
        <div className ="quiz-link-container">
          <Link className="quiz-links" to='/quiz/html'>HTML</Link>
          <p>Answer 10 questions about HTML.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Quiz