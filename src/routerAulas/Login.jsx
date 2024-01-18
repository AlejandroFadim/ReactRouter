import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navgate = useNavigate();
  function handleClick() {
    console.log("logou");
    navgate('/sobre')
  }
  return (
    <div>
      <h1>login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
