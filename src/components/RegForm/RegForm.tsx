import React from "react";
import { ButtonGroup, Button, InputGroup, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

import { Styles } from "../RegForm/styles";
const url = "https://studapi.teachmeskills.by/auth/users/";

type SignUpFormValues = {
  email: string;
  password: string;
};

export const RegForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = ({ email, password }) => {
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: email,
    //     email,
    //     password,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    const user = {
      email,
      password,
    };
    console.log(user);

    reset();
  };

  return (
    <Styles>
      <form
        className="login-form d-flex flex-column p-4 gap-3 shadow-lg rounded-2 mx-auto my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ButtonGroup className="login-btn-links mb-3">
          <Button variant="link">
            <Link to="/login">Login </Link>
          </Button>

          <Button variant="primary">Registration</Button>
        </ButtonGroup>

        <label>
          Email:
          <input
            type="email"
            className="form-control"
            placeholder="example@example.com"
            {...register("email", { required: "Email is required" })}
          />
        </label>
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
        <label>
          Password:
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 3,
                message: "Password must be at least 3 characters",
              },
            })}
          />
        </label>
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
        {/* <label>
          Repeat password:
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </label> */}
        {/* {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )} */}
        <Button type="submit" variant="primary">
          Sign In
        </Button>
        <p className="text-center">
          Have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </Styles>
  );
};
