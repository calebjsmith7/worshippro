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
                <div className="bigleft"></div>
                <div className="bigright"><h2>Professional Resources for Church Musicians</h2></div>
            </div>
            
            
            <div className="b">
                <div className="centertext">
                    <h1 className="info">Take your craft to the next level with professional patches for Quad Cortex and Helix, and learn with our growing library of Worship Tutorials.</h1>
                    <hr className="binfoh"/>
                </div>
            </div>
        

            <div className="c">
                    <h3 className="mods">PATCHES</h3>
                    <HashLink to=""><button className="designyours btn btn-light">EXPLORE</button></HashLink>
            </div>
            <div className="d">
                    <h3 className="mods">TUTORIALS</h3>
                    <HashLink to="/tutorials"><button className="designyours btn btn-light">EXPLORE</button></HashLink>
            </div>

            <div className="e">
                <div className="subscribeleft">
                    <h3 className="subscribetitle">Stay up to speed on the latest at Worship Pro</h3>
                </div>
                <div className="subscriberight">

                    <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
                <div id="mc_embed_signup">
                 <form action="https://jfc.us6.list-manage.com/subscribe/post?u=3fa7a9607b9b800108da06b8e&amp;id=cae083dab8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
	
	                    <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required ></input>
                                <div style={{position: 'absolute', left: -5000 + 'px'}} aria-hidden="true"><input type="text" name="b_3fa7a9607b9b800108da06b8e_cae083dab8" tabindex="-1" value="" ></input></div>
                                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
                    </div>
                </form>
                </div>

                </div>
            </div>

        </div>
    );
  }
}

export default Home;