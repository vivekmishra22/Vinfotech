import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaLaptopCode } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" variant='dark' bg='dark' className="px-4">
        <Navbar.Brand className='d-flex align-items-center' href="#home"><FaLaptopCode className="me-2" /> VInfotech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home"><Link to="/home" className='text-light fs-6 text-decoration-none'>Home</Link></Nav.Link>
            <NavDropdown title={ <span className='text-light'>Courses</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/mern" className='text-secondary fs-6 text-decoration-none'>MERN Stack Development</Link></NavDropdown.Item>
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
