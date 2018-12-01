import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron';
import MainFarsi from "../components/MainFarsi";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import FooterPage from "../components/Footer";
// import Jumbotron from '../components/Jumbotron.jsx';
// import Gallery from '../components/Gallery'




class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Contact/>
                <FooterPage/>
            </div>
        );
    }
}

export default Home;