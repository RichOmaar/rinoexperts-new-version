import React from 'react';
import '../components/crisalix/crisalix.css';

import CrisalixBanner from '../components/crisalixBanner/CrisalixBanner';
import CrisalixProcess from '../components/crisalixProcess/CrisalixProcess';

const Crisalix = () => {
  return (
    <>
        <CrisalixBanner />
        <CrisalixProcess />
    </>
  )
}

export default Crisalix;