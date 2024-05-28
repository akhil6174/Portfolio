import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image_long from '../../assets/profile_image_long.jpeg'
function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_image_long} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Myself Akhilendra Dwivedi, I am a fresh graduate from Abdul Kalam Technical University, Uttar Pradesh, India, with a strong passion for technology and a dedication to continuous learning and development. My academic journey and project experiences have equipped me with valuable skills in machine learning and frontend development.</p>
                <p>While I do not yet have industry experience, my enthusiasm for technology drives me to continuously improve my skills and knowledge. My commitment to my projects and learning experiences reflects my dedication to becoming a proficient professional in the tech industry.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>C<sup>++</sup></p><hr style={{width:"62%"}}/></div>
                <div className="about-skill"><p>Machine Learning</p><hr style={{width:"56%"}}/></div>
                <div className="about-skill"><p>OpenCV</p><hr style={{width:"40%"}}/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
