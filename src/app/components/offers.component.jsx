import React from 'react';
import Card from './card.component';

export default function Offers(props){
    return(
        <div className="offers">
            {/* <div className="offers__title">
                <h2>What We Offer</h2>
            </div> */}
            <div className="offers__cards">
                    <Card 
                        iconName="flaticon-computing"
                        title="Creative Thinking" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />

                    <Card 
                        iconName="flaticon-education"
                        title="Mathematics" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />

                    <Card 
                        iconName="flaticon-communications"
                        title="English" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />

            </div>
            
        </div>
    );
}