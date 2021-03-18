import React from 'react';
import Map from '../components/map.component';


export default function Gallery(props) {
    return (
        <>
          <div className="about_us">
            <div className="about_us__text">
              <div className="about_us__text__title">
                <h1>The Whale Learning Group</h1>
              </div>
              <div className="about_us__text__description">
                <p>Whale Learning Group is a portfolio of exciting brands, each of which specialise in experiential learning and play for children, content for TV & Radio, spanning print, online, outdoor events for schools, literacy programs, summer camps and preschool, afterschool and K-12 for Children.</p>
              </div>
            </div>
          </div>

          <div className="philosophy">
            <div className="philosophy__description">
              
              <div className="philosophy__description__title">
                <h2>Our Philosophy</h2>
              </div>

              <div className="philosophy__description__subtitle">
                <p>We offer a holistic approach to learning...</p>
              </div>

              <div className="philosophy__description__text">
                <p>We believe that extra-curricular experiences develop the whole student, and provide important enrichment
                    opportunities for young people. Through outdoor learning, free
                    play, travel, language hands-on activities and socialising, our
                    aim is to enhance children’s creativity, confidence and resilience.</p>
                <p>
                Brands include: WIT Camps, Treasure Kids Newspaper, The
                WIT Schools, Treasure Kids TV, Play and Learn TV Show,
                Bedtime Stories with Ms P, Mini Master Chef show, Did You
                Know and Book Bug Club.
                </p>
                <p>
                Our portfolio of brands deliver these experiences across all age
                groups and in a range of environments. From residential and
                day camps, specialist school events, tours, after-school
                programs, TV, print, and online, our vision is to build brands
                that are market leaders in each sector with a niche in the
                children and youth sector.
                </p>
              </div>
            </div>
            <div className="philosophy__image"></div>
          </div>

          <div className="founder">
            <div className="founder__description">
              <div className="founder__description__title">
                <h2>Our Founder</h2>
              </div>

              <div className="founder__description__subtitle">
                <p>Meet Precious Bonsu, Founder / CEO</p>
              </div>

              <div className="founder__description__text">
                <p>
                Precious Bonsu is an educator, publisher, author and
                entrepreneur. The self motivated and highly driven young female entrepreneur
                has a knack for innovation and creativity. Bonsu is currently CEO and editor-in-
                chief of Treasure Kids Newspaper, a monthly newspaper available in both print
                and online for young people.
                </p>
                <p>
                Bonsu is also the Founder and leader of Whale Learning Group - an educational
                consultancy and company with an impressive portfolio of Treasure Kids Books,
                Treasure Kids Media, The Wit Schools, Play and Learn, and Book Bug Club. In
                the publishing and educational sector, Bonsu partners with established
                businesses like Promasidor Ltd, Daily Guide Newspaper, DGN, GHONETV,
                Blow-Chem Ltd and others.
                </p>
                <p>
                As an educator, avid reader and staunch advocate for children and their rights to
                education and literacy, Precious hopes to leverage on her expertise, network
                and her businesses to help all children, regardless of their socioeconomic
                background to have equal access to quality and equitable education.
                </p>
              </div>
            </div>
            <div className="founder__image"></div>
          </div>

          <div className="flagship">
            <div className="flagship__description">
              <div className="flagship__description__title">
                <h2>Our Flagship</h2>
              </div>

              <div className="flagship__description__subtitle">
                <p>WIT vacation camps</p>
              </div>

              <div className="flagship__description__text">
                <p>
                Every year since 2017, the WIT School and
                Treasure Kids hosts over 3000 kids per annum
                at its Easter, Christmas and Summer Camps.
                This is where we churn out talents and discover
                geniiuses with varied interests
                </p>
              </div>
            </div>
            <div className="flagship__image"></div>
          </div>
          <Map />
        </>
      );    
}