import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, ButtonGroup } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getFirebaseMessage } from "../../helpers/fireBaseErrors";

import { Styles } from "./styles";

type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = ({ email, password }) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(getFirebaseMessage(err.code));
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        {errors.email && <span className="text-danger">{errors.email.message}</span>}
        <label>
          Password:
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 18,
                message: "Password must be no longer than 18 characters",
              },
            })}
          />
        </label>
        {errors.password && <span className="text-danger">{errors.password.message}</span>}
        {errorMessage && <span className="text-danger">{errorMessage}</span>}
        <Button type="submit" variant="primary">
          Sign In
          {isLoading && (
            <div className="spinner-border text-white">
              <span className="visually-hidden">Loading...</span>{" "}
            </div>
          )}
        </Button>
        <p className="text-center">
          Not a member? <Link to="/registration">Register</Link>
        </p>
      </form>
    </Styles>
  );
};
