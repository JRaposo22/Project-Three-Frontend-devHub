import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';
import QuizType from './pages/QuizType';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/quiz/general' element={<QuizType/>} />
        <Route path='/quiz' element={<Quiz/>} />
        
      </Routes>
      
    </div>
  )
}

export default App
