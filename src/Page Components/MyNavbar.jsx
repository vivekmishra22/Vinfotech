import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaLaptopCode } from "react-icons/fa";

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" variant='dark' bg='dark' className="px-5">
        <Navbar.Brand className='d-flex align-items-center' href="#home"><FaLaptopCode className="me-2" /> VInfotech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MERN Stack Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">MEAN Stack Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Full Stack Development in Java</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Full Stack Development in PHP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Python / Django Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Data Science</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">AI and ML</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default MyNavbar;
