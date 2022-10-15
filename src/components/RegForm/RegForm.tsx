import React from "react";
import { ButtonGroup, Button, InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { Styles } from "../RegForm/styles";

export const RegForm = () => {
  const username = useInput("");
  const password = useInput("");

  return (
    <Styles>
      <div className="container my-4">
        <ButtonGroup className="login-btn-links mb-3">
          <Button variant="link">
            <Link to="/login">Login </Link>
          </Button>

          <Button variant="primary">Registration</Button>
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
          Already a member? <Link to="/login">Login </Link>
        </p>
      </div>
    </Styles>
  );
};
