import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hintService from '../services/hint.service'
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

    const getHint = async (id) => {
        try {
            const response = await hintService.hintDetails(id);
            setHint(response.data.hint);
            console.log(response.data.hint);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getHints();
    }, []);


  return (
    <section>
        <h1>Hints</h1>
        <Link to='/hints/add'>Add a hint</Link>
        <div className='hint-flex-container'>
            <div>
        {hints.map((hint) => {
            return (
                hint.approved && 
                <div className='linkallhint'>
                    <button onClick={() => getHint(hint._id)} key={hint._id}>
                        <h3>{hint.title}</h3>
                        <h4>{hint.category}</h4>
                    </button>
                </div>
            )
        })}
            </div>
            {hint && (
                <div className='details-hint'>
                    <h1>{hint.title}</h1>
                    <h3>{hint.category}</h3>
                    <p>{hint.description}</p>
                </div>
            )}
        </div>
    </section>
  )
}

export default Hints;