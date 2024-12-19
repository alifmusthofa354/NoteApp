import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      alert("Registration Successful");
    } catch (err) {
      alert(err.response.data.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2 className="logintitle">Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginbutton" type="submit">
        Register
      </button>
      {success && <div className="alert">{success}</div>}
    </form>
  );
};

export default Register;
