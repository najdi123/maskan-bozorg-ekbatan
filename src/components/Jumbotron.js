import React, {Component} from 'react';
import './navbar.css';
import Navbar from './Navbar';

class Sidebar extends Component {
    render() {
        return (
            <div className="jumbo-wrapper">
                <div className="brand " href="#">

                    <h1 className="name">مسکن بزرگ اکباتان</h1>
                    <br/>
                    <h4 className="desc">معاملات آپارتمان</h4>
                    <br/>
                    <h4 className="desc bottomM">
                        در محدوده اکباتان
                    </h4>

                    <br/>

                    <h2 className="desc2">
                        44645060
                    </h2>
                    <br/>
                    <h2 className="desc2 bottomM">

                    </h2>

                </div>
                <Navbar/>
            </div>
        );
    }
}

export default Sidebar;