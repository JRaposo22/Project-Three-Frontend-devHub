import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobService from '../services/job.service';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const response = await jobService.getAllJobs();
      console.log(response.data);
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section>
      <h1>Jobs</h1>
      {jobs.map((job) => {
        return (
          <Link to={`/jobs/${job._id}`} key={job._id}>
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
          </Link>
        );
      })}
    </section>
  );
}

export default Jobs;
