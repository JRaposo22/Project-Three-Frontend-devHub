import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../services/user.service';
import { AuthContext } from '../context/auth.context';

function EditProfile() {
    const { user, loggedIn, logout } = useContext(AuthContext);
    const{id} = useParams();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const formData = new FormData();

    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const handleImage = async (e) => {
        const uploadData = new FormData();

        uploadData.append('imageUrl', e.target.files[0]);

        try {

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/upload`, uploadData);
            setImage(response.data.fileUrl);

            
        } catch (error) {
            console.log(error);
        }


    
    }


    const getUserProfile = async () => {
        try {
            const response = await userService.getUser(id);
            //console.log(response.data)
            setUsername(response.data.username);
            setEmail(response.data.email);
            setImage(response.data.imageUrl);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {username, email, imageUrl:image};
        try {
            const response = await userService.editUser(id, body);
            navigate(`/profile/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserProfile(id);
    }, []);

  return (
    <div>
        <h1>Edit Profile</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={handleUsername}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>

                <label htmlFor="image">Image</label>
                <img src={image} alt="" /> 
                <input type="file" name="image" id="image" onChange={handleImage}/>

                <button type="submit">Edit Profile</button>
            </form>
    </div>
  )
}

export default EditProfile