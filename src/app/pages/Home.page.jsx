import React from 'react';
import Gallery from '../components/gallery.component';
import Jumbotron from '../components/jumbotron.component';
import ListIcon from '../components/ListIcon.component';
import Map from '../components/map.component';
import Offers from '../components/offers.component';
import Quote from '../components/quote.component';
import Teachers from '../components/teachers.component';
import Testimonies from '../components/Testimonies.component';

export default function Home(props) {
    return (
        <div>
            <Jumbotron />
            <Offers />
            <section className="know_more">
                <div className="know_more__description">
                    <div className="title">
                        <h2>Want to Know more</h2>
                    </div>
                    <div className="description">
                        <p>Whale Learning Group is a portfolio of exciting brands, each of which specialise  in experiential learning and play for children, content for TV &amp; Radio, spanning print, online, outdoor events for schools, literacy programs, summer camps and preschool, afterschool and K-12 for Children.</p>
                    </div>
                    <div className="know_more__description__list">
                        <ListIcon iconName="flaticon-computing" text="Creative ideas base"/>
                        <ListIcon iconName="flaticon-education" text=" Assages of sorem gpsum ilable"/>
                        <ListIcon iconName="flaticon-communications" text="Have suffered alteration in so"/>
                        <ListIcon iconName="flaticon-business" text="Randomised words whi"/>
                    </div>
                    <div className="button">
                        <button>More About Us</button>
                    </div>
                </div>
                <div className="images">
                    <div className="image"></div>
                    <div className="image"></div>
                </div>
            </section>
            <Teachers />
            <Gallery />
            <Testimonies />
            <Quote />
            <Map />
        </div>
      );    
}