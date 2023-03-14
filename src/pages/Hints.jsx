import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hintService from '../services/hint.service'
import Hint from '../components/Hint';
import '../pages/Hints.css';


function Hints() {
    const [hints, setHints] = useState([]);
    const [hint, setHint] = useState(null);

    const getHints = async () => {
        try {
            const response = await hintService.getAllHints();
            console.log(response.data);
            setHints(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHints();
    }, []);


  return (
    <section className='allhints'>
        <h1>Hints</h1>
        <Link to='/hints/add' className='linktoadd'><p>Do you want to share? <span>Add a Hint</span> </p></Link>
        <div className='hint-flex-container'>
            <div>
        {hints.map((hint) => {
            return (
                hint.approved && 
                <Hint hint={hint}/>
            )
        })}
            </div>
        </div>
    </section>
  )
}

export default Hints;