import React from 'react';
import './progressTop.css';
// import { Link } from 'react-router-dom';

const ProgressTop = ({idStep}) => {
    React.useEffect(() => {
        document.querySelector(idStep).classList.add('step-active');
        // document.querySelector('#col-2').classList.add('col-3');
    });

  return (
    <div className="container pb-5 d-flex justify-content-center">
      <div className="progress-top-bar step-1" />
      <div className="progress-top-bar step-2" />
      <div className="progress-top-bar step-3" />
      <div className="progress-top-bar step-4" />
      <div className="progress-top-bar step-5" />
    </div>
  )
}

export default ProgressTop;