import React from 'react';
import { Link } from 'react-router-dom';
import quizService from '../../services/quiz.service';
import './Quiz.css'

function Quiz() {
  return (
    <div className="quizes-container"> 
      <h1 className="quizes-title">Chose a quiz!</h1>
      <div className="quiz-links-flex">
        <div className ="quiz-link-container">
          <Link className="quiz-links" to='/quiz/general'>General Quiz</Link>
          <p>Answer 10 questions that may include JavaScript, HTML or React</p>
        </div>
        <div className ="quiz-link-container">
          <Link className="quiz-links" to='/quiz/javascript'>Javascritp Quiz</Link>
          <p>Answer 10 questions about JavaScript</p>
        </div>
        <div className ="quiz-link-container">
          <Link className="quiz-links" to='/quiz/html'>HTML Quiz</Link>
          <p>Answer 10 questions about HTML</p>
        </div>
        
      </div>
    </div>
  )
}

export default Quiz