import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Link, useParams } from 'react-router-dom';
import userService from '../../services/user.service';
import axios from 'axios';
import './Profile.css';



function Profile() {
    const [userProfile, setUserProfile] = useState(null);
    const{id} = useParams();
    
    
    const getUserProfile = async () => {

        try {
            const response = await userService.getUser(id);
            console.log('DAAAAAAATA',response.data)
            setUserProfile(response.data);
        } catch (error) {
            console.log(error);
            
        }
      
    }

    useEffect(() => {
        getUserProfile();
    }, []);

  return (
    userProfile && 
        <div className='flex-profile'>
            <img src={userProfile.imageUrl} alt="" />
            <h2>{userProfile.username}</h2>
            <h3>{userProfile.email}</h3>
            <Link className='profile-edit-link' to={`/edit-profile/${id}`}>Edit profile</Link>
        </div>
        
  )
}

export default Profile