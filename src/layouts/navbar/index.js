import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const Component = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  useEffect(() => {
    const headroom = new Headroom(document.getElementById('navbar-main'));
    headroom.init();

    return () => {
      headroom.destroy();
    };
  }, []);

  const toggleNavbar = () => {
    setCollapseOpen(!collapseOpen);
  };

  const closeNavbar = () => {
    setCollapseOpen(false);
  };
  
    return(
        <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/mosque/mosque-new-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon" />
              </button>
              <Collapse
                toggler="#navbar_global"
                navbar
                isOpen={collapseOpen}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/mosque/mosque-new-white.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global_close" onClick={closeNavbar}>
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink to="beranda" tag={Link} onClick={closeNavbar}>Beranda</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="galeri" tag={Link} onClick={closeNavbar}>Galeri</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="tentangkami" tag={Link} onClick={closeNavbar}>Tentang Kami</NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      id="tooltip333589074"
                      href="https://web.facebook.com/search/top?q=masjid%20ukhuwah%20islamiyah%20el%20azhar" 
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Seputar Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/masjid.ui.ea/"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Instagram Official
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.youtube.com/@Masjid_UIEA"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-youtube" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Youtube
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Chanel Youtube
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://api.whatsapp.com/send?phone=6282280292345"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-whatsapp" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Whatsapp
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Whatsapp Kita
                    </UncontrolledTooltip>
                  </NavItem>
                  
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </header>
        </>
    )
}

export default Component;