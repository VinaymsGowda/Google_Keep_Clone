import React, { useState } from "react";
import './addNote.css'
import { ThemeState } from "../ThemeProvider";

export function CreateNote(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    async function handlesubmit(event) {
        event.preventDefault();
        const body = {
            title: title,
            content: content,
            id: localStorage.getItem('id'),
        }
        const response = await fetch('https://google-keep-clone-1xas.onrender.com/note/addnote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (response.status === 400) {
            alert("Empthy Note Discarded");
        }
        else if (response.ok) {
            const data = await response.json();
            console.log(data);
            setContent("");
            setTitle("");
            props.funct();
            // window.location.reload();
        }
        //send a post request from here to backend
    }
    function handletitle(event) {
        setTitle(event.target.value);
    }
    function handlecontent(event) {
        setContent(event.target.value);
    }
    const {theme}=ThemeState();
    return (
        
        <div className="add-note">
            <form onSubmit={handlesubmit} id={theme}>
                <input type="checkbox" id="note-expand-checkbox" />
                <label htmlFor="note-expand-checkbox"></label>
                <input type="text" id="title-input" placeholder="Title" value={title} onChange={handletitle}/>
                <input type="text" id="content-input" placeholder="Description" value={content} onChange={handlecontent}/>
                <input type="submit" value="Add Note" id="btn-add-note" />
            </form>
        </div>
    )
}