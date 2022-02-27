import React from 'react'
import './ButtonQuote.css';

const ButtonQuote = ({background, handleChangeQuote}) => {

  return (
    <div className='buttonquote'>
        <button
        className='shuffle-btn'
        style={{background}}
        onClick={handleChangeQuote}>
            <i className="fa-solid fa-shuffle"></i>
        </button>
    </div>
  );

}

export default ButtonQuote;
