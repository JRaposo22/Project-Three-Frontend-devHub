import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import QuizType from './pages/QuizType';
import Jobs from './pages/Jobs';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/quiz/:type' element={<QuizType/>} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/jobs' element={<Jobs/>} />
        
      </Routes>
      
    </div>
  )
}

export default App
