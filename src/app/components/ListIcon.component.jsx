import React from 'react';

export default function ListIcon(props){
    return(
        <div className="list">
            <div className="icon">
                <span className={props.iconName}></span>
            </div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}