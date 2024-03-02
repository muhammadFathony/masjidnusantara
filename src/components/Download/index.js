import React from 'react'
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

const Component = () => {
    const masjidBox = {
        maxWidth: '100%',
        height: '100px',
        objectFit: 'cover',
        objectPosition: 'center'
    }
    return (
        <>
            <section className="section section-lg">
                <Container>
                    <Row className="row-grid justify-content-center">
                        <Col className="text-center" lg="8">
                            <h2 className="display-3">
                                Motivasi{" "}
                                <span className="text-success">
                                    Umar Bin Khattab
                                </span>
                            </h2>
                            <p className="lead">
                                Aku sudah melihat segala bentuk rezeki, tapi tidak aku temukan rezeki 
                                yang lebih baik dari pada kesabaran
                            </p>
                            <div className="btn-wrapper">
                                <Button
                                    className="mb-3 mb-sm-0"
                                    color="success"
                                    href="https://github.com/muhammadFathony/masjidnusantara.git"
                                    target="_blank"
                                >
                                    Download Project
                                </Button>
                            </div>
                            <div className="text-center">
                                <h4 className="display-4 mb-5 mt-5">
                                    Masjid Indonesia
                                </h4>
                                <Row className="justify-content-center">
                                    <Col lg="2" xs="4">
                                        <a
                                            href="https://source.unsplash.com/a-large-white-building-with-a-staircase-leading-up-to-it-eXTLDVY2FEs"
                                            id="masjid1"
                                            target="_blank" rel="noreferrer"
                                        >
                                            <img
                                                style={masjidBox}
                                                alt="..."
                                                className="img-fluid rounded"
                                                src="https://source.unsplash.com/a-large-white-building-with-a-staircase-leading-up-to-it-eXTLDVY2FEs"
                                            />
                                        </a>
                                        <UncontrolledTooltip delay={0} target="masjid1">
                                            Masjid Cut Meutia, Jakarta
                                        </UncontrolledTooltip>
                                    </Col>
                                    <Col lg="2" xs="4">
                                        <a
                                            href="https://source.unsplash.com/a-large-building-with-a-yellow-dome-on-top-of-it-O4GpjCF2JEA"
                                            id="masjid2"
                                            target="_blank" rel="noreferrer"
                                        >
                                            <img
                                                style={masjidBox}
                                                alt="..."
                                                className="img-fluid rounded"
                                                src="https://source.unsplash.com/a-large-building-with-a-yellow-dome-on-top-of-it-O4GpjCF2JEA"
                                            />
                                        </a>
                                        <UncontrolledTooltip delay={0} target="masjid2">
                                            Masjid Agung Sukabumi, Sukabumi
                                        </UncontrolledTooltip>
                                    </Col>
                                    <Col lg="2" xs="4">
                                        <a
                                            href="https://source.unsplash.com/a-green-and-yellow-dome-on-top-of-a-building-SxMEtrXoVkg"
                                            id="masjid3"
                                            target="_blank" rel="noreferrer"
                                        >
                                            <img
                                                style={masjidBox}
                                                alt="..."
                                                className="img-fluid rounded"
                                                src="https://source.unsplash.com/a-green-and-yellow-dome-on-top-of-a-building-SxMEtrXoVkg"
                                            />
                                        </a>
                                        <UncontrolledTooltip delay={0} target="masjid3">
                                            Masjid Pogung Raya, Kab. Sleman
                                        </UncontrolledTooltip>
                                    </Col>
                                    <Col lg="2" xs="4">
                                        <a
                                            href="https://source.unsplash.com/white-and-brown-dome-building-during-daytime-cEelDE0k3pA"
                                            id="masjid4"
                                            target="_blank" rel="noreferrer"
                                        >
                                            <img
                                                style={masjidBox}
                                                alt="..."
                                                className="img-fluid rounded"
                                                src="https://source.unsplash.com/white-and-brown-dome-building-during-daytime-cEelDE0k3pA"
                                            />
                                        </a>
                                        <UncontrolledTooltip delay={0} target="masjid4">
                                            Masjid Agung Jawa Tengah, Semarang
                                        </UncontrolledTooltip>
                                    </Col>
                                    <Col lg="2" xs="4">
                                        <a
                                            href="https://source.unsplash.com/a-large-building-sitting-on-top-of-a-body-of-water-7JOX1nwG2hw"
                                            id="masjid5"
                                            target="_blank" rel="noreferrer"
                                        >
                                            <img
                                                style={masjidBox}
                                                alt="..."
                                                className="img-fluid rounded"
                                                src="https://source.unsplash.com/a-large-building-sitting-on-top-of-a-body-of-water-7JOX1nwG2hw"
                                            />
                                        </a>
                                        <UncontrolledTooltip delay={0} target="masjid5">
                                            Masjid Apung Bandung, Bandung
                                        </UncontrolledTooltip>
                                    </Col>
                                    <Col lg="2" xs="4">
                                        <a
                                            href="https://source.unsplash.com/orange-and-white-dome-building-under-white-sky-during-daytime-KmRfFNUio5w"
                                            id="masjid6"
                                            target="_blank" rel="noreferrer"
                                        >
                                            <img
                                                style={masjidBox}
                                                alt="..."
                                                className="img-fluid rounded"
                                                src="https://source.unsplash.com/orange-and-white-dome-building-under-white-sky-during-daytime-KmRfFNUio5w"
                                            />
                                        </a>
                                        <UncontrolledTooltip delay={0} target="masjid6">
                                            Masjid 99 Kubah, Makasar
                                        </UncontrolledTooltip>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Component