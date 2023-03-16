import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import hintService from '../../services/hint.service';


function AddHint() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {title, description, category};
        try {
            await hintService.createHint(body);
            navigate("/hints");
        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <div>
        <h1>Add Hint</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={title} onChange={handleTitle}/>

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" value={description} onChange={handleDescription}/>

            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={category} onChange={handleCategory}/>

            <button type="submit">Add Hint</button>
        </form>
    </div>
  )
}

export default AddHint