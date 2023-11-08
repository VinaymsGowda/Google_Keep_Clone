import React, { useState } from "react";
import './CreateNote.css'

export function CreateNote(){
    const [title, setTitle]=useState("");
    const [content,setContent]=useState("");
    async function handlesubmit(event){
        event.preventDefault();
        const body={
            title:title,
            content:content,
            id:localStorage.getItem('id'),
        }
       const response=await fetch('http://localhost:4000/note/addnote',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(body),
       });
       if(response.status===400){
            alert("Empthy Note Discarded");
       }
       else if(response.ok){
           const data=await response.json();
           console.log(data);
           window.location.reload();
        }
        //send a post request from here to backend
    }
    function handletitle(event){
        setTitle(event.target.value);
    }
    function handlecontent(event){
        setContent(event.target.value);
    }
    return(
        <div className="note-form">
            <form onSubmit={handlesubmit}>
                <div className="title">
                <input type="text" placeholder="title" value={title} onChange={handletitle}/>
                </div>
                <div className="content">
                <textarea placeholder="Content" value={content} onChange={handlecontent} rows={5} cols={50}/>
                </div>
                <input type="submit" className="Add" value="Add"/>
            </form>
        </div>
    )
}