import React from 'react';

class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div style={{marginTop: 125,}} className="text-center">
                <div className="offset-5 " style={{width: 300}} >
                    <h1 className="btn btn-dark w-75">Koramangala 1st Block</h1>
                    <br />
                    <h1 className="btn btn-dark w-75">HSR Layout</h1>
                    <br />
                    <h1 className="btn btn-dark w-75">Ejipura</h1>
                    <br />
                    <h1 className="btn btn-dark w-75">Vars Claramont</h1>
                    <br />
                    <h1 className="btn btn-dark w-75">BTM Second Layout</h1>
                </div>
            </div>
        );
    }
}

export default Locations;