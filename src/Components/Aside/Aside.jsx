import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import "./Aside.css"

export default function Aside() {

    return (
        <div className="aside--main">
            <div className="aside--container aside--container-left fadeInUp">
                <div className="aside--inner">
                    <div className="aside--icon-wrapper">
                        <a className="aside--icon" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="aside--icon" href=""><FontAwesomeIcon icon={faGithubSquare} /></a>
                        <a className="aside--icon" href=""><FontAwesomeIcon icon={faInstagramSquare} /></a>
                        <a className="aside--icon" href=""><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </div>
                </div>
            </div>

            <div className="aside--container aside--container-right fadeInUp">
                <div className="aside--inner">
                    <a className="aside--a" href="mailto:geoffrey.lemeur@gmail.com">geoffrey.lemeur@gmail.com</a>
                </div>
            </div>
        </div>
        
    )
}