import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar';
import CarouselPage from "../components/Dashboard";
import '../components/main.css'
import FooterPage from "../components/Footer";
// import Jumbotron from '../components/Jumbotron.jsx';
// import Gallery from '../components/Gallery'




class Home extends Component {
    render() {
        return (
            <div className="about">

                {/*<SideNavPage/>*/}
                {/*<NavbarPage/>*/}
                {/*<SideNavPage/>*/}
                {/*<CarouselPage/>*/}
                <Navbar/>
                <div className="container">
                    <h4 className="desc5">
                        هدف ما تفکیک پسماند قابل بازیافت، معرفی همکاران به یکدیگر، حذف واسطه و اشتغال زایی در راستای حفظ محیط زیست می باشد
                    </h4>
                    <br/>
                    <h4 className="desc5">
                        بنگاه ضایعاتی ابراهیمی با بیش از بیست سال تجربه آماده به خدمت رسانی می باشد
                    </h4>
                </div>

                <FooterPage/>
            </div>
        );
    }
}

export default Home;