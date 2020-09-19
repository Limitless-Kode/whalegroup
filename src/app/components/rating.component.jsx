import React from 'react';

function Stars(props){
    let stars = [];
    if(props.number > 5) return <span></span>;
    for(let i = 0; i < props.number; i++){
        stars.push(<i className="ion-ios-star star active" key={`r${i}`}></i>);
    }
    if(props.number < 5){
        for(let i = 0; i < (5 - props.number); i++){
            stars.push(<i className="ion-ios-star star" key={`nr${i}`}></i>);
        } 
    }

    return stars;
}


export default function Rating(props) {
    return (
            <Stars number={props.number}/>
    )
}
