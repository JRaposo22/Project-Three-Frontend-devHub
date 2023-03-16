import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import hintService from '../../services/hint.service';
import './EditHint.css';


function AddHint() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);

    const navigate = useNavigate();

    const { id } = useParams();

    const getHint = async () => {
        try {
            const response = await hintService.hintDetails(id);
            setTitle(response.data.hint.title);
            setDescription(response.data.hint.description);
            setCategory(response.data.hint.category);
    
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {title, description, category};
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/api/hints/${id}`, body);
            navigate("/hints");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHint();
    }, []);
    
// delete a hint
const deleteHint = async () => {
    try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/hints/${id}`);
        navigate('/hints');
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div>
        <form className='flex-edit-hint' onSubmit={handleSubmit}>
            <div className='hint-edit-box'>
                <h1>Edit Hint</h1>
                
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={title} onChange={handleTitle}/>

                <label htmlFor="description">Description</label>
                <textarea type="text" name="description" id="description" value={description} onChange={handleDescription}>{description} </textarea>

                <label htmlFor="category">Category</label>
                <input type="text" name="category" id="category" value={category} onChange={handleCategory}/>

                <button className='edit-hint-button' type="submit">Edit Hint</button>
                <button className='delete-hint-button' onClick={deleteHint}>Delete Hint</button>

            </div>
        </form>
    </div>
  )
}

export default AddHint