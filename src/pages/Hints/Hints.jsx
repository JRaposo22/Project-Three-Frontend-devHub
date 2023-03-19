import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hintService from '../../services/hint.service'
import Hint from '../../components/Hint';

//Get all hints function
function Hints() {
    const [hints, setHints] = useState([]);
    const [hint, setHint] = useState(null);
    const [user, setUser] = useState(null);

    //Get hints from backend
    const getHints = async () => {
        try {
            const response = await hintService.getAllHints();
            setHints(response.data.hints);
            setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    //Fetch hints
    useEffect(() => {
        getHints();
    }, []);


  return (
    <section className='allhints'>
    <img className="hints-background" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1679005502/devHub/hints_background_phyafs.jpg" alt="" />
        <div className="title-edit-flex">
           <h1 className="title-edit">Hints</h1>
        </div>
        <Link to='/hints/add' className='linktoadd'><p>Do you want to share? <span>Add a Hint</span> </p></Link>
        <div className='hint-flex-container'>
        {hints.map((hint) => {
            return (
                hint.approved && (
                    <>
                <Hint hint={hint}/>
                {hint && user.admin == true && <Link className='edit-hint' to={`/hints/edit/${hint._id}`}>Edit Hint</Link>}
                <hr className='hr-hint'/>
                </>
                )
            )
        })}
        </div>
    </section>
  )
}

export default Hints;