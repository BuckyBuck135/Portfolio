import React from "react"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./Projects.css"
import {data} from "../../data/projects-data"
import ProjectCard from "../Card/ProjectCard";


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
        <section className="section--projects">
            <div className="container"> 
              <h2 className="section--heading"><span className="section--number">02.</span> Projets</h2> 
              <div className="gallery">
                {cards}
              </div>

            </div>
            
            <div>
              






    </div>
        </section>
    )
}