import React from 'react';
import { Link } from 'react-router-dom';
// import useScript from '../../hooks/ImportScript';

export default function Navigation(){
   // useScript("../../assets/js/jquery.min.js");
   
    return(
        <div className="navigation">
            <div className="logo">
                <img src={require("../../assets/images/logo.png")} alt="The Whale Group Logo" height="45px"/>
            </div>
            <div className="navigation__links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/instructors">Instructors</Link>
                <Link className="btn medium" to="/apply">Apply Now</Link>
            </div>
        </div>
    );
}