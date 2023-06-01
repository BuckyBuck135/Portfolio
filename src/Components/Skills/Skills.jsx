import React from "react"
import "./Skills.css"

export default function Skills() {

    return (
        <section id="section--skills" className="section--skills shapedividers_com-5314">
            <div className="container"> 
                <h2 className="section--heading"><span className="section--number">02.</span>Compétences</h2> 
                <div className="skills--cards fadeInUp">
                    <article className="skills--card">
                            <i class=" skills--icon fa-brands fa-react"></i>
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

                    <article className="skills--card">
                        <i class=" skills--icon fa-solid fa-code"></i>
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

                    <article className="skills--card">
                        <i class=" skills--icon fa-solid fa-server"></i>
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
            </div>
        </section>    
    )
}