import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const navigate=useNavigate();
    const username=localStorage.getItem('username');
    async function handlelogout(){
        const response=await fetch('http://localhost:4000/logout',{
            method:'GET',
        });
        console.log(response);
        if(response.status===200){
            localStorage.removeItem('username');
            localStorage.removeItem('id');
            alert("Logged Out Successfully")
            navigate("/");
        }
    }
    
    return(
        <div className="parent">
            {!username && <Link className="fixed" to='/'>Google Keep Clone</Link>}
            {username && (
            <><Link className="fixed" to='/notes'>Google Keep Clone</Link><div className="right-side">
                    <div>Hello @{username}</div>
                    <Link onClick={handlelogout}>Logout</Link>
                </div></>
                )
            }
        </div>
    )
}
