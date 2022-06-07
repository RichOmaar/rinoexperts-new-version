import React from 'react';
import './mainResume.css';

const MainResume = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src="https://via.placeholder.com/630x840" className="img-fluid" alt="Imagen del Doctor Jorge"/>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center py-sm-4">
                <div className="row">
                    <div className="col-12 dr-name-container">
                        <h2 className="d-block text-white-color">Dr. Jorge Ortiz</h2>
                    </div>
                    <div className="col-12">
                        <p className="d-block text-white-color">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainResume;