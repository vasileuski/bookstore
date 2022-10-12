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

            <Button variant="primary">Login</Button>
          </Nav>
        </Container>
      </Navbar>
    </Styles>
  );
};
