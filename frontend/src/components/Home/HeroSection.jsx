import React from 'react';
import {FaSuitcase , FaBuilding ,FaUsers , FaUserPlus} from "react-icons/fa";

export const HeroSection = () =>{
    const details = [
      {
        id: 1,
        title: "0",
        subTitle: "Live Job",
        icon: <FaSuitcase />,
      },
      {
        id: 2,
        title: "0",
        subTitle: "Companies",
        icon: <FaBuilding />,
      },
      {
        id: 3,
        title: "0",
        subTitle: "Job Seekers",
        icon: <FaUsers />,
      },
      {
        id: 4,
        title: "0",
        subTitle: "Employers",
        icon: <FaUserPlus />,
      },
    ];
  return (
    <div className='heroSection'>
    <div className='container'>
<div className='title'>
  <h1>Connecting Talent with Opportunity</h1>
  <h5>Start Your Journey with Us</h5>
  <p>At Jobify, we serve as the ultimate platform 
    for both job seekers and employers alike. 
    For job seekers, we offer a streamlined and intuitive
     interface designed to connect you with opportunities that align perfectly with your 
     skills and career ambitions. For employers,Jobify offers robust tools to attract top 
     talent, manage applications efficiently, and build a thriving team.</p>
</div>

<div className='image'>
  <img src="mainpage.avif" alt="hero"/>
</div>


      </div>
<div className="details">{
details.map(element =>{
  return(
    <div className='card' key={element.id}>
      <div className='icon'>{element.icon}</div>
      <div className='content'>
<p>{element.title}</p>
<p>
{element.subTitle}
</p>


      </div>

    </div>
  )
})}
</div>
    </div>
  )
}
