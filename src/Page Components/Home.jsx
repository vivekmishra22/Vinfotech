import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import image1 from '../Assets/Images/Courses1.png'
import image2 from '../Assets/Images/Course2.webp'
import image3 from '../Assets/Images/Course3.jpg'

const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Image src={image1} fluid style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
                    <Carousel.Caption>
                        <h3>Online Courses</h3>
                        <p>Training Programs</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={image2} fluid style={{ width: '100%', height: '90vh', objectFit: 'cover' }}  />
                    <Carousel.Caption>
                        <h3>Coding Courses</h3>
                        <p>Training Programs</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={image3} fluid style={{ width: '100%', height: '90vh', objectFit: 'cover' }}  />
                    <Carousel.Caption>
                        <h3>E-Learning</h3>
                        <p>Training Programs</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Home;
