import React, {Component} from 'react';
import './main.css';
import Carousel from "./Carousel";

import ContactForm from './ContactForm';



class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact col-4 offset-4">
                    {/*<h3 className="desc3">*/}
                        {/*تماس با ما*/}
                    {/*</h3>*/}
                    <br/>
                    <h1>

                        <span className="contactHeader">:تلفن تماس </span>

                        {/*0912-1160743*/}
                        {/*0912-5256158*/}
                    </h1>
                    <h1 className="contactHeader2">
                        09125256158
                        <br/>
                        09121160743
                    </h1>
                    {/*<ReactContactForm*/}
                        {/*to="address@gmail.com"*/}
                        {/*className="contactForm"*/}
                        {/*titlePlaceholder="عنوان تماس..."*/}
                        {/*contentsPlaceholder="پیغام شما..."*/}
                        {/*buttonText="ارسال پیغام"*/}

                    {/*/>*/}

                    <ContactForm
                        to="zayeat.ebrahimi@gmail.com"
                        className="contactForm"
                        titlePlaceholder="عنوان تماس..."
                        contentsPlaceholder="پیغام شما..."
                        buttonText="ارسال پیغام"
                    />
                </div>

                <Carousel/>
            </div>
        );
    }
}

export default Contact;