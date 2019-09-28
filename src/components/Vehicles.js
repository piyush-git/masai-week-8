import React, { Component } from 'react';
import VehicleCard from './VehicleCard';

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeCheck: 0,
            data: [
                {
                    src: 'https://prod-suzuki.azureedge.net/media/11769/7831_suzuki_swift_sz5_2018_lf_cwc.png',
                    firstLine: 'Maruti Suzuki Swift',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Swift',
                    location: 'Koramangala',
                    carType: 3
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0',
                    firstLine: 'Maruti Baleno',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Baleno',
                    location: 'Koramangala',
                    carType: 3
                },
                {
                    src: 'https://imgd.aeplcdn.com/664x374/cw/ec/35463/Ford-Figo-Right-Front-Three-Quarter-151644.jpg?wm=0',
                    firstLine: 'Ford Figo',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Figo',
                    location: 'BTM',
                    carType: 3
                },
                {
                    src: 'https://auto.ndtvimg.com/car-images/colors/honda/city/honda-city-carnelian-red-pearl.webp',
                    firstLine: 'Honda City',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book City',
                    location: 'HSR Layout',
                    carType: 1
                },
                {
                    src: 'https://www.cstatic-images.com/car-pictures/xl/usc80hoc024d021001.png',
                    firstLine: 'Honda Civic',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Civic',
                    location: 'HSR Layout',
                    carType: 1
                },
                {
                    src: 'https://di-uploads-pod16.dealerinspire.com/josephtoyotaofcincinnati/uploads/2018/10/toyota_camry2019_grey.png',
                    firstLine: 'Toyota Camry',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Camry',
                    location: '*',
                    carType: 1
                },
                {
                    src: 'https://auto.ndtvimg.com/car-images/big/toyota/fortuner/toyota-fortuner.jpg?v=35',
                    firstLine: 'Toyota Fortuner',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book Fortuner',
                    location: '*',
                    carType: 2
                },
                {
                    src: 'https://auto.ndtvimg.com/car-images/colors/ford/ecosport/ford-ecosport-absolute-black.png',
                    firstLine: 'Ford EcoSport',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book EcoSport',
                    location: '*',
                    carType: 2
                },
                {
                    src: 'https://auto.ndtvimg.com/car-images/colors/ford/ecosport/ford-ecosport-absolute-black.png',
                    firstLine: 'Ford EcoSport',
                    secondLine: 'Price: Rs.500/day',
                    btnName: 'Book EcoSport',
                    location: '*',
                    carType: 2
                },
            ],
        }
    }

    handleOnclick = (number) => {
      this.setState((state) => {
        return state.typeCheck = number;
      });
    }
    
    render() {
        console.log(this.state.typeCheck)
        return (
            <div className="row mt-5 ">
                <div className="row col-lg-4 col-sm-3 mt-5 offset-4">
                    <button className="btn rounded bg-dark text-light ml-3 mt-2 w-25" onClick={() => this.handleOnclick(1)}>Sedan</button>
                    <button className="btn rounded bg-dark text-light ml-3 mt-2 w-25" onClick={() => this.handleOnclick(2)}>SUV</button>
                    <button className="btn rounded bg-dark text-light ml-3 mt-2 w-25" onClick={() => this.handleOnclick(3)}>Hatchback</button>
                </div>
                <div className="row col-lg-4 col-sm-3 mt-1 offset-5">
                    <button className="btn rounded bg-dark text-light ml-3 mt-2 w-25" onClick={() => this.handleOnclick(0)}>All</button>
                </div>
                <div className="row mt-5 offset-2 text-center">
                    {/* {this.state.data.filter(element => element.carType >= this.state.typeCheck).map((element, index) => {
                        return (
                            <div className="col-sm-1 col col-lg-3 mr-5 ">
                                <VehicleCard info={element} index={index}/>
                            </div>
                        );
                    })} */}
                    {this.state.data.filter(element => (this.state.typeCheck === 0 ?  element : element.carType === this.state.typeCheck)).map((element, index) => {
                        return (
                            <div key={index}  className="col-sm-1 col col-lg-3 mr-5">
                                <VehicleCard info={element} index={index}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Vehicles;