import React from 'react'
import Rating from './rating.component'

export default function TestimonyCard(props) {
    return (
        <div className="testimony_card">
            <div className="testimony_card__profile">
                <img src={props.image} alt="Profile"/>
            </div>
            <div className="testimony_card__testimony">
                <p>{props.testimony}</p>
            </div>

            <Rating number={props.rate}/>

            <div className="testimony_card__title">
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}
