import React, { useEffect, useState } from 'react';
import './NewToDo.css';
import { TaskForm } from './TaskForm';
import { Task } from './Task';

const NewToDo = () => {
    const id=localStorage.getItem('id');
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        getTasks();
    },[]);

    async function getTasks(){
        const response=await fetch('http://localhost:4000/todo/getTasks/'+id);
        const data=await response.json();
        setTasks(data);
    }
    
    async function addTask(taskname){
        console.log("hit");
        setTasks(prev=>{
            return [...prev,{
                "content":taskname,
            }]
        });
        const body={
            "tasks":taskname,
            "author":id,
        }

        const response=await fetch('http://localhost:4000/todo/newtodo',{
          'method':'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(body),
        });

        if(response.ok){
            getTasks();
        }
        
    }

    return (
        <div className='newtodoContainer'>
           <TaskForm onAdd={addTask}/>
            <br/>
                {
                    tasks.length>0 && (
                        tasks.map((todo)=>(
                            <Task key={todo._id} id={todo._id} value={todo.tasks} checked={todo.checked} tap={getTasks}/>
                        ))
                    )
                }
            </div>
    ); 
}

export default NewToDo;
