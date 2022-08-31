import React from 'react';
import './lightButton.css';
import { Link } from 'react-router-dom';

const LightButton = ({url,text}) => {
  return (
    <div className="text-center">
      <Link to={url} >
          <button className="lightButton">{text}</button>
      </Link>
    </div>
  )
}

export default LightButton;