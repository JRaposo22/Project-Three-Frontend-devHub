import React from 'react'

function Job(props) {
    const {job} = props;
  return (
    <div>{job && (
        <div className='details-job'>
          <h1>{job.title}</h1>
            <div className='flex-job'>
              
              <h2>Company : {job.company}</h2>
            </div>
          
          <hr className="ruler" />
          <div className="job-info-flex">
             <img className="jobs-icons" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1678984984/devHub/clock_icon_cdgvrd.png" alt="" />
             <p className="job-created">{job.updatedAt.substring(0, job.updatedAt.indexOf('T'))}</p> 
             <img className="jobs-icons" src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1678985276/devHub/suitcase_small_icon_hgpoot.png" alt="" />
             <p>{job.category}</p>
          </div>
          
          <p>Description : {job.description}</p>
          
        </div>
      )}</div>
  )
}

export default Job