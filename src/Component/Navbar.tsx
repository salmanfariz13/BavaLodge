import {  NavLink } from "react-router-dom"
import logo from "./assets/logo1.png"

export const Navbar=()=>{
    return(
        <>
        <header className="header">
            <nav className="nav-container">
                <NavLink to="/">
                </NavLink>
            </nav>
        </header>
        <div className="container">
                <div className="row">
                    <nav className="nav-bar">
                        <div className="menu-left">
                            <NavLink to="/"><img src={logo} alt="image" className="image"/></NavLink>
                        </div>
                        <div className="menu-right">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About us</NavLink></li>
                                <li><NavLink to="/route">Route to find</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}