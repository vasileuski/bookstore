import { Route, Routes } from "react-router-dom";
import { Catalog } from "../pages/Catalog/Catalog";
import { Main } from "../pages/Main/Main";

export const RouterRoot = () => {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/catalog" element={<Catalog></Catalog>}></Route>
    </Routes>
  );
};
