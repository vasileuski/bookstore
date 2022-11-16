import React from "react";
import { Footer } from "../Footer/Footer";
import { NaviBar } from "../NaviBar/NaviBar";

interface IBasicLayout {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: IBasicLayout) => {
  return (
    <div className="d-flex flex-column vh-100">
      <NaviBar />
      <div className="container flex-grow-1">{children}</div>
      <Footer />
    </div>
  );
};
