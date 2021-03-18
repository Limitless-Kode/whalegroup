import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from "react-icons/fa";
// import useScript from '../../hooks/ImportScript';

export default function Navigation(){
    const [drawerOpenState, setDrawerOpenState] = useState(false);
    
    return(
        <div className="navigation">
            <div className="logo">
                <img src={require("../../assets/images/logo.png")} alt="The Whale Group Logo" height="45px"/>
            </div>
            <div id="menu" role="button" onClick={()=> setDrawerOpenState(true)}>
                <FaBars />
            </div>
            <div className={`navigation__links ${drawerOpenState ? "show" : ""}`} >
                <div id="close" role="button" onClick={()=> setDrawerOpenState(false)}>
                    <FaTimes />
                </div>
                <Link to="/" onClick={()=> setDrawerOpenState(false)}>Home</Link>
                <Link to="/about" onClick={()=> setDrawerOpenState(false)}>About</Link>
                <Link to="/gallery" onClick={()=> setDrawerOpenState(false)}>Gallery</Link>
                <Link to="/instructors" onClick={()=> setDrawerOpenState(false)}>Instructors</Link>
                <Link className="btn medium" to="/apply" onClick={()=> setDrawerOpenState(false)}>Apply Now</Link>
            </div>
        </div>
    );
}