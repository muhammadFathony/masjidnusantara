import React from 'react'
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Row } from "reactstrap";
const Component = ({arrayImage, onClick}) => {
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
                        {arrayImage?.map((item) => (
                            <Card className="m-1" style={{ width: '18rem' }} key={item.id} >
                                <img alt="Sample" style={cardImageBox} src={item.image} />
                                <CardBody>
                                    <CardTitle tag="h5">
                                       {item.ttile}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        {item.name}
                                    </CardSubtitle>
                                    <CardText>
                                        {item.body} {item.date}
                                    </CardText>
                                    <Button>
                                        Button
                                    </Button>
                                </CardBody>
                            </Card>
                        ))}

                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Component