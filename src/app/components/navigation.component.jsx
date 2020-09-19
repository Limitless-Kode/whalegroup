import React from 'react';
import { Link } from 'react-router-dom';
// import useScript from '../../hooks/ImportScript';

export default function Navigation(){
   // useScript("../../assets/js/jquery.min.js");
   
    return(
        <div className="navigation">
            <div className="logo">Logo</div>
            <div className="navigation__links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/instructors">Instructors</Link>
                {/* <Link className="btn" to="/apply">Apply Now</Link> */}
            </div>
        </div>
    );
}