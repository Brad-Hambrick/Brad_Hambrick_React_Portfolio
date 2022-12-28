import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Portfolio from '../../components/Portfolio/index';
import About from '../../components/About/index';
import Contact from '../../components/Contact/index';
import Resume from '../../components/Resume/index';

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                Brad Hambrick's Full Stack Web Development Portfolio
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/about">About Me</Nav.Link>
                  <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="/resume">Resume</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;
