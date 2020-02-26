import React from 'react';
import { ReactSVG } from 'react-svg';
import './SubNav.css';

const SubNav = (props) => {
    props.updateMode(props.subnav.darkColors);

    return (
        <nav className="sub-nav" style={props.subnav.darkColors ? {backgroundColor:"rgba(0,0,0,0.8)"} : {backgroundColor:"#fafafa"}}>
            {props.subnav.elements.map(element => {
                return (
                    <div className={props.subnav.darkColors ? "dark-element" : "light-element"}>
                        <ReactSVG src={element.svgSrc} />
                        <div>{element.name}</div>
                    </div>
                )
            })}
        </nav>
    )
}

export default SubNav;