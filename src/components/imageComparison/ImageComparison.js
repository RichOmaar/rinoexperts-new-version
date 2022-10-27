import React from 'react';
import './imageComparison.css';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import Img1 from '../../assets/results/compare-1.png';
// import Img2 from '../../assets/results/compare-2.png';

const ImageComparison = ({ img1, img2}) => {
  return (
    <>
        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={img1} srcSet={img1} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={img2} srcSet={img2} alt="Image two" />}
        />
    </>
  )
}

export default ImageComparison;