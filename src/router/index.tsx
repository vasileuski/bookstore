import { Route, Routes } from "react-router-dom";
import { NewReleases } from "../pages/NewReleases/NewReleases";
import { Main } from "../pages/Main/Main";
import { ProgrammingBooks } from "../pages/ProgrammingBooks/ProgrammingBooks";
import { CookingBooks } from "../pages/CookingBooks/CookingBooks";
import { MathBooks } from "../pages/MathBooks/MathBooks";

export const RouterRoot = () => {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>} />
      <Route path="/newreleases" element={<NewReleases></NewReleases>} />
      <Route
        path="/programming"
        element={<ProgrammingBooks></ProgrammingBooks>}
      />
      <Route path="/cookingbooks" element={<CookingBooks></CookingBooks>} />
      <Route path="/mathbooks" element={<MathBooks></MathBooks>} />
    </Routes>
  );
};
