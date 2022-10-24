import React from "react";
import { Styles } from "./styles";
import { Button, ButtonGroup } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type SignUpFormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    const newUser = {
      ...data,
      id: Date.now(),
    };
    console.log(newUser);

    reset();
  };

  return (
    <Styles>
      <form
        className="login-form d-flex flex-column p-4 gap-3 shadow-lg rounded-2 mx-auto my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ButtonGroup className="login-btn-links mb-3">
          <Button variant="primary">Login</Button>

          <Button variant="link" style={{ color: "white" }}>
            <Link to="/registration">Registration </Link>
          </Button>
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
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </label>
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
        <Button type="submit" variant="primary">
          Sign In
        </Button>
        <p className="text-center">
          Not a member? <Link to="/registration">Register</Link>
        </p>
      </form>
    </Styles>
  );
};
