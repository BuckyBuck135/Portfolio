import React from "react"
import "./Projects.css"
import {data} from "../../data/projects-data"
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
const cards = data.map((item, index) => {
  return (
      <ProjectCard 
          key={index}
          item={item}
      />
  )
})

    return (
        <section id="section--projects" className="section--projects shapedividers_com-7055">
            <div className="container"> 
              <h2 className="section--heading"><span className="section--number">02.</span> Projets</h2> 
              <div className="gallery">
                {cards}
              </div>
            </div>
        </section>
    )
}