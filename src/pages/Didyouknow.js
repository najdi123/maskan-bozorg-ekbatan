import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar';
import '../components/main.css';
import FooterPage from "../components/Footer";




class Home extends Component {
    render() {
        return (
            <div>

                <Navbar />

                <div className="three container">

                    <h2 className="did">
                        آیا میدانید؟
                    </h2>
                    <h5 className="did2">
                        بازیافت یک تن کاغذ موجب به صرفه جویی در 682.5 گالن نفت، 7،000 گالن آب یا 1 متر مکعب دفن زباله میباشد
                    </h5>
                    <h5 className="did2">
                        پلاستیک تا 400 سال برای بازگشت به طبیعت زمان میبرد
                    </h5>
                    <h5 className="did2">
                        بازیافت هر 1000 کیلوگرم کاغذ موجب به نجات 17 درخت میشود.
                    </h5>
                    <h5 className="did2">
                        بازیافت کاغذ 64% انرژی کمتری از تولید توسط چوب تازه نیاز دارد.
                    </h5>

                    <h5 className="did3">
                        کاهش زباله، یک تصمیم اقتصادی هوشمندانه است
                    </h5>
                    {/*<h5 className="seperator">*/}
                        {/*______________________________________*/}
                    {/*</h5>*/}
                </div>

                <FooterPage/>
            </div>
        );
    }
}

export default Home;