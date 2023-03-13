import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`);
        setTitle(response.data.title);
        setCompany(response.data.company);
        setDescription(response.data.description);
        setImage(response.data.image);
        setCategory(response.data.category);

    } catch (error) {
        console.log(error);
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {title, company, description, image, category};
    try {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`, body);
        navigate(`/jobs/${id}`);
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
        <h1>Edit Job</h1>

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

            <button type="submit">Edit Job</button>
        </form>
        <button onClick={deleteJob}>Delete Job</button>
    </div>
  )
}

export default EditJob;