import React from "react"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faLaptopFile, faScrewdriverWrench, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
export default function Header() {
    const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 768)

    function updateLogo() {
        setIsDesktop(window.innerWidth > 768)
    }

    useEffect(() => {
        window.addEventListener("resize", updateLogo);
        return () => window.removeEventListener("resize", updateLogo);
    })

    return (
        <header id="header">
            <nav>
                <div className="nav--logo">
                    {isDesktop ? (<img className="logo" src="logo-accent.svg" alt="logo" />) : (<img className="logo" src="logo.svg" alt="logo" />)}
                </div>
                <div>
                    <ul className="nav--buttons">
                        <li><a href="#section--about" className="nav--button" aria-label="Lien vers la section à propos"><FontAwesomeIcon icon={faUserGraduate} /></a></li>
                        <li><a href="#section--skills" className="nav--button" aria-label="Lien vers la section projets"><FontAwesomeIcon icon={faScrewdriverWrench} /></a></li>
                        <li><a href="#section--projects" className="nav--button" aria-label="Lien vers la section projets"><FontAwesomeIcon icon={faLaptopFile} /></a></li>
                        <li><a href="#section--contact" className="nav--button" aria-label="Lien vers la section contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    </ul>
                </div>
                <div className="nav--links">
                    <ul>
                        <li><a href="#section--about" className="nav--text"><span className="nav--span">01.</span>À propos</a></li>
                        <li><a href="#section--skills" className="nav--text"><span className="nav--span">02.</span>Compétences</a></li>
                        <li><a href="#section--projects" className="nav--text"><span className="nav--span">03.</span>Projets</a></li>
                        <li><a href="#section--contact" className="nav--text"><span className="nav--span">04.</span>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}