import React from 'react';
import Nav from './Nav';
import './NavWrapper.css';

const NavWrapper = (props) => {
    console.log(props.darkMode);
    return (
        <nav className="top-nav" style={props.darkMode ? {backgroundColor:"black"} : {backgroundColor:"rgba(0,0,0,0.8)"}}>
            <Nav />
        </nav>
    )
}

export default NavWrapper;