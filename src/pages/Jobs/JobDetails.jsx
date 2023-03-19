import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import jobService from '../../services/job.service';
import Job from '../../components/Job';
import './JobDetails.css';

//Function to get a job details
function JobDetails() {
    const [job, setJob] = useState(null);
    const [user, setUser] = useState(null)

    const { id } = useParams();

    const getJob = async () => {
        try {
            const response = await jobService.jobDetails(id);
            //Set the job details on the useState variables
            setJob(response.data.job);
            setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    };

    //Fetch the specific job
    useEffect(() => {
        getJob();
    }, []);

  return (
    <> 
        <Job job={job}/>
        {job && user.admin == true && <Link to={`/jobs/edit/${job._id}`}>Edit job</Link>} {/* Only shows it the user is admin */}
    </>
    
  )
}

export default JobDetails