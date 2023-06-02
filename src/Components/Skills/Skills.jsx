import React from "react"
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import "./Skills.css"

export default function Skills() {
    useLayoutEffect(() => {
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.skills--card');
            cards.forEach (card => {
                gsap.to(card, { 
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        toggleActions: "play none play reset"
                    }
                })
            });
        }, );  
        return () => ctx.revert(); // cleanup
        
        }, []);

    return (
        <section id="section--skills" className="section--skills shapedividers_com-5314">
            <div className="container"> 
                <h2 className="section--heading"><span className="section--number">02.</span>Compétences</h2> 
                <div className="skills--cards fadeInUp">
                    <div className="skills--card-wrapper">
                        <article className="skills--card">
                                <i className=" skills--icon fa-brands fa-react"></i>
                                <div className="skills--heading">
                                    <h4><span className="skills--heading-accent">Développeur</span> Frontend</h4>
                                    <h4>React</h4>
                                </div>
                            <div className="skills--text-wrapper">
                                <div className="skills--text">
                                    <p>Création d'interfaces, développement de web-apps et de sites vitrines en HTML, CSS, JS et React.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="skills--card-wrapper">
                        <article className="skills--card">
                            <i className=" skills--icon fa-solid fa-code"></i>
                            <div className="skills--heading">
                                <h4><span className="skills--heading-accent">Optimisation</span> technique</h4>
                                <h4>SEO</h4>
                            </div>
                            <div className="skills--text-wrapper">
                                <div className="skills--text">
                                    <p>Audits de sites existants et optimisation des performances. Rapidité de chargement, accessibilité et SEO.</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="skills--card-wrapper">
                        <article className="skills--card">
                            <i className=" skills--icon fa-solid fa-server"></i>
                            <div className="skills--heading">
                                <h4><span className="skills--heading-accent">Développeur</span> backend</h4>
                                <h4>Node.js</h4>
                            </div>
                            <div className="skills--text-wrapper">
                                <div className="skills--text">
                                    <p>Création d'API RESTful pour implémentation d'opérations CRUD en Node.js, Express, MongoDB et Firebase.</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="skills--card-wrapper">
                        <article className="skills--card">
                            <i className=" skills--icon fa-solid fa-screwdriver-wrench"></i>
                            <div className="skills--heading">
                                <h4><span className="skills--heading-accent">Outils</span> et</h4>
                                <h4>Logiciels</h4>
                            </div>
                            <div className="skills--text-wrapper no-decoration">
                                <div className="skills--text">
                                    <ul className="skills--tools">
                                        <li>Figma</li>
                                        <li>Illustrator</li>
                                        <li>Notion</li>
                                        <li>Photoshop</li>
                                        <li>Git</li>
                                        <li>InDesign</li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>    
    )
}