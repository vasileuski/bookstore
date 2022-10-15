import React from "react";
import {
  Container,
  InputGroup,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { Styles } from "../LoginForm/styles";

export const LoginForm = () => {
  const username = useInput("");
  const password = useInput("");

  return (
    <Styles>
      <div className="container my-4">
        <ButtonGroup className="login-btn-links mb-3">
          <Button variant="primary">Login</Button>

          <Button variant="link" style={{ color: "white" }}>
            <Link to="/registration">Registration </Link>
          </Button>
        </ButtonGroup>

        <Form.Label>Your username</Form.Label>
        <InputGroup className="mb-3" aria-label="Large">
          <Form.Control placeholder="Username" {...username} />
        </InputGroup>

        <Form.Label htmlFor="basic-url">Your password</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Password" {...password} />
        </InputGroup>
        <Button variant="primary" className="login-button mb-4">
          Sign in
        </Button>
        <p className="text-center">
          Not a member? <Link to="/registration">Register</Link>
        </p>
      </div>
    </Styles>
  );
};
