import React from "react";
import { MailOpen } from "react-ionicons";
import { LockClosed } from "react-ionicons";
import { Close } from "react-ionicons";
import { Accessibility } from "react-ionicons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="wrapper active-popup active">
        <span
          className="icon-close"
          onClick={() => {
            location.href = "/";
          }}
        >
          <Close color={"#fff"} title={"close"} height="20px" width="20px" />
        </span>

        <div className="form-box login">
          <h2>Login</h2>
          <form action="">
            <div className="input-box">
              <span className="icon">
                <MailOpen
                  color={"#00000"}
                  title={"mail"}
                  height="20px"
                  width="20px"
                />
              </span>
              <input type="eamil" required />
              <label>Eamil</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <LockClosed
                  color={"#00000"}
                  title={"lock"}
                  height="20px"
                  width="20px"
                />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <a
                  href="#"
                  className="register-link"
                  //   onClick={() => {
                  //     loginPopFn("wrapper active-popup active");
                  //   }}
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <h2>Registration</h2>
          <form action="">
            <div className="input-box">
              <span className="icon">
                <Accessibility
                  color={"#00000"}
                  title={"user"}
                  height="20px"
                  width="20px"
                />
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <MailOpen
                  color={"#00000"}
                  title={"mail"}
                  height="20px"
                  width="20px"
                />
              </span>
              <input type="eamil" required />
              <label>Eamil</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <LockClosed
                  color={"#00000"}
                  title={"lock"}
                  height="20px"
                  width="20px"
                />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?
                <a
                  href="#"
                  className="login-link"
                  //   onClick={() => {
                  //     loginPopFn("wrapper active-popup");
                  //   }}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
