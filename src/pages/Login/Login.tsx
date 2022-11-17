import React, { useState } from "react";
import { BasicLayout } from "../../components/BasicLayout/BasicLayout";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Notification } from "../../components/Notification/Notification";

export const Login = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <BasicLayout>
      <LoginForm toggleModal={toggleModal} />
      {isOpen && <Notification toggleModal={toggleModal} />}
    </BasicLayout>
  );
};
