import React from 'react';
import Card from './card.component';

export default function Offers(props){
    return(
        <div className="offers">
               {/*  <div className="offers__title">
                <h2>Our Brands</h2>
            </div> */}
            <div className="offers__cards">
                    <Card 
                        iconName="flaticon-computing"
                        title="The WIT Schools" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />
                    
                     <Card 
                        iconName="flaticon-computing"
                        title="Treasure Kids Newspaper" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />

                     <Card 
                        iconName="flaticon-computing"
                        title="Pay and Learn" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />

                     <Card 
                        iconName="flaticon-computing"
                        title="Treasure Kids TV" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />

                     <Card 
                        iconName="flaticon-computing"
                        title="Did You Know" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />

                    <Card 
                        iconName="flaticon-communications"
                        title="Book Bug Club" 
                        text="Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi."
                        buttonText="Read More"
                        buttonClass="small outline-primary"
                    />

            </div>
            
        </div>
    );
}