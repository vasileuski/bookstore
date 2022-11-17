import React from "react";
import { Button, Container, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BoxArrowInRight } from "react-bootstrap-icons";

import { Styles } from "./styles";

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
              <Nav.Link as="li">
                <Link to="/cart">Cart</Link>
              </Nav.Link>
              <Nav.Link as="li">
                <Link to="/newreleases">Go Shopping</Link>
              </Nav.Link>
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
