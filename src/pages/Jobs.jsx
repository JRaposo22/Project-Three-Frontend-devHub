import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobService from '../services/job.service';
import '../pages/Jobs.css';

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
    <section className='alljobs'>
      <h1>Jobs</h1>
      <Link to='/jobs/add' className='linktoadd'> <p>Do you want to share? <span>Add a Job</span> </p> </Link>
      {jobs.map((job) => {
        return (
          <div className='linkalljob'>
            <Link to={`/jobs/${job._id}`} key={job._id} className="link-decoration">
              <h3>{job.title}</h3>
              <h4>Company: {job.company}</h4>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default Jobs;
