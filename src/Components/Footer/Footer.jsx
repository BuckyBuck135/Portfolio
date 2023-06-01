import React from "react"
import "./Footer.css"
import { useLayoutEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
gsap.registerPlugin(ScrollTrigger);


export default function Footer() {
  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      gsap.set(".icon-wrapper", {y: "-=30", opacity: 0});
      gsap.to(".icon-wrapper", {y: 0, opacity: 1, duration: 1, scrollTrigger: {
        trigger: "footer",
        toggleActions: "play none play reset"
      }})
    
      gsap.to("footer p", {x: 0, opacity: 1, duration: 1, scrollTrigger: {
        trigger: "footer",
        toggleActions: "play none none reset"
      }})
        
    });  
    return () => ctx.revert(); // cleanup
    
    }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <footer>
        <a href="#header" aria-label="lien vers le haut de la page">
            <div className="icon-wrapper">
                <i className="fa-solid fa-angles-up"></i>
            </div>
        </a>
        <p className="X-2">Copyright © 2023, Geoffrey Le Meur.</p> 
        <div className="footer--icon-wrapper">
            <a className="aside--icon" href="https://www.linkedin.com/in/geoffreylemeur/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="aside--icon" href="https://github.com/BuckyBuck135" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a className="aside--icon" href="https://www.instagram.com/geoffrey.lm.dev/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a className="aside--icon" href="https://twitter.com/BuckyBuck135" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
        </div>

    </footer>
  );
}

