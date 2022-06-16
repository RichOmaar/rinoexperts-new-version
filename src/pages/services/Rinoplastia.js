import React from 'react';
import MainImage from '../../assets/img/servicios-banner-long.jpg';

const Rinoplastia = () => {
  return (
    <div className="container-fluid black-background">
        <div className='col-12'>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={MainImage} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        <div className="container rinoplastia-container py-3">
            <div className="row">
                <div className="col-12">
                    <h1>RINOPLASTIA</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rinoplastia;