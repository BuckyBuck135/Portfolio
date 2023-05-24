import React from "react"
import { useState, useEffect } from "react";
import "./Projects.css"
import {data} from "../../data/projects-data"
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {

const [cards, setCards] = useState(data)
const [currentCard, setCurrentCard] = useState("ALL")

function handleClick(e) {
  setCurrentCard(e.target.value)
}

useEffect(() => {
  if (currentCard === "ALL") {
    setCards(data)
  } else {
    const filtered = data.filter((item) => {
      return item.tags.includes(currentCard)
    })
    setCards(filtered)
  }
}, [currentCard])

const projectCards = cards.map((item, index) => {
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
              <div className="nav--buttons">
                <button className="nav--button" onClick={handleClick} value="ALL">TOUS</button>
                <button className="nav--button" onClick={handleClick} value="REACT">REACT</button>
                <button className="nav--button" onClick={handleClick} value="HTML">HTML</button>
                <button className="nav--button" onClick={handleClick} value="NODE">NODE</button>
              </div>

              <div className="gallery">
                {projectCards}
              </div>
            </div>
        </section>
    )
}