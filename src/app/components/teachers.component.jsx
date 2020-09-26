import React from 'react';
import TeacherCard from './teacherCard.component';

export default function Teachers(){
    return(
      <section className="teachers">
        <div className="teachers__title">
          <h2>Our Best Teachers</h2>
        </div>
        <div className="teachers__list">
          <TeacherCard title="Precious Bonsu" subtext="CEO &amp; Founder" image={require("../../assets/images/staff/founder.jpg")}/>
          <TeacherCard title="Regina Hodanu" subtext="HR &amp; Administrator" image={require("../../assets/images/staff/hr.jpg")}/>
          <TeacherCard title="Jessica Dufe" subtext="Teaching Coordinator" image={require("../../assets/images/staff/tc.jpg")}/>
          <TeacherCard title="James Gosling" subtext="Public Relations" image={require("../../assets/images/staff/founder.jpg")}/>
        </div>
        <div className="button">
          <button className="white">Learn More</button>
        </div>
		  </section>
    );
}