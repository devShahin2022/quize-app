import React from 'react';
import './Navbarheader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';

const Navbarheader = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
    <Container>
      <Navbar.Brand href="/">
      <img className='nav-brand' src={logo} alt=''/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto'>
          <NavLink 
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
          
          className="nav-link" to="/">Topics</NavLink>
          <NavLink 
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          className="nav-link"  to="/blog">
            Blog
          </NavLink>
          <NavLink
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          className="nav-link"  to="/statistics">
            Statistics
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navbarheader;