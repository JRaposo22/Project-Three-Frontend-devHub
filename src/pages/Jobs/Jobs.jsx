import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Job from '../../components/Job';
import jobService from '../../services/job.service';
import './Jobs.css';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);
  const [user, setUser] = useState(null)

  const getJobs = async () => {
    try {
      const response = await jobService.getAllJobs();
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
      setUser(response.data.user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className='alljobs'>
      <div>
        <h1>Jobs</h1>
     </div>
      <Link to='/jobs/add' className='linktoadd'> <p>Do you want to share? <span>Add a Job</span> </p> </Link>
        <div className='job-flex-container'>
          <div className='all-jobs-flex'>
        {jobs.map((job) => {
        return (
          job.approved &&
            <div className='linkalljob'>
              <button onClick={() => getJob(job._id)} key={job._id} className="job-button">
                <h3>{job.title}</h3>
                <h4>Company: {job.company}</h4>
              </button>
            </div>
        );
      })}
      </div>
      <div>
      <Job job={job}/>
          {job && user.admin == true && <Link className="job-edit-button" to={`/jobs/edit/${job._id}`}>Edit job</Link>} 
      </div>
         
            
          </div>
    </section>
  );
}

export default Jobs;
