import React from "react"
import TechCard from "../../Components/TechCard/TechCard"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTruckFast, faLightbulb, faMobileScreenButton, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'

import "./Intro.css"
import data from "../TechCard/TechCard-data"

export default function Intro() {
    const techCards = data.map((item, index) => {
        return (
            <TechCard 
            key={index}
            icon={item.icon}  
            heading={item.heading}
            text={item.text} 
            />
        )
    })
    return (
        <section>
            <div className="section--intro">
                <h3>Bonjour, </h3>
                <h1>Je m'appelle Geoffrey.</h1>
                <h2 className="fadeInUp">Je construis de jolies choses sur Internet.</h2>
                <p className="fadeInUp">Je suis un développeur frontend en devenir avec un intérêt particulier pour le web design. Constamment à l'affût des meilleures pratiques et nouveautés techniques, je crée des sites Internet performants et captivants.</p>  
            </div>
            <div className="section--cards fadeInUp">
                <div className="section--cards-wrapper">
                    {techCards}
                </div>

            </div>
        </section>
    )
}
