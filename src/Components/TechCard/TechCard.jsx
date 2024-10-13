import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./TechCard.css"

export default function TechCard(props) {
    return (
        <article className={`tech-card`}>
            <div className="wrapper-icon">
                <span className="card--icon"><FontAwesomeIcon icon={props.icon} /></span>
            </div>
            <div className="wrapper-text">
                <h4 className="card--heading">{props.heading}</h4>
                <p className="card--text">{props.text}</p>
            </div>
        </article>
    )
}

