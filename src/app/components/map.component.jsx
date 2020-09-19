import React from 'react'

export default function Map() {
    return (
        <div className="map">
         <iframe 
            title="Map of the Wit School"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15881.956698629667!2d-0.152395!3d5.6421274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bb48355f00b2d61!2sThe%20Wit%20School!5e0!3m2!1sen!2sgh!4v1600550707894!5m2!1sen!2sgh" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            style={{border: 0}}
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0">
        </iframe>   
        </div>
    )
}
