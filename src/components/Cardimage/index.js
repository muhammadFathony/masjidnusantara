import React from 'react'
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Row } from "reactstrap";
const Component = () => {
    // https://picsum.photos/300/200
    const cardImageBox = {
        maxWidth: '100%',
        height: '300px',
        objectFit: 'cover',
        objectPosition: 'center'
    }
    return (
        <>
            <section className="section">
                <Container>
                    <Row className="row-grid justify-content-center">
                        <Card className="m-1" style={{ width: '18rem' }} >
                            <img alt="Sample" style={cardImageBox} src={require("assets/img/mosque/ukhwah-potrait1.jpg")}/>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                        <Card className="m-1" style={{ width: '18rem' }}>
                            <img alt="Sample" style={cardImageBox} src={require("assets/img/mosque/ukhwah-potrait5.jpg")}/>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                        <Card className="m-1" style={{ width: '18rem' }} >
                            <img alt="Sample" style={cardImageBox} src={require("assets/img/mosque/ukhwah-potrait6.jpg")}/>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Component