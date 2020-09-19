import React from 'react';

export default function TeacherCard(props){
    return(
        <div className="teacher_card">
            <div className="teacher_card__image">
                <img src={props.image} alt="Profile"/>
            </div>
            <div className="teacher_card__description">
                <div className="teacher_card__description__title">
                    <h3>{props.title}</h3>
                </div>
                <div className="teacher_card__description__subtext">
                    <p>{props.subtext}</p>
                </div>
            </div>
        </div>
    );
}