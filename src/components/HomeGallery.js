import React, {Component} from 'react';
import './main.css';

import pic1 from '../images/box1.jpeg';
import pic2 from '../images/paper-1024x576.jpg';
import pic3 from '../images/box2.jpeg';
// import pic4 from '../images/4-small.jpg';
import pic5 from '../images/SOP3-768x1024.jpg';



class HomeGallery extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-3 hgallery">
                        <img className="align" src={pic1} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic2} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic3} alt=""/>
                    </div>
                    {/*<div className="col-sm-12 col-md-2 align">*/}
                        {/*<img src={pic4} alt=""/>*/}
                    {/*</div>*/}
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic5} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeGallery;