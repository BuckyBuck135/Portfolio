import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import "./Aside.css"

export default function Aside() {

    return (
        <div className="aside--main">
            <div className="aside--container aside--container-left fadeInUp delay">
                <div className="aside--inner">
                    <div className="aside--icon-wrapper">
                        <a className="aside--icon" href="https://www.linkedin.com/in/geoffreylemeur/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="aside--icon" href="https://github.com/BuckyBuck135" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
                        <a className="aside--icon" href="https://www.instagram.com/geoffrey.lm.dev/" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                        <a className="aside--icon" href="https://twitter.com/BuckyBuck135" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </div>
                </div>
            </div>

            <div className="aside--container aside--container-right fadeInUp delay">
                <div className="aside--inner">
                    <a className="aside--a" href="mailto:geoffrey.lemeur@pm.me">geoffrey.lemeur@pm.me</a>
                </div>
            </div>
        </div>
        
    )
}