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
                    location: 'Koramangala'
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0',
                    firstLine: 'Maruti Baleno',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Baleno',
                    location: 'Koramangala'
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/35463/Ford-Figo-Right-Front-Three-Quarter-151644.jpg?wm=0',
                    firstLine: 'Ford Figo',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Figo',
                    location: 'BTM'
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/35463/Ford-Figo-Right-Front-Three-Quarter-151644.jpg?wm=0',
                    firstLine: 'Ford Figo',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Figo',
                    location: 'HSR Layout'
                },
                {
                    src: 'https://prod-suzuki.azureedge.net/media/11769/7831_suzuki_swift_sz5_2018_lf_cwc.png',
                    firstLine: 'Maruti Suzuki Swift',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Swift',
                    location: 'HSR Layout'
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0',
                    firstLine: 'Maruti Baleno',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Baleno',
                    location: '*'
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/35463/Ford-Figo-Right-Front-Three-Quarter-151644.jpg?wm=0',
                    firstLine: 'Ford Figo',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Figo',
                    location: '*'
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/35463/Ford-Figo-Right-Front-Three-Quarter-151644.jpg?wm=0',
                    firstLine: 'Ford Figo',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Figo',
                    location: '*'
                },
            ],
        }
    }
    
    render() {
        return (
            <div className="row mt-5 offset-1 text-center">
                {this.state.data.map((element, index) => {
                    return (
                        <div className="col-3 mr-5 ">
                            <VehicleCard info={element}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Vehicles;