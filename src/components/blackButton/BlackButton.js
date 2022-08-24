import React from 'react';
import './blackBtton.css';
import { Link } from 'react-router-dom';

const BlackButton = ({url,text}) => {
  return (
    <div>
        <Link to={url} >
            <button className="blackButton">{text}</button>
        </Link>
    </div>
  )
}

export default BlackButton;