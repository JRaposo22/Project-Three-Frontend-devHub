import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import jobService from '../services/job.service';
import Job from '../components/Job';
import '../pages/JobDetails.css';

function JobDetails() {
    const [job, setJob] = useState(null);
    const [user, setUser] = useState(null)

    const { id } = useParams();

    const getJob = async () => {
        try {
            const response = await jobService.jobDetails(id);
            console.log(response.data)
            setJob(response.data.job);
            setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getJob();
    }, []);

  return (
    <>
        <Job job={job}/>
        {job && user.admin == true && <Link to={`/jobs/edit/${job._id}`}>Edit job</Link>}
    </>
    
  )
}

export default JobDetails