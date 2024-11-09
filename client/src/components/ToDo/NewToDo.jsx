import React, { useEffect, useState } from 'react';
import './NewToDo.css';
import { TaskForm } from './TaskForm';
import { Task } from './Task';

const NewToDo = () => {
    const id=localStorage.getItem('id');
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        getTasks();
    });

    async function getTasks(){
        const response=await fetch('https://google-keep-clone-1xas.onrender.com/todo/getTasks/'+id);
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

        const response=await fetch('https://google-keep-clone-1xas.onrender.com/todo/newtodo',{
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
            <div className='listoftasks'>
                {
                    tasks.length>0 && (
                        tasks.map((todo)=>(
                            <Task key={todo._id} id={todo._id} value={todo.tasks} checked={todo.checked} tap={getTasks}/>
                        ))
                    )
                }
            </div>
            </div>
    ); 
}

export default NewToDo;
