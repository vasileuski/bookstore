import React from "react";
import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const NaviBar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <NavbarBrand>📚BookStore</NavbarBrand>
        <Nav className="m-auto" as="ul">
          <Nav.Link as="li">
            <Link to="/">Main</Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link to="/catalog">Go Shopping</Link>
          </Nav.Link>
          <Nav.Link as="li">NEW!</Nav.Link>

          {/*  <Nav.Link as="li">Cart</Nav.Link>      SHOW WHEN LOGIN SUCCESS
           */}
        </Nav>

        <Nav>
          <Button variant="primary" className="mx-2">
            Sign In
          </Button>
          <Button variant="primary">Sign Up</Button>
          {/* <Button variant="primary">Sign Up</Button>
              <Nav.Link as="li">Profile</Nav.Link>     SHOW WHEN LOGIN SUCCESS  */}
        </Nav>
      </Container>
    </Navbar>
  );
};
