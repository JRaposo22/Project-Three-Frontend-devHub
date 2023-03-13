import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import QuizType from './pages/QuizType';
import Jobs from './pages/Jobs';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import JobDetails from './pages/JobDetails';
import Hints from './pages/Hints';
import AddHint from './pages/AddHint';
import EditHint from './pages/EditHint';
import HintDetails from './pages/HintDetails';

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
        <Route path='/jobs/add' element={<AddJob/>} />
        <Route path='/jobs/edit/:id' element={<EditJob/>} />
        <Route path='/jobs/:id' element={<JobDetails/>} />
        <Route path='/hints' element={<Hints/>} />
        <Route path='/hints/add' element={<AddHint/>} />
        <Route path='/hints/edit/:id' element={<EditHint/>} />
        <Route path='/hints/:id' element={<HintDetails/>} />        
      </Routes>
      
    </div>
  )
}

export default App
