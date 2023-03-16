import React, {useEffect, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import jobService from '../../services/job.service';
import { AuthContext } from '../../context/auth.context';


function AddJob() {
const { user } = useContext(AuthContext);

const [title, setTitle] = useState("");
const [company, setCompany] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [category, setCategory] = useState("");
const [createdBy, setCreatedBy] = useState("");

const handleTitle = (e) => setTitle(e.target.value);
const handleCompany = (e) => setCompany(e.target.value);
const handleDescription = (e) => setDescription(e.target.value);
const handleImage = (e) => setImage(e.target.value);
const handleCategory = (e) => setCategory(e.target.value);

const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    /* setDescription(description.replace("\n", "<br>")); */
    console.log(description)
    const body = {title, company, description, image, category, createdBy};
    try {
        await jobService.createJob(body);
        console.log(description)
        navigate("/jobs");
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    setCreatedBy(user._id);
}, []);

    return (
    <div>
        <h1>Add Job</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={title} onChange={handleTitle}/>
            teste \n. teste
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" value={company} onChange={handleCompany}/>

            <label htmlFor="description">Description</label>
            <textarea type="text" name="description" id="description" value={description} onChange={handleDescription}>{description} </textarea>
            {/* <input type="text" name="description" id="description" value={description} onChange={handleDescription}/> */}

            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={category} onChange={handleCategory}/>

            <button type="submit">Add Job</button>
        </form>
    </div>
  )
}

export default AddJob;