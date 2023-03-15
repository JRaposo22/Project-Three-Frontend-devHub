import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import quizService from '../services/quiz.service';
import './QuizType.css'


function QuizType() {

    const [qNumber, setQNumber] = useState(0)
    const [quiz, setQuiz] = useState([])
    const [quizEnd, setQuizEnd] = useState(false);
    const [rightAnswers, setRightAnswers] = useState(0);
    const {type} = useParams();
    
    

    const getQuiz = async () => {
        
        try {
            const response = await quizService.getRandomQuiz(type);
            setQuiz(response.data);
            console.log(response.data)

        } catch (error) {
            console.log(error);
        }
    };

    const getAnswer = (qNumber, answer) => {

        
        quiz[qNumber].answers.map((answer, i) => {
            if(answer && (answer.toLowerCase() == quiz[qNumber].correctAnswer.toLowerCase())) document.getElementById(`answer${i}`).classList.add('right-answer');
            else if (answer) document.getElementById(`answer${i}`).classList.add('wrong-answer')

        });

        if(answer.toLowerCase() == quiz[qNumber].correctAnswer.toLowerCase()) setRightAnswers(rightAnswers + 1);

        if(qNumber < 10) {
        const timeOutId = setTimeout(() => {
            setQNumber(qNumber + 1);
            quiz[qNumber].answers.map((answer, i) => {
                if(answer){
                document.getElementById(`answer${i}`).classList.remove('right-answer');
                document.getElementById(`answer${i}`).classList.remove('wrong-answer');
                }
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
    <div className="quiz">
    <img className="quiz-bg-image" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1678908790/MERN-part-1_tikuml.png" alt="" /> 
        <h1 className="quiz-title">{type} Quiz</h1>
         {(quiz.length > 0) && !quizEnd && (
            <>
            <h2 className="question">{quiz[qNumber].question}</h2> 
            <div className="answers-container">
            {quiz[qNumber].answers.map((answer, i) => {
                return (answer && <button key={i} className='quiz-answer' id={`answer${i}`} onClick={() => getAnswer(qNumber, answer)}>{answer}</button>)
            })} 
            </div>
            </>
           
        )} 
            
            
         {quizEnd && (
            <>
            <h1 className="quiz-end-title">You answered correctly to {rightAnswers} questions</h1>
            <div className="quiz-end-container">
                {quiz.map((question, i) => {
                   return ( <div className="quiz-end-board" key={i}>
                    <h2 className="quiz-end-question">{question.question}</h2>
                    <h4 className="quiz-end-answer">{question.correctAnswer}</h4>
                    </div>
                   )
                })}
                </div>
            </>
         )}  
             
    </div>
  )
}

export default QuizType