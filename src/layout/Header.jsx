import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h2 className="logo">
          <a href="/">o9o9</a>
        </h2>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/o9o9_list">o9_List</a>
          <a href="/o9o9_detail">Service</a>
          <a href="/o9o9_contact">o9_Contack</a>
          {/* <Link to="/login">
            <button className="btnLogin-popup">sss</button>
          </Link> */}
          <button
            className="btnLogin-popup"
            onClick={() => {
              location.href = "/login";
            }}
          >
            Login
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
