import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Homepage.css";
import { ThemeState } from "../../components/ThemeProvider";

export function Home() {
  const { theme } = ThemeState();
  const navigate = useNavigate();
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      navigate("/notes");
    }
  }, [navigate]);
  return (
    <div className="home-container">
      <h1 id={theme}>Welcome to Google Keep Clone</h1>
      <div className="inner-home-container">
        <Link className="link" to="/login">
          Login to your Account
        </Link>
        <Link className="link" to="/register">
          Create an Account
        </Link>
      </div>
    </div>
  );
}
