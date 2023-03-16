import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import jobService from '../../services/job.service';
import './EditJob.css';

function EditJob() {
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

const { id } = useParams();

const getJob = async () => {
    try {
        const response = await jobService.jobDetails(id);
        console.log(response.data)
        setTitle(response.data.job.title);
        setCompany(response.data.job.company);
        setDescription(response.data.job.description);
        setImage(response.data.job.image);
        setCategory(response.data.job.category);

    } catch (error) {
        console.log(error);
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {title, company, description, image, category};
    try {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`, body);
        navigate(`/jobs`);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getJob();
}, []);

// delete a job
const deleteJob = async () => {
    try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`);
        navigate('/jobs');
    } catch (error) {
        console.log(error);
    }
}

    return (
    <div>
        <form className='flex-edit-job' onSubmit={handleSubmit}>
            <div className='job-edit-box'>
              
                    	<h1>Edit Job</h1>
               

                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={title} onChange={handleTitle}/>

                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" value={company} onChange={handleCompany}/>

                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" value={description} onChange={handleDescription}/>

                <label htmlFor="category">Category</label>
                <input type="text" name="category" id="category" value={category} onChange={handleCategory}/>

                <button className='edit-job-button' type="submit">Edit Job</button>
                <button className='delete-job-button' onClick={deleteJob}>Delete Job</button>
            </div>
        </form>
        
    </div>
  )
}

export default EditJob;