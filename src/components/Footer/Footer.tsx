import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Styles } from "../Footer/styles";

export const Footer = () => {
  return (
    <Styles>
      <Navbar bg="light" className="d-flex">
        <Container>
          <Nav className="flex-column">
            <Nav.Link as="li">
              <Link to="/">Main</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/registration">Registration</Link>
            </Nav.Link>
          </Nav>

          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as="li">
              <Link to="/newreleases">NEW Releases</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/programming">Programming</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/cookingbooks">Cooking</Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link to="/mathbooks">Mathematics</Link>
            </Nav.Link>
          </Nav>

          <Nav>
            <p className="nav-notation">
              This site is developed<br></br> by A.Vasileuski
            </p>
          </Nav>
        </Container>
      </Navbar>
    </Styles>
  );
};
