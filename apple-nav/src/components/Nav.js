import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const Nav = () => {
    return (
        <ul>
            <NavLink className="nav-link" to=""><ReactSVG src="headphones.svg" /></NavLink>
            <li key="0"><NavLink className="nav-link" to="/headphones">Headphones</NavLink></li>
            <li key="1"><NavLink className="nav-link" to="/speakers">Speakers</NavLink></li>
            <li key="2"><NavLink className="nav-link" to="/sownd-drive">Sownd Drive</NavLink></li>
            <li key="3"><NavLink className="nav-link" to="">Support</NavLink></li>
            <NavLink className="nav-link" to=""><ReactSVG src="bag.svg" /></NavLink>
        </ul>
    )
}

export default Nav;