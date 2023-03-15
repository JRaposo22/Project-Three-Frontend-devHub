import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import { Link } from 'react-router-dom';
import userService from '../services/user.service';


function Profile() {
    const [userProfile, setUserProfile] = useState(null);
    
    const getUserProfile = async () => {
        const response = await userService.getUser();
        setUserProfile(response.data);
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
            <Link to='/edit-profile'>Edit</Link>
        </div>
        
  )
}

export default Profile