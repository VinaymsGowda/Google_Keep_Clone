import React, { useState } from 'react'
import './NewToDo.css';

export const TaskForm = (props) => {

    const [taskname,setTaskName]=useState('');
    

    function handleSubmission(event){
      if(taskname.length===0){
        alert("tasks cannot be empthy")
        return;
      }
        event.preventDefault();
        props.onAdd(taskname);
        setTaskName('')
    
    }


    function handletask(event){
        setTaskName(event.target.value);
    }

    
  return (
    <form onSubmit={handleSubmission}>
        <button className='but'>+</button>
        <input className='form-todo' type='text' placeholder='Add a new Item' value={taskname} onChange={handletask}/>
    </form> 
  )
}
