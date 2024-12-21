import React from "react";
import Register from "../components/Register";
import ButtonLink from "../components/ButtonLink";

const RegisterPage = () => {
  return (
    <>
      <div className="login-page">
        <Register />
      </div>
      <div className="login-page">
        <p>
          Already have an account?{" "}
          <ButtonLink to="/notev2/login">Login</ButtonLink>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
