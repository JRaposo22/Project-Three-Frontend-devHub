import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/user.service';
import { AuthContext } from '../../context/auth.context';
import './EditProfile.css';

//Edit profile page
function EditProfile() {
    const { user, loggedIn, logout } = useContext(AuthContext);
    const{id} = useParams();

    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate();

    //Handle username
    const handleUsername = (e) => setUsername(e.target.value);

    //Handle image
    const handleImage = async (e) => {
        //Create a new form data to put all the image info
        const uploadData = new FormData();
        uploadData.append('imageUrl', e.target.files[0]);
        try {
            //Send the upload request to the backend
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/upload`, uploadData);
            //The backend responds with the cloudinary image url
            setImage(response.data.fileUrl);   
        } catch (error) {
            console.log(error);
        }
    }

    //Get the logged in user profile
    const getUserProfile = async () => {
        try {
            const response = await userService.getUser(id);
            setUsername(response.data.username);
            setImage(response.data.imageUrl);
        } catch (error) {
            console.log(error);
        }
    }

    //Handle submit
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

    //Fetch the user profile
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
                    <div className='input-flex'>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" value={username} onChange={handleUsername}/>
                    </div>
                    <hr />
                    
                    <button type="submit">Edit Profile</button>
                </div>
                
                
            </form>
    </div>
  )
}

export default EditProfile