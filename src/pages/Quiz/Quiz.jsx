import React from 'react';
import { Link } from 'react-router-dom';
import quizService from '../../services/quiz.service';
import './Quiz.css'
import Typed from 'typed.js';


function Quiz() {

  function MyComponent() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
  
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
      <div>
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