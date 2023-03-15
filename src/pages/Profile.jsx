import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import { Link, useParams } from 'react-router-dom';
import userService from '../services/user.service';
import axios from 'axios';


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
        <div>
            <h1>Profile</h1>
            <h2>{userProfile.username}</h2>
            <h3>{userProfile.email}</h3>
            <img src={userProfile.imageUrl} alt="" />
            <Link to={`/edit-profile/${id}`}>Edit</Link>
        </div>
        
  )
}

export default Profile