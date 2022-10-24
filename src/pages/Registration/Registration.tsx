import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { NaviBar } from "../../components/NaviBar/NaviBar";
import { RegForm } from "../../components/RegForm/RegForm";

export const Registration = () => {
  return (
    <>
      <NaviBar />
      <RegForm />
      <Footer />
    </>
  );
};
