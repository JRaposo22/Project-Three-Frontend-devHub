import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hintService from '../services/hint.service'
import Hint from '../components/Hint';
import '../pages/Hints.css';


function HintsApproval() {
    const [hints, setHints] = useState([]);

    const getHints = async () => {
        try {
            const response = await hintService.getAllHints();
            console.log(response.data);
            setHints(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const approveHint = async (id) => {
        try {
          const response = await hintService.hintApprove(id);
          //setHint(response.data.hint);
          const responseHints = await hintService.getAllHints();
          setHints(responseHints.data)
          console.log(response)
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
        <div className='hint-flex-container'>
            <div>
        {hints.map((hint) => {
            return (
                !hint.approved &&(
                    <>
                    <Hint hint={hint}   />
                    <button onClick={() => approveHint(hint._id)}>Approve</button>
                    </>
                )
            )
        })}
            </div>
        </div>
    </section>
  )
}

export default HintsApproval;