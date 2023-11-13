import React from "react";
import {useNavigate} from "react-router-dom";
import './sidebar.css';
import hamburger from "../../images/hamburger.svg";
import close from "../../images/close.svg";

export function Sidebar(props) {

    const navigate=useNavigate();
    function handleNote(){
        console.log("Hit note");
        navigate('/notes');
    }

    function handleToDo(){
        navigate('/todo');
        console.log("Hit todo");
    }

    return (
        <>
            <input type="checkbox" id="sidebar-checkbox" />
            <label for="sidebar-checkbox" id="sidebar-hamburger"><img src={hamburger} alt="hamburger"/></label>
            <label for="sidebar-checkbox" id="sidebar-close"><img src={close} alt="hamburger"/></label>
            <div class="sidebar">
                <ul>
                    <li onClick={handleNote}>Note</li>
                    <li onClick={handleToDo}>To Do</li>
                </ul>
            </div>
        </>
    )
}