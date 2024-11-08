import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" className='imge' />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a Fresher Frontend and Backend Developer </p>
                <p>My passion for frontend and backend development is not only reflected in my extensive experience but also in the enthusiasm and dedication i bring to each project </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>NodeJS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about achievements">
                <div className="about-achievement">
            <h1>25+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
