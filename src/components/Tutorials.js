import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class Tutorials extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className='services'>
          <a id="top"/>
          <div className='sa'>
            <h1 className='satext'>TUTORIALS</h1>
          </div>
          
          <div className='sb'>
            <div className='boxes'>
              <a href="https://kennedy-84a26.web.app/">
                <div className='triplebox b1'></div>
              </a>
              <a href="https://jubilee-3e466.web.app">
                <div className='triplebox b2'></div>
              </a>
              <a href="https://jfc.org/missions">
                <div className='triplebox b3'></div>
              </a>
            </div>
           </div>
        </div>
    );
  }
}

export default Tutorials;