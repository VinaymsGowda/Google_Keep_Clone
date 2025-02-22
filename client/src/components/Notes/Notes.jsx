import React, { useEffect, useState } from "react";
import { CreateNote } from "./CreateNewNote";
import { Note } from "./Note";
import { Sidebar } from "../Sidebar/Sidebar";
import "./notes.css";
import { ThemeState } from "../ThemeProvider";

export function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []); // The empty dependency array means it only runs once when the component is mounted

  async function fetchNotes() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/note/getnote`,
        {
          method: "GET",
          headers: {
            id: localStorage.getItem("id"),
          },
        }
      );
      const data = await response.json();
      // console.log(data);
      setNotes(data); // Store the fetched notes in the state
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  const { theme } = ThemeState();
  return (
    <>
      {/* <Sidebar/> */}
      <CreateNote funct={fetchNotes} />
      <div className="notes">
        {notes.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            fun={fetchNotes}
          />
        ))}
      </div>
    </>
  );
}
