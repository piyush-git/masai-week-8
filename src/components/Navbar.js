import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import '../App.css'
import Home from './Home';
import Vehicles from './Vehicles';
// import About from './About';
// import FAQ from './FAQ';
// import Contact from './Contact';
// import Products from './products/Products';

class Navbar extends Component {
  render() {
    return (
        <React.Fragment>
                  
          <nav className="navbar navbar-light bg-dark fixed-top">
            <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0173/8828/files/Proper_Logo_280x_2x_240x240_6b887461-1064-47c5-a958-b6e5a5726d97_280x@2x.png?v=1532311943"/></Link>
            <button className="btn btn-info ml-auto mr-5"><Link className="nav-link text-light" to="/vehicles">Our Cars</Link></button>
            
            <Link to="#"><img src="./carLogo.svg" style={{height: '80px'}} /></Link>
          </nav>

            <Route path="/" exact component={Home}></Route>
            <Route path="/vehicles" component={Vehicles}></Route>



            

            


        </React.Fragment>
    );
  }
}

export default Navbar;