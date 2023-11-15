import React, { useState } from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
export function Register(){
    const navigate=useNavigate();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");

    function handleusername(event){
        setusername(event.target.value);
    }
    function handlepassword(event){
        setpassword(event.target.value);
    }
    async function handlelogin(event){
        event.preventDefault();

        const response=await fetch('https://google-keep-clone-1xas.onrender.com/register',{
            body:JSON.stringify({username,password}),
            method:'POST',
            headers:{'Content-Type':'application/json'},
        });
        const msg=await response.json('msg');
        console.log(msg.msg);
        const message=msg.msg;
        if(response.ok){ 
            alert("Successful Registration");
            navigate("/login");
        }
        if(response.status===400){
            alert(message);
        }
    }
    return(
        <div>
        <form className="form" onSubmit={handlelogin}>
        <h1>Create an Account</h1>
            <div>
                <input className="inputfield" type="text" placeholder="username" onChange={handleusername} value={username}/>
            </div>
            <div>
                <input className="inputfield" type="password" placeholder="password" value={password} onChange={handlepassword}/>
            </div>
            <div className="submit">
                <button type="submit" className="login">Submit</button>
            </div>
        </form>
        </div>
    )
}