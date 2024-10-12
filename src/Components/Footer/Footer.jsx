import React from "react"
import "./Footer.css"
import { useLayoutEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
gsap.registerPlugin(ScrollTrigger);


export default function Footer() {
 

  return (
    <footer>
        <a href="#header" aria-label="lien vers le haut de la page">
            <div className="icon-wrapper">
                <i className="fa-solid fa-angles-up"></i>
            </div>
        </a>
        <p>Copyright © 2024, Geoffrey Le Meur.</p> 
        <div className="footer--icon-wrapper">
            <a className="aside--icon" href="https://www.linkedin.com/in/geoffreylemeur/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="aside--icon" href="https://github.com/BuckyBuck135" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a className="aside--icon" href="https://www.instagram.com/geoffrey.lm.dev/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a className="aside--icon" href="https://twitter.com/BuckyBuck135" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
        </div>

    </footer>
  );
}

