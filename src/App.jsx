import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import UserProfile from "./pages/account/profile";
import UserOrder from "./pages/account/order";
import Home from "./pages/home";
const NotFoundPage = lazy(() => import("./pages/404"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/order" element={<UserOrder />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
