import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobService from '../../services/job.service';
import Job from '../../components/Job';
import './Jobs.css';
import { useNavigate } from 'react-router-dom';

function JobsApproval() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);

  const navigate = useNavigate();

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

  const approveJob = async (id) => {
    try {
      const response = await jobService.jobApprove(id);
      setJob(response.data.job);
      const responseJobs = await jobService.getAllJobs();
      setJobs(responseJobs.data.jobs);
      navigate('/jobs-approval')
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className='alljobs'>
      
        <h1>Jobs to approve</h1>
     
        <div className='job-flex-container'>
          <div className='all-jobs-flex'>
        {jobs && jobs.map((job) => {
        return (
          job.approved == false &&
            <div className='linkalljob'key={job._id}>
              <button onClick={() => getJob(job._id)} className="job-button">
                <h3>{job.title}</h3>
                <h4>Company: {job.company}</h4>
              </button>
            </div>
        );
      })}
      </div>
      <div>
      <Job job={job}/>
          {job && !job.approved && <button className="job-approve-button" onClick={() => approveJob(job._id)}>Approve</button>} 
      </div>
         
            
          </div>
    </section>
  );
}

export default JobsApproval;
