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
                        <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
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
            <Quote />
            <Testimonies />
            <Gallery />
            <Map />
        </div>
      );    
}