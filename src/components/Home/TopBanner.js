import React from 'react';
import './Home.css';
const TopBanner = () => {
    return (
      <div >
          <div id="topImage">
            <img id="topImage" className="row mt-5" src="./topImage.png" alt="#" />   
          </div>
        <div className="text-center">
            <h1 className="">DRIVE IN THE CITY & OUTSTATION</h1>
            <h3 className="">Self Drive Car Rental in Bangalore</h3>
        </div>
        
      </div>
    );
  };

export default TopBanner;