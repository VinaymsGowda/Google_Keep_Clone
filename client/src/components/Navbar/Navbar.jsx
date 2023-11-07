import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const navigate=useNavigate();
    async function handlelogout(){
        const response=await fetch('http://localhost:4000/logout',{
            method:'GET',
        });
        console.log(response);
        if(response.status===200){
            localStorage.removeItem('username');
            alert("Logged Out Successfully")
            navigate("/");
        }
    }
    const username=localStorage.getItem('username');
    return(
        <div className="parent">
            <Link className="fixed" to='/'>Google Keep Clone</Link>
            {username && (
                    <div className="right-side">
                        <div>Hello @{username}</div>
                        <Link onClick={handlelogout}>Logout</Link>
                    </div>
                )
            }
        </div>
    )
}
