import React from "react";
import { useNavigate } from "react-router-dom";

import deleteIcon from '../../images/delete.svg';
import './notes.css';

export function Note(props) {

    const navigate = useNavigate();
    const id = props.id;
    function handleEdit() {
        navigate('/edit/' + id);
    }
    async function handleDelete(event) {
        event.stopPropagation();
        console.log("hi");
        const response = await fetch('https://google-keep-clone-1xas.onrender.com/note/deletenote/' + props.id, {
            method: 'DELETE',
        });
        props.fun();
    }
    return (
        <div className="note" onClick={handleEdit}>
            <h5>{props.title}</h5>
            <img src={deleteIcon} alt="delete" onClick={handleDelete}/>
            <p>{props.content}</p>
        </div>
    )
}