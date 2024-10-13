import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import "./Aside.css"

export default function Aside() {

    return (
        <div className="aside--main">
            <div className="aside--container aside--container-left">
                <div className="aside--inner">
                    <div className="aside--icon-wrapper">
                        <a aria-label="linkedIn" className="aside--icon" href="https://www.linkedin.com/in/geoffreylemeur/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a aria-label="github" className="aside--icon" href="https://github.com/BuckyBuck135" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
                        <a aria-label="instagram" className="aside--icon" href="https://www.instagram.com/geoffrey.lm.dev/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                        <a aria-label="twitter" className="aside--icon" href="https://twitter.com/BuckyBuck135" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </div>
                </div>
            </div>

            <div className="aside--container aside--container-right">
                <div className="aside--inner">
                    <a aria-label="email" className="aside--a" href="mailto:geoffrey.lemeur@pm.me">geoffrey.lemeur@gmail.com</a>
                </div>
            </div>
        </div>
        
    )
}