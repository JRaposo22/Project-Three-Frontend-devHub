import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Link, useParams } from 'react-router-dom';
import userService from '../../services/user.service';
import jobService from '../../services/job.service';
import axios from 'axios';
import './Profile.css';

//User's profile page
function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const { id } = useParams();

  //Get the profile
  const getUserProfile = async () => {
    try {
      const response = await userService.getUser(id);
      setUserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Get the jobs
  const getJobs = async () => {
    const response = await jobService.getAllJobs();
    setJobs(response.data);
  };

  //Fetch user info and jobs
  useEffect(() => {
    getUserProfile();
    getJobs();
  }, []);

  return (
    userProfile && (
      <>
        <section className="box-profile-flex">
          <div className="flex-profile">
            <img src={userProfile.imageUrl} alt="" />
            <h2>{userProfile.username}</h2>
            <h3 style={{padding:"10px"}}>✉️ {userProfile.email}</h3>
            <Link className="profile-edit-link" to={`/edit-profile/${id}`}>
              Edit profile
            </Link>
          </div>
        </section>
        <section>
          {jobs
            .filter((job) => job.createdBy == userProfile._id)
            .map((filteredJob) => {
              return (
                <div>
                  <img src={filteredJob.image} alt="image of the company" />
                  <h1>{filteredJob.title}</h1>
                  <div>
                    <h2>Company : {filteredJob.company}</h2>
                  </div>
                  <h3>Category : {filteredJob.category}</h3>
                  <p>Description : {filteredJob.description}</p>
                </div>
              );
            })}
        </section>
      </>
    )
  );
}

export default Profile;
