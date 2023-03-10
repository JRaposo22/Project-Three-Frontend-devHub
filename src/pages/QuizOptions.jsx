import React from 'react';
import { Link } from 'react-router-dom';
import quizService from '../services/quiz.service';

function Quiz() {
  return (
    <div> 
    <h1>All quizes</h1>
      <Link to={`/quiz/general`}>General Quiz</Link>
      <Link to={`/quiz/javscript`}>Javascritp Quiz</Link>
      <Link to={`/quiz/html`}>HTML Quiz</Link>
    </div>
  )
}

export default Quiz