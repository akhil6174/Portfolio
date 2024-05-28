import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import projectData from '../../assets/project_data'
function Project() {
  return (
    <div id="projects" className='project'>
        <div className="project-title">
            <h1>My projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="project-container">
            {projectData.map((project,indx)=>{
                return <a href={project.p_link} target='_blank' key={indx}><img src={project.p_img} key={indx} alt="" /></a>
            })}
        </div>
    </div>
  )
}

export default Project
