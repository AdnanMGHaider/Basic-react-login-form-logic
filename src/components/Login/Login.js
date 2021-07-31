import React, { useState } from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" value={enteredEmail} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={enteredPassword} />
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
