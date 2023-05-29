import React from "react"
import "./About.css"
import { useLayoutEffect } from 'react'

export default function About() {

    useLayoutEffect(() => {
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {

            //animating heading
            gsap.set(".section--about .container .section--heading", {y: "-=40", opacity: 0});
            gsap.to(".section--about .container .section--heading", { 
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section--about .container",
                    toggleActions: "play none play reset"
                }
            })

            //animating text
            gsap.set(".about--text", {y: "-=30", opacity: 0});
            gsap.to(".about--text", { 
                y: 0,
                opacity: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: ".section--about .container .section--heading",
                    toggleActions: "play none play reset"
                }
            })
            
            //animating skills
            gsap.set(".about--skills li", {opacity: 0});
            gsap.to(".about--skills li", { 
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ".about--skills",
                    toggleActions: "play none play reset"
                }
            })
        });  
        return () => ctx.revert(); // cleanup
        }, []); // <- empty dependency Array so it doesn't re-run on every render

    return (
        <section id="section--about" className="section--about shapedividers_com-2702">
            <div className="container"> 
                <h2 className="section--heading"><span className="section--number">01.</span> À propos</h2> 
                <div className="about--grid">
                    <div className="about--text">
                        <p>Bonjour ! Je m'appelle Geoffrey Le Meur et je suis un <span className="about--span">développeur web freelance</span> passionné par la création de sites Internet offrant une expérience utilisateur exceptionnelle. 
                        Également chef d'une petite entreprise dans l'hôtellerie, je me spécialise dans la <span className="about--span">création de sites vitrines pour PME</span> afin d'offrir à mes clients la visibilité qu'ils méritent.</p>
                        <p>Geek depuis mon enfance, mon intérêt pour le développement s'est matérialisé en 2022 lorsque j'ai pris en main le site Internet de mon entreprise suite au départ de notre développeur. 
                        Il fallait apprendre comment gérer et maintenir un site, et vite !</p>
                        <p>Je me suis donc formé et ai obtenu une <span className="about--span">certification professionnelle "Développeur intégrateur web"</span> équivalent bac +2 auprès de OpenClassrooms. J'ai également suivi le cursus <span className="about--span">"Front-end Career Path"</span> de Scrimba pour continuer à me perfectionner. </p>
                        <p>Voici quelques une des technologies que j'ai récemment utilisées dans mes projets :</p>
                        <ul className="about--skills">
                            <li>JavaScript (ES6)</li>
                            <li>React</li>
                            <li>CSS</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="about--picture">
                        <div className="about--image-wrapper">
                        <img className="about--image" src="portrait-geoffrey.jpg" alt="Geoffrey Le Meur souriantm face à l'objectif" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}