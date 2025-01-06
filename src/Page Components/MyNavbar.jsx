import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaLaptopCode } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" variant='dark' bg='dark' className="px-4">
        <Navbar.Brand className='d-flex align-items-center' href="#home"><FaLaptopCode className="me-2" /> VInfotech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home"><Link to="/home" className='text-light fs-6 text-decoration-none'>Home</Link></Nav.Link>
            <NavDropdown title={ <span className='text-light'>Courses</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/mern" className='fs-6 text-decoration-none'>MERN Stack Development</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='fs-6 text-decoration-none'>MEAN Stack Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='fs-6 text-decoration-none'>Full Stack Development in Java</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='fs-6 text-decoration-none'>Full Stack Development in PHP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className='fs-6 text-decoration-none'>Python / Django Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" className='fs-6 text-decoration-none'>Data Science</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7" className='fs-6 text-decoration-none'>AI and ML</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" ><Link to="/about" className='fs-6 text-decoration-none text-light'>About us</Link></Nav.Link>
          </Nav>
          {/* <Nav className="ms-auto">
            <Button variant="outline-light" className="me-2">
              <Link to="/register" className='text-decoration-none text-light'>Register</Link>
            </Button>
            <Button variant="light">
              <Link to="/login" className='text-decoration-none text-dark'>Login</Link>
            </Button>
          </Nav> */}

          <Nav className='ms-auto'>
            <Button variant="primary" className='me-2'>
              <Link className='text-decoration-none text-light'>Register</Link>
            </Button>
            <Button variant="success">
              <Link className='text-decoration-none text-light'>Log In</Link>
            </Button>
          </Nav>
        </Navbar.Collapse>

            {/* <Nav.Link href="#link" ><Link to="/about" className='fs-6 text-decoration-none text-light'>Register</Link></Nav.Link> */}
            {/* <Nav.Link href="#link" ><Link to="/about" className='fs-6 text-decoration-none text-light'>About us</Link></Nav.Link> */}
    </Navbar>
    </>
  )
}

export default MyNavbar;
