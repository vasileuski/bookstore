import React from "react";
import { BasicLayout } from "../../components/BasicLayout/BasicLayout";
import { MainSearch } from "../../components/MainSearch/MainSearch";
import { Slider } from "../../components/Slider/Slider";

export const Main = () => {
  return (
    <BasicLayout>
      <Slider />
      <MainSearch />
    </BasicLayout>
  );
};
