import React from 'react';
import './logoHeader.css';
// import logo from '../../assets/icons/rinoexperts.svg';
import RinoexpertsLogo from '../../assets/img/logo.png';

const LogoHeader = () => {

  return (
    <div className="logo-header p-5 d-flex justify-content-center">
        <img src={RinoexpertsLogo} className="img-fluid" alt="Rinoexperts" />
    </div>
  )
}

export default LogoHeader;