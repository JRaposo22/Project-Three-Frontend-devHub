import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hintService from '../services/hint.service'

function Hints() {
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

    useEffect(() => {
        getHints();
    }, []);


  return (
    <div>
        <h1>Hints</h1>
        <Link to='/hints/add'>Add a hint</Link>
        {hints && (hints.map((hint) => {
            return (
                <Link to={`/hints/${hint._id}`} key={hint._id}>
                    <h3>{hint.title}</h3>
                    <h4>{hint.category}</h4>
                </Link>
            )
        }))}
    </div>
  )
}

export default Hints;