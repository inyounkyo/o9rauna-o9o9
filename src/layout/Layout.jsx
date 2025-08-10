import { useEffect } from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Outlet, useParams } from "react-router-dom";

const Layout = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  });

  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
