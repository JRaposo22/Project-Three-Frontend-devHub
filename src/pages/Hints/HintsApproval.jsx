import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hintService from '../../services/hint.service'
import Hint from '../../components/Hint';

//Aprove a hint
function HintsApproval() {
    const [hints, setHints] = useState([]);

    //Get all the hints that are not approved
    const getHints = async () => {
        try {
            const response = await hintService.getAllHints();
            setHints(response.data.hints);
        } catch (error) {
            console.log(error);
        }
    }

    //Approve the hint
    const approveHint = async (id) => {
        try {
          const response = await hintService.hintApprove(id);
          const responseHints = await hintService.getAllHints();
          setHints(responseHints.data)
        } catch (error) {
            console.log(error);
        }
      }

      //Fetch all hints
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
            {/* only shows the hints that are not approved */}
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