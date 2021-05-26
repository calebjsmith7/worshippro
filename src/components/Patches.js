import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class Patches extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className='services'>
          <a id="top"/>
          <div className='sa'>
            <h1 className='satext'>PATCHES</h1>
          </div>
          
          <div className='sb'>
            <div className='boxes'>
              <a href="">
                <div className='triplebox b1'></div>
              </a>
              <a href="">
                <div className='triplebox b2'></div>
              </a>
              <a href="">
                <div className='triplebox b3'></div>
              </a>
            </div>
           </div>
        </div>
    );
  }
}

export default Patches;