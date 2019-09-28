import React from 'react';
import './Home.css';

const Carousel = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide mt-5 text-center" data-ride="carousel">
            
            <div className="carousel-inner ml-5">
                <div className="mb-5">
                    <h1>A CAR FOR EVERY NEED</h1>
                    <h3>We have a range of cars, so something will perfectly fit your trip</h3>
                </div>
                <div className="carousel-item active" data-interval="5000">
                    <div className="d-flex flex-row">
                        <img src='https://imgd.aeplcdn.com/664x374/cw/ec/35463/Ford-Figo-Right-Front-Three-Quarter-151644.jpg?wm=0' className="d-block w-25 col-5 carouselImg" alt="..." />
                        <div className="col-5">
                            <h1>HATCHBACK</h1>
                            <h3>Price Starting at ₹ 70/hr (Fuel Free)</h3>
                            <h6>CARS AVAILABLE: FORD FIGO, MARUTI SWIFT, BALENO, MAHINDRA KUV 100, MARUTI RITZ, HYUNDAI I20 ELITE, JAZZ SMT 1.5 IDTEC, THE RAPTOR, GRAND i10</h6>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-interval="2000">
                    <div className="d-flex flex-row">
                        <img src='https://auto.ndtvimg.com/car-images/colors/ford/ecosport/ford-ecosport-absolute-black.png' className="d-block w-25 col-6 carouselImg" alt="..." />
                        <div className="col-5">
                            <h1>SUV</h1>
                            <h3>Price Starting at ₹ 100/hr (Fuel Free)</h3>
                            <h6>CARS AVAILABLE: FORD ECOSPORT, MAHINDRA SCORPIO, MAHINDRA XUV, FORD ENDEAVOUR, HYUNDAI CRETA, TOYOTA FORTUNER</h6>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex flex-row">
                        <img src='https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/profile/6b6cc7b58544ce9d560829f482fbd77916ce3ba2.png?1501503621' className="d-block w-25 col-6 carouselImg" alt="..." />
                        <div className="col-5">
                            <h1>SEDAN</h1>
                            <h3>Price Starting at ₹ 95/hr (Fuel Free)</h3>
                            <h6>CARS AVAILABLE: HONDA AMAZE, HONDA CITY, MARUTI CIAZ, FORD ASPIRE, MARUTI CIAZ MT</h6>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;