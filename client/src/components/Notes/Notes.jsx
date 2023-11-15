import React, { useEffect, useState } from "react";
import "./notes.css";
import { CreateNote } from "./CreateNewNote";
import { Note } from "./Note";
import { Sidebar } from "../Sidebar/Sidebar";

export function Notes(){
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []); // The empty dependency array means it only runs once when the component is mounted

    async function fetchNotes() {
        try {
            const response = await fetch('https://google-keep-clone-1xas.onrender.com/note/getnote',{
                method:'GET',
               headers:{
                id:localStorage.getItem('id')
               }
            });
            const data = await response.json();
            // console.log(data);
            setNotes(data); // Store the fetched notes in the state
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    }

    
    
return(
    <>
    <Sidebar/>
    <CreateNote funct={fetchNotes}/>
    <div className="notes">
        {
            notes.length>0 && (
                notes.map(note=>(
                <Note key={note._id} id={note._id} title={note.title} content={note.content} fun={fetchNotes}/>
                ))
            )
        }
    </div>
    </>
)
}