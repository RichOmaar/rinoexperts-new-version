import React, { useEffect } from 'react';
import '../components/crisalix/crisalix.css';

import CrisalixBanner from '../components/crisalixBanner/CrisalixBanner';
import CrisalixProcess from '../components/crisalixProcess/CrisalixProcess';

const Crisalix = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <CrisalixBanner />
        <CrisalixProcess />
    </>
  )
}

export default Crisalix;