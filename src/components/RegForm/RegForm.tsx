import React from "react";
import { ButtonGroup, Button, InputGroup, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { Styles } from "../RegForm/styles";

export const RegForm = () => {
  const { register } = useForm();

  return (
    <Styles>
      <form className="login-form d-flex flex-column p-4 gap-3 shadow-lg rounded-2 mx-auto my-5">
        <ButtonGroup className="login-btn-links mb-3">
          <Button variant="link">
            <Link to="/login">Login </Link>
          </Button>

          <Button variant="primary">Registration</Button>
        </ButtonGroup>

        <label>
          Email:
          <input type="email" className="form-control" {...register("email")} />
        </label>
        <label>
          Password:
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
        </label>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
        <p className="text-center">
          Already a member? <Link to="/login">Login</Link>
        </p>
      </form>
    </Styles>
  );
};
