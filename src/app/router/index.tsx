import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Login } from "../pages";







const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element=<Login/> />
          <Route path="/home" element=<Home/> />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;