import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const About = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        showUsers()
    }, [])

    const showUsers = () => {
        axios.get(`http://localhost:8000/getuser`)
            .then(res => {
                setUserData(res.data.data)
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <Container>
                <Row className='my-4'>
                    {userData.map((Register, id) => {
                        return (
                            <Col md={3} className='my-4'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{Register.fname}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{Register.email}</Card.Subtitle>
                                        <Card.Text>
                                            {Register.subject}
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default About;
