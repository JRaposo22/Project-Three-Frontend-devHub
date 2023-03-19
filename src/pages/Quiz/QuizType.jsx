import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import quizService from '../../services/quiz.service';
import './QuizType.css'

//Page to show the specific quiz
function QuizType() {

    const [qNumber, setQNumber] = useState(0)
    const [quiz, setQuiz] = useState([])
    const [quizEnd, setQuizEnd] = useState(false);
    const [rightAnswers, setRightAnswers] = useState(0);
    const {type} = useParams();
    
    //Get the quiz
    const getQuiz = async () => {
        try {
            const response = await quizService.getRandomQuiz(type);
            setQuiz(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getAnswer = (qNumber, answer) => {
        //Compares all the possible answers with the right answer
        quiz[qNumber].answers.map((answer, i) => {
            /* If the anser is right, adds right-answer class to animate it green, else adds wrong-answer class to animate it red */
            if(answer && (answer.toLowerCase() == quiz[qNumber].correctAnswer.toLowerCase())) document.getElementById(`answer${i}`).classList.add('right-answer');
            else if (answer) document.getElementById(`answer${i}`).classList.add('wrong-answer')
        });

        //Sets the number of right answer gave by the user
        if(answer.toLowerCase() == quiz[qNumber].correctAnswer.toLowerCase()) setRightAnswers(rightAnswers + 1);

        //If the number of the question is not the final question of the quiz
        if(qNumber < 10) {
        const timeOutId = setTimeout(() => {
            //Sets the number of the quiz answer to move to the next one
            setQNumber(qNumber + 1);
            //Resets the color animations of the answers
            quiz[qNumber].answers.map((answer, i) => {
                if(answer){
                document.getElementById(`answer${i}`).classList.remove('right-answer');
                document.getElementById(`answer${i}`).classList.remove('wrong-answer');
                }
            });
            //If the quiz gets to the end,set variable to true
            if(qNumber == 9) {
                setQuizEnd(true);
            }         
        }, 2000);
    } 
    }
    //Fetch the quiz
    useEffect(() => {
        getQuiz();
    }, [])

  return (
    <div className="quiz">
    <img className="quiz-bg-image" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1679006122/devHub/quiz_background_rxxyie.jpg" alt="" /> 
        <h1 className="quiz-title title-edit">{type} Quiz</h1>
        {/* Shows the question */}
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
            
         {/* If the quiz reaches the end, shows the summary of the questions, the right answers and the number of user's correct answers */}   
         {quizEnd && (
            <>
            <h1 className="quiz-end-title">You answered correctly to {rightAnswers} questions</h1>
            <div className="quiz-end-container">
                {quiz.map((question, i) => {
                   return ( <div className="quiz-end-board" key={i}>
                    <h2 className="quiz-end-question">{question.question}</h2>
                    <h4 className="quiz-end-answer">Right answer : {question.correctAnswer}</h4>
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