import React, { useState } from "react";
import { BasicLayout } from "../../components/BasicLayout/BasicLayout";
import { RegForm } from "../../components/RegForm/RegForm";
import { Notification } from "../../components/Notification/Notification";

export const Registration = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <BasicLayout>
      <RegForm toggleModal={toggleModal} />
      {isOpen && <Notification toggleModal={toggleModal} />}
    </BasicLayout>
  );
};
