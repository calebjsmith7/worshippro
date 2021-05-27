import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class About extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className='services'>
          <a id="top"/>
          <div className='sa'>
            <h1 className='satext'>ABOUT US</h1>
          </div>
          <div className='saab'>
          <div className='sb1'>
            </div>
            <div className='sb2'>
            <h1 className='est'>Donny Camp</h1>
            <h5 className='servinfo'>Worship Pro was founded by Donny Camp in 2021. Donny Camp has been a Worship Guitarist and Worship Pastor in Denver, Colorado for 10+ Years and is a professional with both analog and digital effects. 
            He established Worship Pro with the desire to equip the worship community with professional level effects, patches, and tutorials
            to come alongside worship musicans of all experience levels. 
             </h5>
            </div>
          </div>
        </div>
    );
  }
}

export default About;