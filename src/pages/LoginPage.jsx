import React from "react";
import Login from "../components/Login";
import ButtonLink from "../components/ButtonLink";

const LoginPage = () => {
  return (
    <>
      <div className="login-page">
        <Login />
      </div>
      <div className="login-page">
        <p>
          Don't have an account?{" "}
          <ButtonLink to="/register">Register</ButtonLink>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
