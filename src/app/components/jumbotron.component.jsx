import React from 'react';


export default function Jumbotron(props){
    return(
    <section className="jumbotron">
      <div className="jumbotron__description">
        <div className="jumbotron__description__text">
          <p>The Whale Learning Group</p>
        </div>
        <div className="jumbotron__description__title">
          <h1>Discovering Geniuses Through Wisdom Intelligence Training</h1>
        </div>
        <div className="button">
          <button className="btn">Get Started</button>
        </div>
      </div>
      <div className="jumbotron__image">
        <div className="jumbotron__box"></div>
        <div className="jumbotron__box"></div>
        <div className="jumbotron__box"></div>
        <div className="jumbotron__box"></div>
      </div>
    </section>
    );
}