import React from 'react'
import { Link } from "react-router-dom";
// reactstrap components
import {
    Button,
    Card,
    CardImg,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

const Component = () => {
    // https://source.unsplash.com/brown-and-black-dome-building-nTE88akjSos
    const footerMasjidBox = {
        maxWidth: '100%',
        height: '400px',
        objectFit: 'cover',
        objectPosition: 'center'
    }
    return (
        <>
            <footer className="footer has-cards">
                <Container className="container-lg">
                    <Row>
                        <Col className="mb-5 mb-md-0" md="6">
                            <Card className="card-lift--hover shadow border-0">
                                <Link to="/landing-page">
                                    <CardImg
                                        style={footerMasjidBox}
                                        alt="..."
                                        src={require("assets/img/mosque/ukhwah5.jpg")}
                                    />
                                </Link>
                            </Card>
                        </Col>
                        <Col className="mb-5 mb-lg-0" md="6">
                            <Card className="card-lift--hover shadow border-0">
                                <Link to="/profile-page">
                                    <CardImg
                                        style={footerMasjidBox}
                                        alt="..."
                                        src={require("assets/img/mosque/ukhwah4.jpg")}
                                    />
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="row-grid align-items-center my-md">
                        <Col lg="6">
                            <h3 className="text-primary font-weight-light mb-2">
                                Terimakasih telah berkunjung
                            </h3>
                            <h4 className="mb-0 font-weight-light">
                                Masjid Ukhwah Islamiyah el Azhar
                            </h4>
                        </Col>
                        <Col className="text-lg-center btn-wrapper" lg="6">
                            <Button
                                className="btn-icon-only rounded-circle"
                                color="twitter"
                                href="https://www.youtube.com/@Masjid_UIEA"
                                id="tooltip475038074"
                                target="_blank"
                            >
                                <span className="btn-inner--icon">
                                    <i className="fa fa-youtube" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip475038074">
                                Chanel Youtube
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="facebook"
                                href="https://web.facebook.com/search/top?q=masjid%20ukhuwah%20islamiyah%20el%20azha"
                                id="tooltip837440414"
                                target="_blank"
                            >
                                <span className="btn-inner--icon">
                                    <i className="fa fa-facebook-square" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip837440414">
                                Seputar Facebook
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="dribbble"
                                href="https://www.instagram.com/masjid.ui.ea/"
                                id="tooltip829810202"
                                target="_blank"
                            >
                                <span className="btn-inner--icon">
                                    <i className="fa fa-instagram" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip829810202">
                                Instagram
                            </UncontrolledTooltip>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="github"
                                href="https://api.whatsapp.com/send?phone=6282280292345"
                                id="tooltip495507257"
                                target="_blank"
                            >
                                <span className="btn-inner--icon">
                                    <i className="fa fa-whatsapp" />
                                </span>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip495507257">
                                Whatsapp
                            </UncontrolledTooltip>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="align-items-center justify-content-md-between">
                        <Col md="6">
                            <div className="copyright">
                                © {new Date().getFullYear()}{" "}
                                <a
                                    href="https://www.creative-tim.com?ref=adsr-footer"
                                    target="_blank" rel="noreferrer"
                                >
                                    Theme by Creative Tim
                                </a>
                                .
                            </div>
                        </Col>
                        <Col md="6">
                            <Nav className="nav-footer justify-content-end">
                                <NavItem>
                                    <NavLink
                                        href="https://www.creative-tim.com?ref=adsr-footer"
                                        target="_blank"
                                    >
                                        Beranda
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                                        target="_blank"
                                    >
                                        Galery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="http://blog.creative-tim.com?ref=adsr-footer"
                                        target="_blank"
                                    >
                                        Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                                        target="_blank"
                                    >
                                        MIT License
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Component