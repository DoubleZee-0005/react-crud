import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5 mb-5">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mx-5">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                </li>                
                </ul>
                
            </div>
                <Link className = "btn btn-outline-light" to = "/users/add">Add user</Link>
            </nav>
        </div>
    )
}

export default NavBar
