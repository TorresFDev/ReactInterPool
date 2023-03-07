import React from 'react';
import  {useState} from "react";
import "./styles/NavBar.css";


const NavBar =()=> {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> InterPool Bola 9 </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> INICIO</a>
                <a href="#"> SALAS</a>
                <a href="#"> FIXTURE</a>
                <a href="#"> REGLAMENTACIONES</a>
                <a href="#"> FOTOS</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    )
}

export default NavBar