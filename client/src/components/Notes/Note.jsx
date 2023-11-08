import React from "react";
import './Notes.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function Note(props){

    const navigate=useNavigate();
    const id=props.id;
    function handleEdit(){
        navigate('/edit/'+id);
    }
    async function handleDelete(event){
        event.stopPropagation();
        console.log("hi");
        const response=await fetch('http://localhost:4000/note/deletenote/'+props.id,{
            method:'DELETE',
        });
        if(response.ok){
            window.location.reload();
        }
    }
    return(
            <div className="notes" id={props.id} onClick={handleEdit}>
                <div className="title">{props.title}</div><br></br>
                <div className="content" spellCheck="false">{props.content.substr(0,15)}</div>
        <span className="delete" onClick={handleDelete}>Delete</span>
            </div>
    )
}