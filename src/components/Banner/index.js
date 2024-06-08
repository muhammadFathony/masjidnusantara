import React from "react"
import {useTextContext} from "../../context/TextContext"
import { useBannerContext } from "context/BannerContext";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const Component = () => {
    const { showText } = useTextContext()
    const { bannerData } = useBannerContext();
    return(
        <>
         <div className="position-relative">
          <section data-id={bannerData.imageUrl} className="section section-hero section-header" style={{ backgroundImage: `url('${bannerData.imageUrl}')` }}>
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  {showText && 
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require('assets/img/mosque/mosque-new-white.png')}
                      style={{ width: "200px" }}
                    />
                    <p className="lead text-white">
                        Masjid At Taqwa
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://maps.app.goo.gl/uD1hAzCcb8BBYPrq7"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                            <i className="fa fa-map-marker"></i>
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Lihat</span>
                          lokasi
                        </span>
                      </Button>
                    </div>
                    {/* <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      />
                    </div> */}
                  </Col>
                  }
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
        </>
    )
}

export default Component;