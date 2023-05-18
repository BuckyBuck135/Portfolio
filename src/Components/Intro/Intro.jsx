import React from "react"
import TechCard from "../../Components/TechCard/TechCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
        <section className="section--intro">
            <div className="container">
                <div className="intro--bio">
                    <h3>Bonjour, </h3>
                    <h1>Je m'appelle Geoffrey.</h1>
                    <h2 className="fadeInUp">Je construis des sites Internet sur mesure.</h2>
                    <p className="intro--p fadeInUp">Je suis un développeur frontend et entrepreneur avec un intérêt particulier pour le web design.</p> 
                    <p className="intro--p fadeInUp">Constamment à l'affût des meilleures pratiques et nouveautés techniques, je me spécialise dans la création et l'optimisation de sites internet sur mesure 
                    pour répondre aux besoins uniques de mes clients.</p>  
                </div>
                <div className="intro--cards fadeInUp">
                {techCards}

                    {/* <div className="intro--cards-wrapper">
                    </div> */}
                </div>
                <blockquote className="fadeInUp fadeInLeft">Que vous ayez besoin d'une optimisation de votre site existant ou d'un tout nouveau site web, 
                je suis là pour vous accompagner dans votre succès en ligne.</blockquote>
                <a href="#section--contact" className="CTA fadeInUp fadeInRight">Contactez-moi<FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </section>
    )
}
