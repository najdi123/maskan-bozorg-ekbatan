import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './navbar.css';



class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm header sticky  mb-4">
                <div className="wrapper">






                    <button className="navbar-toggler navbar-toggler-right ml-auto" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"><strong>منو</strong></span>
                    </button>

                    {/*<div className="navbar-brand jumbotron" href="#">*/}

                            {/*<h6 className="name">--</h6>*/}



                    {/*</div>*/}


                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    درباره ما
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/didyoukno">
                                    بیشتر بدانیم
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    تماس با ما
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    خانه
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        );
    }
}

export default Navbar;
