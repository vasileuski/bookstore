import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Styles } from "../RegForm/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { fetchSignUpUser } from "../../store/features/userSlice";
import { getUserInfo } from "../../store/selectors/userSelectors";

type RegFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

interface INotification {
  toggleModal: (value: boolean) => void;
}

export const RegForm = ({ toggleModal }: INotification) => {
  const { isLoading } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegFormValues>();

  const onSubmit: SubmitHandler<RegFormValues> = ({ email, password }) => {
    setErrorMessage(null);
    if (password === confirmPassword) {
      dispatch(fetchSignUpUser({ email, password }))
        .then(() => navigate("/"))
        .catch((err) => {
          setErrorMessage(err);
        });
    }
  };

  const { password, confirmPassword } = watch();

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
            className="form-control"
            placeholder="exapmle@example.com"
            {...register("email", { required: "Email is required" })}
          />
        </label>

        <span className="text-danger">{errors.email?.message}</span>

        <label>
          Password:
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must contain at least 6 characters",
              },
            })}
          />
        </label>

        <span className="text-danger">{errors.password?.message}</span>

        <label>
          Confirm password
          <input type="password" className="form-control" {...register("confirmPassword")} />
          {confirmPassword === password ? (
            <></>
          ) : (
            <span className="text-danger">Password don't match</span>
          )}
        </label>

        <Button type="submit" variant="primary">
          {isLoading ? (
            <div className="spinner-border text-white">
              <span className="visually-hidden">Loading...</span>{" "}
            </div>
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-center">
          Have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </Styles>
  );
};
