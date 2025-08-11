import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import O9o9_list from "../pages/O9o9_list";
import O9o9_detail from "../pages/O9o9_detail";
import O9o9_serve from "../pages/O9o9_serve";
import O9o9_contact from "../pages/o9o9_contact";
import NotFoundPage from "../pages/NotFoundPage";

const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/o9o9_list" element={<O9o9_list />} />
        <Route path="/o9o9_detail" element={<O9o9_detail />} />
        <Route path="/o9o9_serve" element={<O9o9_serve />} />
        <Route path="/o9o9_contact" element={<O9o9_contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default Navigation;
