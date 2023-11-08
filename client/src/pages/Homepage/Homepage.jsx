import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Cards } from "./Cards";
import './Homepage.css';
export function Homepage(){
    return(
        <div>
            <Cards/>     
        </div>
    )
}