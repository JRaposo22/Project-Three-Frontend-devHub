import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../services/user.service';
import { AuthContext } from '../context/auth.context';

function EditProfile() {
    const { user, loggedIn, logout } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const handleUsername = (e) => setUsername(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleImage = (e) => setImage(e.target.value);

    const navigate = useNavigate();


    const getUserProfile = async () => {
        try {
            const response = await userService.getUser(user._id);
            setUsername(response.data.username);
            setEmail(response.data.email);
            setImage(response.data.image);
            console.log(user)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {username, email, image};
        try {
            const response = await userService.editUser(user._id, body);
            navigate(`/profile`);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserProfile(user._id);
    }, []);

  return (
    <div>
        <h1>Edit Profile</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={handleUsername}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>

                {/* <label htmlFor="image">Image</label>
                <input type="image" name="image" id="image" value={image} onChange={handleImage}/> */}

                <button type="submit">Edit Profile</button>
            </form>
    </div>
  )
}

export default EditProfile