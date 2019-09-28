import React, { Component } from 'react';
import VehicleCard from './VehicleCard';

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    src: 'https://prod-suzuki.azureedge.net/media/11769/7831_suzuki_swift_sz5_2018_lf_cwc.png',
                    firstLine: 'Maruti Suzuki Swift',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Swift',
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0',
                    firstLine: 'Maruti Baleno',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Baleno',
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/35463/Ford-Figo-Right-Front-Three-Quarter-151644.jpg?wm=0',
                    firstLine: 'Ford Figo',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Figo',
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/35463/Ford-Figo-Right-Front-Three-Quarter-151644.jpg?wm=0',
                    firstLine: 'Ford Figo',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Figo',
                },
            ],
        }
    }
    
    render() {
        return (
            <div className="row offset-lg-1 mt-5">
                {this.state.data.map((element, index) => {
                    return (
                        <div className="col mr-5 ">
                            <VehicleCard info={element}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Vehicles;