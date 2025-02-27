import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import PasswordStrength from "./PasswordStrength";
export function Register() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function handleusername(event) {
    setusername(event.target.value);
  }

  async function handlelogin(event) {
    event.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/register`,
      {
        body: JSON.stringify({ username, password }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    const msg = await response.json("msg");
    console.log(msg.msg);
    const message = msg.msg;
    if (response.ok) {
      alert("Successful Registration");
      navigate("/login");
    }
    if (response.status === 400) {
      alert(message);
    }
  }
  return (
    <div className="signupCompo">
      <form className="form" onSubmit={handlelogin}>
        <h1>Create an Account</h1>
        <div>
          <input
            className="inputfield"
            type="text"
            placeholder="username"
            onChange={handleusername}
            value={username}
          />
        </div>
        <PasswordStrength password={password} setpassword={setpassword} />
        <div className="submit">
          <button type="submit" className="login">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
