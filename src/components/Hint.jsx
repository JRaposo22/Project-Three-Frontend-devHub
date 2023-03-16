import React from 'react';
import '../components/Hint.css';

function Hint(props) {
    const{hint} = props;
  return (
    <div className='hint-flex-container'>
      <div className='box-hint'>
        <h3>{hint.title}</h3>
        <h4>{hint.category}</h4>
        <p>{hint.description}</p>
      </div>
    </div>
  )
}

export default Hint;