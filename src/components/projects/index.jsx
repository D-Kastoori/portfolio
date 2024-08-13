import React from 'react'
import ProjectCards from '../../common/projectCards'
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import styles from './style.module.css'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCards
        src={viberr}
        link="https://github.com/Ade-mir/company-landing-page-2"
        h3="Viberr"
        p="Streaming App"
      />
      <ProjectCards
        src={freshBurger}
        link="https://github.com/Ade-mir/company-landing-page-2"
        h3="Fresh Burger"
        p="Hamburger Restaurant"
      />
      <ProjectCards
        src={hipsster}
        link="https://github.com/Ade-mir/company-landing-page-2"
        h3="Hipsster"
        p="Glasses Shop"
      />
      <ProjectCards
        src={fitLift}
        link="https://github.com/Ade-mir/company-landing-page-2"
        h3="FitLift"
        p="Fitness App"
      />
    </div>
  </section>
  )
}

export default Projects
