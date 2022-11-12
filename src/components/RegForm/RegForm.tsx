import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ButtonGroup, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Styles } from "../RegForm/styles";
import { getFirebaseMessage } from "../../helpers/fireBaseErrors";

type RegFormValues = {
  email: string;
  password: string;
};

export const RegForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegFormValues>();

  const onSubmit: SubmitHandler<RegFormValues> = ({ email, password }) => {
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
          Sign Up
          {isLoading && (
            <div className="spinner-border text-white">
              <span className="visually-hidden">Loading...</span>{" "}
            </div>
          )}
        </Button>
        <p className="text-center">
          Have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </Styles>
  );
};
