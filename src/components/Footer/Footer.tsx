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
            <Nav.Link>Main</Nav.Link>
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
            <p>
              This site developed<br></br> by A.Vasileuski
            </p>
          </Nav>
        </Container>
      </Navbar>
    </Styles>
  );
};
