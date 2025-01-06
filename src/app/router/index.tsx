import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages";







const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element=<Login/> />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;