import React from 'react';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({ handlePageChange }) {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => handlePageChange('Home')}>
            Brad Hambrick's Full Stack Web Development Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Link to="/about">About Me</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link> */}
              <Nav.Link onClick={() => handlePageChange('Home')}>
                About Me
              </Nav.Link>
              <Nav.Link onClick={() => handlePageChange('Portfolio')}>
                Portfolio
              </Nav.Link>
              <Nav.Link onClick={() => handlePageChange('Resume')}>
                Resume
              </Nav.Link>
              <Nav.Link onClick={() => handlePageChange('Contact')}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
