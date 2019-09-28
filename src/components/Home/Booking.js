import React, { Component } from 'react';

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1,
        };
    }
    render() {
        return (
            <div className="row mt-5">
                <h1 className="mt-5 col">Booking Page is visible Now</h1>
            </div>
        );
    }
}

// const Booking = () => {
//     return (
//         <div>
//             <h1>hello</h1>
//         </div>
//     );
// }

export default Booking;