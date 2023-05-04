import React from "react"
import "./Projects.css"
import { nanoid } from 'nanoid'
import {data} from "../../data/projects-data"

export default function Projects() {
    console.log(data)
    return (
        <section className="section--projects">
            <div className="container"> 
                <h2 className="section--heading"><span className="section--number">02.</span> Projets</h2> 
                
            </div>
        </section>
    )
}