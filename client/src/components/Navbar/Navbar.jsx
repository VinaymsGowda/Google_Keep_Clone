import React from "react";
import { Link,useNavigate } from "react-router-dom";

import './header.css';
import logo from '../../images/logo.png';

export function Navbar() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    async function handlelogout() {
        const response = await fetch('https://google-keep-clone-1xas.onrender.com/logout', {
            method: 'GET',
        });
        console.log(response);
        if (response.status === 200) {
            localStorage.removeItem('username');
            localStorage.removeItem('id');
            alert("Logged Out Successfully")
            navigate("/");
        }
    }

    const linkStyle={
        "display":"flex",
        "gap":"10px",
    }

    return (
        <header>
            
            {username && (
                <><div class="brand">
                    <Link to='/notes' style={linkStyle}>
                    <img src={logo} alt="logo"/>
                        <p>Keep - Clone</p>
                    </Link>
                </div><p>Hello, {username}</p><Link onClick={handlelogout}>Logout</Link></>
            )}
            
            {!username && (
                <div class="brand">
                <Link to='/' style={linkStyle}>
                <img src={logo} alt="logo"/>
                    <p>Keep - Clone</p>
                    </Link>
            </div>
            )}

        </header>
    )
}
