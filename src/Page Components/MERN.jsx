import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Image1 from '../Assets/Images/MongoDB.webp';
import Image2 from '../Assets/Images/Node and Express Js.webp';
import Image3 from '../Assets/Images/React.webp';
import Image4 from '../Assets/Images/Html.webp';

const MERN = () => {
    return (
        <>

            <Container>
                <Row className="my-4 justify-content-center">
                    <h2 className="text-danger-emphasis text-center mb-4">
                        MEAN Stack Development Notes
                    </h2>
                    <hr />
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={Image4}
                                style={{ height: "300px", width: "100%" }}
                            />
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={Image1}
                                style={{ height: "300px", width: "100%" }}
                            />
                           <Card.Body>
                                <Card.Title>MongoDB</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={Image2}
                                style={{ height: "300px", width: "100%" }}
                            />
                            <Card.Body>
                                <Card.Title>Node and Express Js</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={Image3}
                                style={{ height: "300px", width: "100%" }}
                            />
                            <Card.Body>
                                <Card.Title>React</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* <Container>
                <Row className='my-4 justify-content-center'>
                    <span>
                    <h2 className='text-danger-emphasis text-center'>MEAN Stack Development Notes</h2>

                    </span>
                    <hr />
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src={ Image4 } fluid style={{ objectFit: "cover", height: "400px", width: "100%" }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src={ Image1 } style={{ objectFit: "cover", height: "400px", width: "100%" }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src={ Image2 } style={{ objectFit: "cover", height: "400px", width: "100%" }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src={ Image3 } style={{ objectFit: "cover", height: "400px", width: "100%" }} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}
        </>
    )
}

export default MERN;
