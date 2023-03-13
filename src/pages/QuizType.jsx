import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import quizService from '../services/quiz.service';
import './QuizType.css'


function QuizType() {

    const [qNumber, setQNumber] = useState(0)
    const [quiz, setQuiz] = useState([])
    const [quizEnd, setQuizEnd] = useState(false);
    const {type} = useParams();
    
    

    const getQuiz = async () => {
        
        try {
            const response = await quizService.getRandomQuiz(type);
            setQuiz(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const getAnswer = (qNumber, answer) => {

        
        quiz[qNumber].answers.map((answer, i) => {
            if(answer && (answer.toLowerCase() == quiz[qNumber].correctAnswer.toLowerCase())) document.getElementById(`answer${i}`).classList.add('right-answer');
            else document.getElementById(`answer${i}`).classList.add('wrong-answer')

        });

        if(qNumber < 10) {
        const timeOutId = setTimeout(() => {
            setQNumber(qNumber + 1);
            quiz[qNumber].answers.map((answer, i) => {
                document.getElementById(`answer${i}`).classList.remove('right-answer');
                document.getElementById(`answer${i}`).classList.remove('wrong-answer');
            });
            console.log(qNumber);
            console.log('quizend',quizEnd)
            if(qNumber == 9) {
                setQuizEnd(true);
                console.log('quizend',quizEnd)
            }

            
        }, 2000);
    }
   
    }

    useEffect(() => {
        getQuiz();
    }, [])

  return (
    <div>
        <h1>{type} Quiz</h1>
         {(quiz.length > 0) && !quizEnd && (
            <>
            <h2>{quiz[qNumber].question}</h2> 
            {quiz[qNumber].answers.map((answer, i) => {
                return <button className='quiz-answer' id={`answer${i}`} onClick={() => getAnswer(qNumber)}>{answer}</button>
            })} 
            </>
           
        )} 
            {quizEnd && <h1>FIM DO QUIZ</h1>}
            
         {quizEnd && (
            <>
                {quiz.map((question, i) => {
                   return ( <>
                    <h2>{question.question}</h2>
                    <h4>{question.correctAnswer}</h4>
                    </>
                   )
                })}
            </>
         )}  
             
    </div>
  )
}

export default QuizType