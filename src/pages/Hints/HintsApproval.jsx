import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hintService from '../../services/hint.service'
import Hint from '../../components/Hint';


function HintsApproval() {
    const [hints, setHints] = useState([]);

    const getHints = async () => {
        try {
            const response = await hintService.getAllHints();
            setHints(response.data.hints);
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
    <img className="hints-background" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1679005502/devHub/hints_background_phyafs.jpg" alt="" />
        <div className="title-edit-flex">
           <h1 className="title-edit">Approve Hints</h1>
        </div>
        <Link  to='/hints' className='go-to-hints'>Go to hints</Link>
        <div className='hint-flex-container'>
            <div>
        {hints.length && hints.map((hint) => {
            return (
                hint.approved == false &&(
                    <>
                    <Hint hint={hint}   />
                    <button className='approval' onClick={() => approveHint(hint._id)}>Approve</button>
                    <hr />
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