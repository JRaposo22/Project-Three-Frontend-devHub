import React from 'react'

function Job(props) {
    const {job} = props;
  return (
    <div>{job && (
        <div className='details-job'>
          <h1>{job.title}</h1>
            <div className='flex-job'>
              <img src={job.image} alt="image of the company" />
              <h2>{job.company}</h2>
            </div>
          <h3>{job.category}</h3>
          <p>{job.description}</p>
        </div>
      )}</div>
  )
}

export default Job