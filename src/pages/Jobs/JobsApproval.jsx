import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobService from '../../services/job.service';
import Job from '../../components/Job';
import './Jobs.css';
import { useNavigate } from 'react-router-dom';

//Page for the approval of jobs
function JobsApproval() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);

  const navigate = useNavigate();

  //Get all jobs
  const getJobs = async () => {
    try {
      const response = await jobService.getAllJobs();
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Get the specific job
  const getJob = async (id) => {
    try {
      const response = await jobService.jobDetails(id);
      setJob(response.data.job);
    } catch (error) {
      console.log(error)
    }
  }

  //Approve a job
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

  //Fetch the jobs
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className='alljobs'>
     <img className="jobs-background" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1679004569/devHub/jobs_background_i0hrk0.jpg" alt="" />
     <div className="title-edit-flex">
        <h1 className='title-edit'>Jobs to approve</h1>
      </div>
    
      
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
      {/* Only shows jobs that are not approved */}
      <Job job={job}/>
          {job && !job.approved && <button className="job-approve-button" onClick={() => approveJob(job._id)}>Approve</button>} 
      </div>
         
            
          </div>
    </section>
  );
}

export default JobsApproval;
