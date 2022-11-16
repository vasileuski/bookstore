import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Styles } from "../RegForm/styles";
import { getFirebaseMessage } from "../../helpers/fireBaseErrors";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { fetchSignUpUser } from "../../store/features/userSlice";
import { getUserInfo } from "../../store/selectors/userSelectors";

type RegFormValues = {
  email: string;
  password: string;
  confirm: string;
};

interface INotification {
  toggleModal: (value: boolean) => void;
}

export const RegForm = ({ toggleModal }: INotification) => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<RegFormValues>({ defaultValues: { email: "", password: "", confirm: "" } });

  const onSubmit: SubmitHandler<RegFormValues> = (userInfo) => {
    dispatch(fetchSignUpUser(userInfo))
      .then(() => {
        toggleModal(true);
      })
      .catch((err) => {
        setErrorMessage(err);
      })
      .finally(() => {
        reset();
      });
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
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required!",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter a valid email",
              },
            }}
            render={({ field: { value, onChange } }) => {
              return (
                <input
                  className="form-control"
                  placeholder="exapmle@example.com"
                  value={value}
                  onChange={onChange}
                  type="email"
                />
              );
            }}
          ></Controller>
        </label>

        {errors.email && <span className="text-danger">{errors.email.message}</span>}

        <label>
          Password:
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Password must be more than 6 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must be less than 20 characters",
              },
            }}
            render={({ field: { value, onChange } }) => {
              return (
                <input className="form-control" value={value} onChange={onChange} type="password" />
              );
            }}
          ></Controller>
        </label>

        {errors && <span className="text-danger">{errors.confirm?.message}</span>}

        {errorMessage && <span className="text-danger">{errorMessage}</span>}

        <label>
          Confirm password
          <Controller
            control={control}
            name="confirm"
            rules={{
              required: "Confirm  your password",
              validate: (value: string) => {
                if (watch("password") !== value) {
                  return "Your passwords do no match";
                }
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input className="form-control" value={value} onChange={onChange} type="password" />
            )}
          />
        </label>

        <Button type="submit" variant="primary">
          Sign Up
          {isPendingAuth && (
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
