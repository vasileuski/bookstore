import React from "react";
import { Styles } from "../Footer/styles";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Styles>
      <Navbar bg="light" className="d-flex">
        <Container>
          <Nav className="flex-column">
            <Nav.Link>
              <Link to="/">Main</Link>
            </Nav.Link>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Registration</Nav.Link>
          </Nav>

          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link>
              <Link to="/newreleases">NEW Releases</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/programming">Programming</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cookingbooks">Cooking</Link>
            </Nav.Link>
            <Nav.Link>
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
