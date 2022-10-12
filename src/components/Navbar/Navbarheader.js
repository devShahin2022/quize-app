import React from 'react';
import './Navbarheader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.png';

const Navbarheader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
    <Container>
      <Navbar.Brand href="#home">
      <img className='nav-brand' src={logo} alt=''/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto'>
          <Nav.Link href="#deets">Home</Nav.Link>
          <Nav.Link  href="#memes">
            Blog
          </Nav.Link>
          <Nav.Link  href="#memes">
            Statistics
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navbarheader;