import React from "react";
import { BasicLayout } from "../../components/BasicLayout/BasicLayout";
import { MainSearch } from "../../components/MainSearch/MainSearch";
import { Slider } from "../../components/Slider/Slider";
import { useInput } from "../../hooks/useInput";

export const Main = () => {
  return (
    <BasicLayout>
      <Slider />
      <MainSearch />
    </BasicLayout>
  );
};
