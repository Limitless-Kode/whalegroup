import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props){
    return(
        <div className={`card ${props.className}`}>
            <div className="card__icon">
                <span className={props.iconName}></span>
           </div>
            <div className="card__title">
                {props.title}
            </div>
            <div className="card__content">
                {props.text}
            </div>
            <div className="card__link">
                <Link to="/">{props.buttonText}</Link>
            </div>
        </div>
    );
}