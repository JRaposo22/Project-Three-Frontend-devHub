import './App.css'
import { Routes, Route } from 'react-router-dom';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
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
import ChatBox from './pages/ChatBox';
import JobsApproval from './pages/JobsApproval';
import HintsApproval from './pages/HintsApproval';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

function App() {
  const [user] = useAuthState(auth);

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
        <Route path='/chat' element={<ChatBox/>}/>
        <Route path='/jobs-approval' element={<JobsApproval/>} />
        <Route path='/hints-approval' element={<HintsApproval/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/edit-profile' element={<EditProfile/>} />


      </Routes>
      
    </div>
  )
}

export default App
