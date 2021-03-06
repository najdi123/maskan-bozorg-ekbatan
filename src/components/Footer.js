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
                            <h3 className="title footerC">جنب شهرک اکباتان، خ بیمه 4، کوچه عظیمی پلاک 25</h3>
                            <h3 className="footerT">
                                44645060 - 09122198577
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
                        Maskan Bozorg Ekbatan
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;