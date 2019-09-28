import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import '../App.css'
import Home from './Home/Home';
import Vehicles from './Vehicles';
import Booking from './Home/Booking';
// import About from './About';
// import FAQ from './FAQ';
// import Contact from './Contact';
// import Products from './products/Products';

class Navbar extends Component {
  render() {
    return (
        <React.Fragment>
                  
          <nav className="navbar navbar-light bg-dark fixed-top">
            <Link to="/">
              <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/Proper_Logo_280x_2x_240x240_6b887461-1064-47c5-a958-b6e5a5726d97_280x@2x.png?v=1532311943" alt="#" />
            </Link>
            <button className="btn btn-info ml-auto mr-5">
              <Link className="nav-link text-light" to="/vehicles">Our Cars</Link>
            </button>
            <button className="btn btn-info mr-5">
              <Link className="nav-link text-light" to="/locations">Our Locations</Link>
            </button>
            <button className="btn btn-info mr-5">
              <Link className="nav-link text-light" to="/booking">Booking</Link>
            </button>

            <Link to="/vehicles"><img src="./carLogo.svg" style={{height: '80px'}} alt="#" /></Link>
          </nav>

            <Route path="/" exact component={Home}></Route>
            <Route path="/vehicles" component={Vehicles}></Route>
            <Route path="/booking" component={Booking}></Route>

            {/* <Route path="/vehicles" component={Locations}></Route> */}
            





            

            


        </React.Fragment>
    );
  }
}

export default Navbar;