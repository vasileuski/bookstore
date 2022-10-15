import React from "react";
import { Styles } from "./styles";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BoxArrowInRight } from "react-bootstrap-icons";

export const NaviBar = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="md" bg="light">
        <Container>
          <NavbarBrand>
            <Link to="/" style={{ color: "#212529" }}>
              📚 Bookstore
            </Link>
          </NavbarBrand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav as="ul">
              <Nav.Link as="li">
                <Link to="/">Main</Link>
              </Nav.Link>
              <NavDropdown title="Go Shopping" menuVariant="light">
                <NavDropdown.Item>
                  <Link to="/newreleases">NEW Releases</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/programming">Programming</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/cookingbooks">Cooking</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mathbooks">Mathematics</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link to="/login" style={{ color: "white" }}>
              <Button variant="primary">
                Login
                <BoxArrowInRight className="login-icon" />
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};
