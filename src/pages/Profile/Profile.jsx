import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Link, useParams } from 'react-router-dom';
import userService from '../../services/user.service';
import jobService from '../../services/job.service';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const { id } = useParams();

  const getUserProfile = async () => {
    try {
      const response = await userService.getUser(id);
      console.log('DAAAAAAATA', response.data);
      setUserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getJobs = async () => {
    const response = await jobService.getAllJobs();
    setJobs(response.data);
    console.log(response.data);
    console.log(response.data.createdBy)
    console.log(userProfile._id)
  };

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
            <h3>{userProfile.email}</h3>
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
