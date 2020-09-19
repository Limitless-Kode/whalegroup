import React,{useState, useRef} from 'react'
import TestimonyCard from './testimonyCard.component'

export default function Testimonies() {
    const slider = useRef();
    const screen = useRef();

    const [direction, setdirection] = useState();

    function transitionEnd(){
        if (direction < 1) {
            slider.current.appendChild(slider.current.firstElementChild);
            slider.current.appendChild(slider.current.firstElementChild);
          }else{
            slider.current.prepend(slider.current.lastElementChild);
            slider.current.prepend(slider.current.lastElementChild);
          }
        
           slider.current.style.transition = 'none';
           slider.current.style.transform = `translate(0)`;
           setTimeout(()=>{
             slider.current.style.transition = 'all 0.5s';
           },100)
    }

    function previous(){
        setdirection(1);
        screen.current.style.justifyContent = 'flex-end';
        slider.current.style.transform = `translate(33%)`;
    }

    function next(){
        setdirection(-1);
        screen.current.style.justifyContent = 'flex-start';
        slider.current.style.transform = `translate(-33%)`;
    }

    return (
        <section className="testimonies">
            <div className="testimonies__prev" onClick={previous}>
                <i className="ion-ios-arrow-back"></i>
            </div>
            <div className="testimonies__screen" ref={screen}>
                <div className="testimonies__screen__slide" onTransitionEnd={transitionEnd} ref={slider}>
                <TestimonyCard 
                    title="Peter Claver - Dotlogics Dev" 
                    rate={4} image={require('../../assets/images/testimonies/user.png')}
                    testimony="You can’t succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself."
                />
                <TestimonyCard 
                    title="Peter Chris - Dotlogics Dev" 
                    rate={5} image={require('../../assets/images/testimonies/user.png')}
                    testimony="You can’t succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself."
                />
                <TestimonyCard 
                    title="Peter Amobila - Dotlogics Dev" 
                    rate={3} image={require('../../assets/images/testimonies/user.png')}
                    testimony="You can’t succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself."
                />
                </div>
            </div>
            <div className="testimonies__next" onClick={next}>
            <i className="ion-ios-arrow-forward"></i>
            </div>
        </section>
    )
}
