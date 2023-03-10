import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import quizService from '../services/quiz.service';

function Quiz() {

    const {type} = useParams();

    const getQuiz = async () => {
        try {
            const response = quizService.getRandomQuiz();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <h1>{type} Quiz</h1>
        {response.map((question) => {
            return (
                <h2>{question.question}</h2>
            )
        })}
    </div>
  )
}

export default Quiz