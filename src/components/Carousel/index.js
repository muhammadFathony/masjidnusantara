import React from 'react'
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const Component = () => {
    const items = [
        {
            src: require("assets/img/mosque/ukhwah7.jpg"),
            altText: "ukhwah1",
            caption: "",
            header: "",
        },
        {
            src: require("assets/img/mosque/ukhwah3.jpg"),
            altText: "ukhwah2",
            caption: "",
            header: "",
        },
        {
            src: require("assets/img/mosque/ukhwah6.jpg"),
            altText: "ukhwah2",
            caption: "",
            header: "",
        },
    ];
    return (
        <>
            <section className="section section-shaped">
                <div className="shape shape-style-1 shape-dark">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <Container className="py-md">
                    <Row className="justify-content-between align-items-center">
                        <Col className="mb-5 mb-lg-0" lg="5">
                            <h1 className="text-white font-weight-light">
                                Bootstrap carousel
                            </h1>
                            <p className="lead text-white mt-4">
                                Argon Design System comes with four pre-built pages to help
                                you get started faster. You can change the text and images and
                                you're good to go.
                            </p>
                            <Button
                                className="btn-white mt-4"
                                color="default"
                                href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                            >
                                See all components
                            </Button>
                        </Col>
                        <Col className="mb-lg-auto" lg="6">
                            <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                                <UncontrolledCarousel items={items} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                    </svg>
                </div>
            </section>
        </>
    )
}

export default Component