import React, {Component} from 'react';
import './main.css';
import HomeGallery from "./HomeGallery";
//
// import cardboard from '../images/cardboard-570x250.jpg';
// import paper from '../images/paper-570x250.jpg';
// import plastic from '../images/plastic-570x250.jpg';
import logo from '../images/logo-small-EDS.jpg'



class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="one container">
                    <h2 className="welcome">

                         به بنگاه بازیافت ابراهیمی خوش آمدید
                    </h2>
                    <h5 className="welcome-text">
                        بنگاه بازیافت ابراهیمی یکی از پیشرو ها در بازیافت پسماند سلولزی و ارایه دهنده خدمات صنعتی در محدوده تهران و کرج میباشد، هدف ما نجات درخت ها، صرفه جویی و کاهش هزینه های نفتی میباشد.
                    </h5>
                </div>
                <div className="two">
                    <HomeGallery/>
                </div>

                {/*<div className="three container">*/}
                    {/*<h2 className="welcome">*/}
                        {/*میخواهید چی بازیافت کنید؟*/}
                    {/*</h2>*/}
                    {/*<img className="col-xs-12 col-md-4 align" src={cardboard} alt=""/>*/}
                    {/*<a href="#">*/}

                        {/*<img className="col-xs-12 col-md-4 align" src={paper} alt=""/>*/}

                    {/*</a>*/}
                    {/*<img className="col-xs-12 col-md-4 align" src={plastic} alt=""/>*/}
                    {/*<h5 className="seperator">*/}
                        {/*______________________________________*/}
                    {/*</h5>*/}
                {/*</div>*/}
                {/*<div className="four row">*/}
                    {/*<div className="col-sm-12 col-md-2">*/}
                        {/*<img src={logo} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="col-sm-12 col-md-2">*/}
                        {/*<img src={logo} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="col-sm-12 col-md-2">*/}
                        {/*<img src={logo} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="col-sm-12 col-md-2">*/}
                        {/*<img src={logo} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="col-sm-12 col-md-2">*/}
                        {/*<img src={logo} alt=""/>*/}
                    {/*</div>*/}
                {/*</div>*/}


            </div>
        );
    }
}

export default Main;