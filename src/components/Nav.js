import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom';
import logo from "../styles/TrashTalkLogo.svg";

function Nav() {
    return(
        <header>
        <img class="logo" src={logo} alt="logo"/>
        <div>
            <ul className="nav-links">
                <Link to="/" className="nav-style">
                    <li>Home</li>
                </Link>
                <Link to="/board" className="nav-style">
                    <li>Board</li>
                </Link>
                <Link to="/post" className="nav-style">
                    <li>Post</li>
                </Link>
                <Link to="/about" className="nav-style">
                    <li>About</li>
                </Link>
            </ul>
        </div>
        <Link to="/login" className="cta">
            <button>Login</button>
        </Link>
        </header>
    )
}

export default Nav