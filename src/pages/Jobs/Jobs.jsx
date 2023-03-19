import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Job from '../../components/Job';
import jobService from '../../services/job.service';
import './Jobs.css';

//Page that shows the jobs
function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);
  const [user, setUser] = useState(null)

  //Get all jobs
  const getJobs = async () => {
    try {
      const response = await jobService.getAllJobs();
      setJobs(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  //Get the chosen job to show it on the side of all jobs
  const getJob = async (id) => {
    try {
      const response = await jobService.jobDetails(id);
      setJob(response.data.job);
      setUser(response.data.user)
    } catch (error) {
      console.log(error)
    }
  }

  //Fetch all jobs
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className='alljobs'>
    <img className="jobs-background" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1679004569/devHub/jobs_background_i0hrk0.jpg" alt="" />
    <div className="title-edit-flex">
    <h1 className="title-edit">Jobs</h1>
    </div>
        
     
   
      
      <Link to='/jobs/add' className='linktoadd'> <p>Do you want to share? <span>Add a Job</span> </p> </Link>
        <div className='job-flex-container'>
          <div className='all-jobs-flex'>
          {/* Show all the jobs */}
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
      {/* Show the job that the user clicked on */}
      <Job job={job}/>
          {job && user.admin == true && <Link className="job-edit-button" to={`/jobs/edit/${job._id}`}>Edit job</Link>} 
      </div>
         
            
          </div>
    </section>
  );
}

export default Jobs;
