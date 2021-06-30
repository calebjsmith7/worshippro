import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { HashLink } from 'react-router-hash-link';


class Lowermenu extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <div className="lower">
          <div className="bottomlogo"></div>
          <div className="cw">
            <h1 className="cw">© 2021 WORSHIP PRO. All Rights Reserved.</h1>
          </div>
          <div className="bottomright">
            <ul className="bottomlinks">
              <li><HashLink to='/#top' className="fix">Home</HashLink></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><a href='https://neuraldsp.com/cloud/u/DonnyCamp' className="fix">Store</a></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><a href='https://www.youtube.com/channel/UCw-qXpxPMhSV3h5EqQusolA' className="fix">Tutorials</a></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><HashLink to='/contact#top' className="fix">Contact</HashLink></li>
            </ul>
          </div>
        </div>
          )
        };
    }
    
export default Lowermenu;