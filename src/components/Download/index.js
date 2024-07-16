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
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Component