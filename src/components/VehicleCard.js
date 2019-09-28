import React from 'react';

const VehicleCard = (props) => {
    return (
        <div className="text-center mt-5">
            {console.log(props)}
            <div className="row">
                <img className="img-fluid rounded" style={{height: 150, width: 350}} src={props.info.src} alt="#"/>
            </div>
            <div>
                <h5 className="text-center">{props.info.firstLine}</h5>
                <h6 className="">{props.info.secondLine}</h6>
            </div>
            <div className="text-center">
                <button className="btn btn-info text-light btn-lg" style={{width: '200px'}}>{props.info.btnName}</button>
            </div>
        </div>
    );
}

export default VehicleCard;