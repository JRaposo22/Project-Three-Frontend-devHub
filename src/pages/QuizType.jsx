import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import quizService from '../services/quiz.service';

function QuizType() {

    const [qNumber, setQNumber] = useState(0)
    const [quiz, setQuiz] = useState([])
    const {type} = useParams();
    console.log(type)
    console.log('TESTE')

    const getQuiz = async () => {
        
        try {
            const response = await quizService.getRandomQuiz(type);
            setQuiz(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getQuiz();
    }, [])

  return (
    <div>
        <h1>{type} Quiz</h1>
         {(quiz.length > 0) && (
            <>
            <h2>{quiz[qNumber].question}</h2> 
            {quiz[qNumber].answers.map((answer, i) => {
                return <h4 key={i}>{answer}</h4>
            })} 
            </>
           
        )} 
        <button onClick={() => {setQNumber(qNumber + 1)}}>Next</button>      
    </div>
  )
}

export default QuizType