import React from 'react'

function Job(props) {
    const {job} = props;
  return (
    <div>{job && (
        <div className='details-job'>
        <img src={job.image} alt="image of the company" />
          <h1>{job.title}</h1>
            <div className='flex-job'>
              
              <h2>Company : {job.company}</h2>
            </div>
          <h3>Category : {job.category}</h3>
          <p>Description : {job.description}</p>
        </div>
      )}</div>
  )
}

export default Job