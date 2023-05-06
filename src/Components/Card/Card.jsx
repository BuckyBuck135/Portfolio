import React from "react";
import "./Card.css"

export default function Card(props) {
    return (
        <a
            onClick={() => props.showBookingForm(event.id)}>
              
            <article id={props.item.id} className="project-card">
                <img className="project-card--image" src={`${props.item.cover}`} alt={props.item.title}/>
                {/* <h2 className="card--title">{props.item.title}</h2> */}
            </article>
        </a>
    )
}