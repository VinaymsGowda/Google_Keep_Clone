import React from "react";
import { useNavigate } from "react-router-dom";

import deleteIcon from "../../images/delete.svg";
import deleteIcon2 from "../../images/delete1.svg";
import "./notes.css";
import { ThemeState } from "../ThemeProvider";

export function Note(props) {
  const navigate = useNavigate();
  const id = props.id;
  const { theme } = ThemeState();
  function handleEdit() {
    navigate("/edit/" + id);
  }
  async function handleDelete(event) {
    event.stopPropagation();
    console.log("hi");
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/note/deletenote/${props.id}`,
      {
        method: "DELETE",
      }
    );
    props.fun();
  }
  return (
    <div className="note" onClick={handleEdit}>
      <h5>{props.title}</h5>
      <img
        src={theme === "dark" ? deleteIcon2 : deleteIcon}
        alt="delete"
        onClick={handleDelete}
      />
      <p>{props.content}</p>
    </div>
  );
}
