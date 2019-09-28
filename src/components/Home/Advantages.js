import React, { Component } from 'react';
import AdvantagesCard from './AdvantagesCard';

class Advantages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    src: './carLogo.svg',
                    firstLine: 'Fuel Cost Included',
                    secondLine: 'Don\'t worry about mileage! All fuel costs are included. If you refill fuel, we\'ll pay you back!',
                },
                {
                    src: './carLogo.svg',
                    firstLine: 'No Hidden Charges',
                    secondLine: 'Our prices include taxes and insurance. What you see is what you really pay!',
                },
                {
                    src: './carLogo.svg',
                    firstLine: 'Flexi Pricing Packages',
                    secondLine: 'One size never fits all! Choose a balance of time and kilometers that works best for you.',
                },
                {
                    src: './carLogo.svg',
                    firstLine: 'Go Anywhere',
                    secondLine: 'Our cars have all-India permits. Just remember to pay state tolls and entry taxes.',
                },
                {
                    src: './carLogo.svg',
                    firstLine: '24x7 Roadside Assistance',
                    secondLine: 'We have round-the-clock, pan India partners. Help is never far away from you.',
                },
                {
                    src: './carLogo.svg',
                    firstLine: 'Damage Insurance',
                    secondLine: 'All your bookings include damage insurance! Drive safe, but don’t worry!',
                },
            ],
        }
    }
    
    render() {
        return (
            <div className="text-center">
                <h1>The PROPER ADVANTAGE</h1>
                <h3>We simplified car rentals, so you can focus on what's important to you.</h3>
                <div className="row offset-lg-1 mt-5">
                    {this.state.data.map((element, index) => {
                        return (
                            <div className="col-3 mr-5 ">
                                <AdvantagesCard info={element} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Advantages;