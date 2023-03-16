import './App.css'
import { Routes, Route } from 'react-router-dom';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Quiz from './pages/Quiz/Quiz';
import QuizType from './pages/Quiz/QuizType';
import Jobs from './pages/Jobs/Jobs';
import AddJob from './pages/Jobs/AddJob';
import EditJob from './pages/Jobs/EditJob';
import JobDetails from './pages/Jobs/JobDetails';
import Hints from './pages/Hints/Hints';
import AddHint from './pages/Hints/AddHint';
import EditHint from './pages/Hints/EditHint';
import HintDetails from './pages/Hints/HintDetails';
import ChatBox from './pages/Chat/ChatBox';
import JobsApproval from './pages/Jobs/JobsApproval';
import HintsApproval from './pages/Hints/HintsApproval';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
    
      <Navbar />
      <Footer />
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
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/edit-profile/:id' element={<EditProfile/>} />


      </Routes>
      
    </div>
  )
}

export default App
