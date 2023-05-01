import React from "react"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faLaptopFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
        <header>
            <nav>
                <div className="nav--logo">
                    {isDesktop ? (<img className="logo" src="logo-accent.svg" />) : (<img className="logo" src="logo.svg" />)}
                </div>
                <div className="nav--buttons">
                    <ul>
                        <li><a href="#a-propos" className="nav--button"><FontAwesomeIcon icon={faUserGraduate} /></a></li>
                        <li><a href="#projets"className="nav--button"><FontAwesomeIcon icon={faLaptopFile} /></a></li>
                        <li><a href="#contact" className="nav--button"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    </ul>
                </div>
                <div className="nav--links">
                    <ul>
                        <li><a href="#a-propos" className="nav--text"><span className="nav--span">01.</span>A propos</a></li>
                        <li><a href="#projets" className="nav--text"><span className="nav--span">02.</span>Projets</a></li>
                        <li><a href="#contact" className="nav--text"><span className="nav--span">03.</span>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}