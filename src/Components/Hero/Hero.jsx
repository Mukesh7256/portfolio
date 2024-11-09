import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/Mukesh Keshari CV.pdf';

    link.download = 'src/assets/Mukesh Keshari CV.pdf';

    link.click();
  };

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Mukesh Kumar Keshari,</span> Full Stack Web Developer</h1>
      <p>I am forntend & backend developer from Intellipaat with 1 year of experience</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}></p>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={downloadResume}>My resume</div>
      </div>
    </div>
  )
}

export default Hero
