import React from "react";
import './Homepage.css';
import { Link } from "react-router-dom";
export function Cards(){
    return(
        <div>
            <h1 style={{"textAlign":"center", "padding":"10px"}}>Welcome to Google Keep Clone</h1>
            <div className="container">
            <Link className="link" to='/login'>
                <div className="card">
                    <p>Login to your Account</p>
                </div>
            </Link>
            <Link className="link" to='/register'>
                <div className="card">
                    <p>Create an Account</p>
                </div>
            </Link>
            </div>
            </div>
    )
}