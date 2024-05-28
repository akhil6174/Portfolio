import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {
    const handleDownloadResume = () => {
      const link = document.createElement('a');
      link.href = '../../my_resume.pdf'; // Replace with the correct path
      link.download = 'akhilendra_dwivedi.pdf'; // Replace with the desired file name
      link.click();
  }
  return (
    <div id='hero' className='hero'>
      <img src={profile_img} alt="" />
      <h1>Being a <span>Fresh Graduate.</span></h1>
      <p>Hi, I'm a tech enthusiast with knowledge in frontend development and machine learning.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleDownloadResume}>My Resume</div>
      </div>
    </div>

  )
}

export default Hero
