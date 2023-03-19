import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hintService from '../../services/hint.service';
import './AddHint.css';

//Add hint page
function AddHint() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  //Handler functions
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);

  const navigate = useNavigate();

  //Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { title, description, category };
    try {
      await hintService.createHint(body);
      navigate('/hints');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="flex-add-hint" onSubmit={handleSubmit}>
        <div className='hint-box'>
        <div className="title-edit-flex">
           <h1 className="title-edit">Add Hint</h1>
        </div>

          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitle}
          />

          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={handleCategory}
          />

          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleDescription}
          >
            {description}{' '}
          </textarea>

          <button type="submit">Add Hint</button>
        </div>
      </form>
    </div>
  );
}

export default AddHint;
