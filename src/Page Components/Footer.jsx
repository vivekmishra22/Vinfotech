import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaBullseye } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container fluid>
        <Row className="p-5 bg-dark">
          <Col md={4} className="text-light">
            <h5>Our Missions</h5>
            <p>
              Our mission is to develop a skilled IT workforce in India,
              empowering individuals with accessible and affordable IT training
              to drive innovation & economic growth, and bridge the digital
              divide in the ever-evolving tech landscape.
            </p>
          </Col>

          <Col md={3}>
            <ul className=" list-unstyled text-light">
              <h5 className="text-light">Quick Links</h5>
              <li className="d-flex align-items-center">
                <FaBullseye className="fs-6 me-1" />
                <span>Our Courses</span>
              </li>
              <li className="d-flex align-items-center">
                <FaBullseye className="fs-6 me-1" />
                <span>About Us</span>
              </li>
              <li className="d-flex align-items-center">
                <FaBullseye className="fs-6 me-1" />
                <span>Contact Us</span>
              </li>
              <li className="d-flex align-items-center">
                <FaBullseye className="fs-6 me-1" />
                <span>Full Stack Development In PHP</span>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <ul className=" list-unstyled text-light">
              <h5>Courses</h5>
              <li className="d-flex align-items-center">
                <FaBullseye className="fs-6 me-1" />
                <span>MERN Stack Development</span>
              </li>
              <li className="d-flex align-items-center">
                <FaBullseye className="fs-6 me-1" />
                <span>MEAN Stack Development</span>
              </li>
              <li className="d-flex align-items-center">
                <FaBullseye className="fs-6 me-1" />
                <span>Full Stack Development In JAVA</span>
              </li>
              <li className="d-flex align-items-center">
                <FaBullseye className="fs-6 me-1" />
                <span>Full Stack Development In PHP</span>
              </li>
            </ul>
          </Col>

          <Col md={2}>
            <ul className="list-unstyled text-light">
              <h5 className="text-light">Follow Us</h5>
              <li>
                <a
                  className="text-decoration-none d-flex align-items-center text-light"
                  href="/"
                >
                  <BsFacebook className="me-1" />
                  <span className="">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none d-flex align-items-center text-light"
                  href="/"
                >
                  <FaSquareInstagram className="me-1" />
                  <span className="text-decoration-none">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none d-flex align-items-center text-light"
                  href="/"
                >
                  <FaLinkedin className="me-1" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none d-flex align-items-center text-light"
                  href="/"
                >
                  <FaYoutube className="me-1" />
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
