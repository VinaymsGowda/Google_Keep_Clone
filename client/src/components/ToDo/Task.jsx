import { useState } from "react";
import { Checkbox } from "./Checkbox";
import deleteIcon from '../../images/delete.svg';

export function Task(props){

    const [checked,setChecked]=useState(props.checked);
   
    async function taps(){
        console.log("Before");
        console.log((props.id));
        console.log(checked);

        const response=await fetch('https://google-keep-clone-1xas.onrender.com/todo/changecheck/'+props.id,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"status":checked}),
        });
        if(!response.ok){
            console.error("Failed");
            return;
        }
        const updatedTask = await response.json();
        setChecked(updatedTask.checked);
        props.tap();
    }

    async function handleDelete(event){
        event.stopPropagation();
        console.log("Deleted id");
        const response=await fetch('https://google-keep-clone-1xas.onrender.com/todo/deleteToDo/'+props.id,{
            method:'DELETE',
        });
        if(response.ok){
            props.tap();
        }
    }
    return(
        <div className={"task "+(checked?'done':'')}  onClick={taps}>
            <Checkbox key={props.id} id={props.id} value={checked}/><span>{props.value}</span>
            <img src={deleteIcon} alt="delete" className="trash" onClick={handleDelete}/>
        </div>
    )
}