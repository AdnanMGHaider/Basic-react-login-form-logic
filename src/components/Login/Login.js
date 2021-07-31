import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" />
      </div>
      <div></div>
    </form>
  );
};

export default Login;
