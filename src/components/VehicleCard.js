import React from 'react';
import { Route, Link } from "react-router-dom";
import Booking from './Home/Booking'

const VehicleCard = (props) => {
    // console.log(props.index)
    return (
        <div className="text-center mt-5">
            <div className="row">
                <img className="img-fluid rounded" style={{height: 150, width: 350}} src={props.info.src} alt="#"/>
            </div>
            <div>
                <h5 className="text-center">{props.info.firstLine}</h5>
                <h6 className="">{props.info.secondLine}</h6>
                <h6 className="">{props.info.location}</h6>
            </div>
            <div className="text-center">
                <Link className="text-light" to="/booking">
                    <button className="btn btn-info text-light btn-lg" style={{width: '200px'}}>
                        {props.info.btnName}
                    </button>
                </Link>
                <Route path="/home/booking/" component={Booking}></Route>
            </div>
        </div>
    );
}

export default VehicleCard;