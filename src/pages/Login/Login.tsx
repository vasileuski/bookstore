import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { NaviBar } from "../../components/NaviBar/NaviBar";

export const Login = () => {
  return (
    <>
      <NaviBar />
      <LoginForm />
      <Footer />
    </>
  );
};
