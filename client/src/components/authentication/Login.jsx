import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
export function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      navigate("/notes");
    }
  }, [navigate]);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function handleusername(event) {
    setusername(event.target.value);
  }
  function handlepassword(event) {
    setpassword(event.target.value);
  }
  async function handlelogin(event) {
    event.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      body: JSON.stringify({ username, password }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      //login is success so set username now
      localStorage.setItem("username", username);
      localStorage.setItem("id", data.id);
      alert("Successful Login");
      //now navigate to home
      navigate("/notes");
    } else {
      alert("Invalid Login Credentials");
    }
  }
  return (
    <div className="s">
      <div>
        <form className="form" onSubmit={handlelogin}>
          <h1>Enter Valid Credentials and Login to Your Account </h1>
          <div>
            <input
              className="inputfield"
              type="text"
              placeholder="username"
              onChange={handleusername}
              value={username}
            />
          </div>
          <div>
            <input
              className="inputfield"
              type="password"
              placeholder="password"
              value={password}
              onChange={handlepassword}
            />
          </div>
          <div className="submit">
            <button type="submit" className="login">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
