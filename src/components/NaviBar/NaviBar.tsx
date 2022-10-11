import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Styles } from "./styles";

export const NaviBar = () => {
  return (
    <Styles>
      <Navbar bg="light" className="d-flex">
        <Container>
          <NavbarBrand className="mr-auto">📚 Bookstore</NavbarBrand>

          <Nav as="ul">
            <Nav.Link as="li">
              <Link to="/">Main</Link>
            </Nav.Link>
            <NavDropdown title="Go Shopping" menuVariant="light">
              <NavDropdown.Item>
                <Link to="/newreleases">NEW Releases</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>Programming</NavDropdown.Item>
              <NavDropdown.Item>Cooking</NavDropdown.Item>
              <NavDropdown.Item>Mathematics</NavDropdown.Item>
            </NavDropdown>

            <Button variant="primary">
              Login
              {/* <img src={login} alt="login" /> */}
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </Styles>
  );
};
