import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobService from '../services/job.service';
import '../pages/Jobs.css';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);

  const getJobs = async () => {
    try {
      const response = await jobService.getAllJobs();
      console.log(response.data);
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getJob = async (id) => {
    try {
      const response = await jobService.jobDetails(id);
      setJob(response.data.job);
      console.log(response.data.job)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className='alljobs'>
      <h1>Jobs</h1>
      <Link to='/jobs/add' className='linktoadd'> <p>Do you want to share? <span>Add a Job</span> </p> </Link>
        <div className='job-flex-container'>
          <div>
        {jobs.map((job) => {
        return (
          job.approved &&
            <div className='linkalljob'>
              <button onClick={() => getJob(job._id)} key={job._id} className="link-decoration">
                <h3>{job.title}</h3>
                <h4>Company: {job.company}</h4>
              </button>
            </div>
        );
      })}
          </div>
              {job && (
                <div className='details-job'>
                  <h1>{job.title}</h1>
                    <div className='flex-job'>
                      <img src={job.image} alt="image of the company" />
                      <h2>{job.company}</h2>
                    </div>
                  <h3>{job.category}</h3>
                  <p>{job.description}</p>
                </div>
              )}
          </div>
    </section>
  );
}

export default Jobs;
