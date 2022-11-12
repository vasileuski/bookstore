import React from "react";
import { Footer } from "../Footer/Footer";
import { NaviBar } from "../NaviBar/NaviBar";

interface IBasicLayout {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: IBasicLayout) => {
  return (
    <>
      <NaviBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
