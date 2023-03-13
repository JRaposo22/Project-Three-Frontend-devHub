import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jobService from '../services/job.service';


function AddJob() {
const [title, setTitle] = useState("");
const [company, setCompany] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [category, setCategory] = useState("");

const handleTitle = (e) => setTitle(e.target.value);
const handleCompany = (e) => setCompany(e.target.value);
const handleDescription = (e) => setDescription(e.target.value);
const handleImage = (e) => setImage(e.target.value);
const handleCategory = (e) => setCategory(e.target.value);

const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {title, company, description, image, category};
    try {
        await jobService.createJob(body);
        navigate("/jobs");
    } catch (error) {
        console.log(error);
    }
}

    return (
    <div>
        <h1>Add Job</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={title} onChange={handleTitle}/>

            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" value={company} onChange={handleCompany}/>

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" value={description} onChange={handleDescription}/>

            <label htmlFor="image">Image</label>
            <input type="image" name="image" id="image" value={image} onChange={handleImage}/>

            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={category} onChange={handleCategory}/>

        </form>
    </div>
  )
}

export default AddJob;