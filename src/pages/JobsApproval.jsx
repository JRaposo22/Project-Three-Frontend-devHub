import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobService from '../services/job.service';
import Job from '../components/Job';
import '../pages/Jobs.css';

function JobsApproval() {
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
        <div className='job-flex-container'>
          <div>
        {jobs.map((job) => {
        return (
          !job.approved &&
          <Job job={job}/>
        );
      })}
          </div>
              
          </div>
    </section>
  );
}

export default JobsApproval;
