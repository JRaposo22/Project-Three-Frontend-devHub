import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/user.service';
import { AuthContext } from '../../context/auth.context';
import './EditProfile.css';

function EditProfile() {
    const { user, loggedIn, logout } = useContext(AuthContext);
    const{id} = useParams();

    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const formData = new FormData();

    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value);

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
            setImage(response.data.imageUrl);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {username, imageUrl:image};
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
            <form className='flex-edit-profile' onSubmit={handleSubmit}>
                <div className='profileform-box'>
                    <h1>Edit Profile</h1>

                    <label htmlFor="image"></label>
                    <img src={image} alt="" /> 
                    <input type="file" name="image" id="image" onChange={handleImage}/>
                
                    <label htmlFor="username">Change username:</label>
                    <input type="text" name="username" id="username" value={username} onChange={handleUsername}/>
                    
                    <button type="submit">Edit Profile</button>
                </div>
                
                
            </form>
    </div>
  )
}

export default EditProfile