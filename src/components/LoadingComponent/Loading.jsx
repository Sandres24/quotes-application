import React from 'react'
import './Loading.css';
import loading from '../../assets/images/loading.gif';

const Loading = () => {

  document.body.style = {background: 'black'};

  return (
    <div className='loading'>
        <img src={loading} alt="Loading gif" />
    </div>
  );

}

export default Loading;
