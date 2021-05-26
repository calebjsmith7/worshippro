import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


class Home extends Component {
  

  render() {

    return (
        <div>
            <a id="top"></a>
            <div className="a">
                
            </div>
            
            
            <div className="b">
                <div className="centertext">
                    <h1 className="info">Information about patches and tutorials and the modern worship guitarist</h1>
                    <hr className="binfoh"/>
                </div>
            </div>
        

            <div className="c">
                <a id="restorations">
                    <h3 className="mods">PATCHES</h3>
                    <HashLink to="/patches"><button className="designyours btn btn-light">EXPLORE</button></HashLink>
                </a>
            </div>
            <div className="d">
                
                <a id="restorations">
                    <h3 className="mods">TUTORIALS</h3>
                    <HashLink to="/tutorials"><button className="designyours btn btn-light">EXPLORE</button></HashLink>
                </a>
            </div>
        </div>
    );
  }
}

export default Home;