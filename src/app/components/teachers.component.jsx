import React from 'react';
import TeacherCard from './teacherCard.component';

export default function Teachers(){
    return(
      <section className="teachers">
        <div className="teachers__title">
          <h2>Our Best Teachers</h2>
        </div>
        <div className="teachers__list">
          <TeacherCard title="Alexa Janathon" subtext="Faculty" image={require("../../assets/images/teachers/team1.png")}/>
          <TeacherCard title="Alexa Janathon" subtext="Faculty" image={require("../../assets/images/teachers/team2.png")}/>
          <TeacherCard title="Alexa Janathon" subtext="Faculty" image={require("../../assets/images/teachers/team3.png")}/>
          <TeacherCard title="Alexa Janathon" subtext="Faculty" image={require("../../assets/images/teachers/team4.png")}/>
        </div>
        <div className="button">
          <button className="white">View All Faculties</button>
        </div>
		  </section>
    );
}