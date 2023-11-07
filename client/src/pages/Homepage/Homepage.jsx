import react from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Cards } from "./Cards";
import './Homepage.css';
export function Homepage(){
    const username=localStorage.getItem('username');
    return(
        <div>
            <Navbar/>
            {(!username) && <Cards/>}
            {username && (
                <h1>Notes come here</h1>
            )}
        </div>
    )
}