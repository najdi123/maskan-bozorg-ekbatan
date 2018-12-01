import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import './main.css';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="blue" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h3 className="title footerT">برای اطلاع از قیمت روز تماس بگیرید</h3>
                            <h3 className="footerT">
                                09121160743 - 09125256158
                            </h3>
                        </Col>
                        <Col md="6">
                            {/*<h5 className="title">Links</h5>*/}
                            <ul>
                                <li className="list-unstyled footer">
                                    <a className="list" href="/">خانه</a>
                                </li>
                                <li className="list-unstyled footer">
                                    <a className="list" href="/contact">تماس با ما</a>
                                </li>
                                <li className="list-unstyled footer">
                                    <a className="list" href="/didyoukno">بیشتر بدانیم</a>
                                </li>
                                <li className="list-unstyled footer">
                                    <a className="list" href="/about">درباره ما</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: {" "}
                        Ebrahimi Recycling
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;