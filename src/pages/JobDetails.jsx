import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import jobService from '../services/job.service';

function JobDetails() {
    const [job, setJob] = useState(null);

    const { id } = useParams();

    const getJob = async () => {
        try {
            const response = await jobService.jobDetails(id);
            setJob(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getJob();
    }, []);

  return (
    <div>
        {job && (
            <>
            <h1>{job.title}</h1>
            <h2>{job.company}</h2>
            <h3>{job.category}</h3>
            <img src={job.image} alt="image of the company" />
            <p>{job.description}</p>

            </>
        )}
        {job && <Link to={`/jobs/edit/${job._id}`}>Edit job</Link>}
    </div>
    
  )
}

export default JobDetails