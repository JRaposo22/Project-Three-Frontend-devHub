import React from 'react'

function Hint(props) {
    const{hint} = props;
  return (
    <div>
    <h3>{hint.title}</h3>
    <h4>{hint.category}</h4>
    <p>{hint.description}</p>
    </div>
  )
}

export default Hint