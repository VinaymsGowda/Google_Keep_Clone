import React, { useState } from 'react'
import './NewToDo.css';

export const TaskForm = (props) => {

    const [taskname,setTaskName]=useState('');
    

    function handleSubmission(event){
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
