import React from "react";
import logo from '../images/logo.png'

function NavBar(){
    return (
        <nav className="nav-bar">
            <img src={logo} alt="Abnb Logo" className="logo"></img>
        </nav>
    )
}

export default NavBar



