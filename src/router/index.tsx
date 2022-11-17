import { Route, Routes } from "react-router-dom";
import { NewReleases } from "../pages/NewReleases/NewReleases";
import { Main } from "../pages/Main/Main";
import { ProgrammingBooks } from "../pages/ProgrammingBooks/ProgrammingBooks";
import { CookingBooks } from "../pages/CookingBooks/CookingBooks";
import { MathBooks } from "../pages/MathBooks/MathBooks";
import { Book } from "../pages/Book/Book";
import React from "react";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { CartPage } from "../pages/CartPage/CartPage";
import { RequireAuth } from "../components/RequireAuth/RequireAuth";

export const RouterRoot = () => {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>} />
      <Route path="/newreleases" element={<NewReleases></NewReleases>} />
      <Route path="/programming" element={<ProgrammingBooks></ProgrammingBooks>} />
      <Route path="/cookingbooks" element={<CookingBooks></CookingBooks>} />
      <Route path="/mathbooks" element={<MathBooks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/selectedbook/:isbn13" element={<Book />} />
      <Route element={<RequireAuth />}>
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/pagenotfound" element={<PageNotFound />} />
    </Routes>
  );
};
