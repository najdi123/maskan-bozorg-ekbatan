import React, {Component} from 'react';
import './main.css';
import HomeGallery from "./HomeGallery";

import cardboard from '../images/cardboard-570x250.jpg';
import paper from '../images/paper-570x250.jpg';
import plastic from '../images/plastic-570x250.jpg';
import logo from '../images/logo-small-EDS.jpg'



class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="one container">
                    <h2 className="welcome">
                        Welcome to Sunbright Paper Recycling
                    </h2>
                    <h5 className="welcome-text">
                        Sunbright Paper Recycling is one of the leading commercial and industrial recycling service provider in the Central Texas area, focusing on recycling and solid waste cost reduction programs. Our goal is to save trees, oil and your money.
                    </h5>
                </div>
                <div className="two">
                    <HomeGallery/>
                </div>
                <div className="three container">
                    <h2 className="welcome">
                        Did you know?
                    </h2>
                    <h5 className="welcome-text">
                        Recycling one ton of paper saves 682.5 gallons of oil, 7,000 gallons of water, or 3.3 cubic yards of landfill space.
                    </h5>
                    <h5 className="welcome-text">
                        Plastics can take up to 400 years to break down in a landfill.
                    </h5>
                    <h5 className="welcome-text">
                        Every ton of recycled paper saves about 17 trees.
                    </h5>
                    <h5 className="welcome-text">
                        Recycled paper requires 64% less energy than making paper from virgin wood pulp
                    </h5>

                    <h6>
                        Sources: iD2 Communications, Waste Reduction is a Smart Business Decision, Onondaga Resource Recovery Agency, Fortune.com.
                    </h6>
                    <h5 className="seperator">
                        ______________________________________
                    </h5>
                </div>
                <div className="three container">
                    <h2 className="welcome">
                        What Would you like to recycle?
                    </h2>
                    <img className="col-xs-12 col-md-4 align" src={cardboard} alt=""/>
                    <a href="#">

                        <img className="col-xs-12 col-md-4 align" src={paper} alt=""/>

                    </a>
                        <img className="col-xs-12 col-md-4 align" src={plastic} alt=""/>
                        <h5 className="seperator">
                            ______________________________________
                        </h5>
                </div>
                <div className="four row">
                    <div className="col-sm-12 col-md-2 leftm ">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <img src={logo} alt=""/>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default Main;