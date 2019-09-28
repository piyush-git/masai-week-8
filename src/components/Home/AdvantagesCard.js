import React from 'react';

const AdvantagesCard = (props) => {
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
        </div>
    );
}

export default AdvantagesCard;
