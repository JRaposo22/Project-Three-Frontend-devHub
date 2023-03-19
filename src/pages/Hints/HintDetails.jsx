import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import hintService from '../../services/hint.service';

//Hint details function
function HintDetails() {
    const [hint, setHint] = useState(null);
    const [user, setUser] = useState(null);

    const { id } = useParams();

    //Get specific hint
    const getHint = async () => {
        try {
            const response = await hintService.hintDetails(id);
            setHint(response.data.hint);
            setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHint();
    }, []);

  return (
    <div>
        {hint && (
            <>
                <h1>{hint.title}</h1>
                <h3>{hint.category}</h3>
                <p>{hint.description}</p>
            </>
        )}
        {hint && user.admin == true && <Link to={`/hints/edit/${hint._id}`}>Edit Hint</Link>}

    </div>
  )
}

export default HintDetails