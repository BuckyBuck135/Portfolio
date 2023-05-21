import React from "react"
import "./Footer.css"


export default function Footer() {

  return (
    <footer>
        <a href="#header" aria-label="lien vers le haut de la page">
            <div className="icon-wrapper">
                <i className="fa-solid fa-angles-up"></i>
            </div>
        </a>
        <p>Copyright © 2023, Geoffrey Le Meur. <br></br>Tous droits réservés.</p>
    </footer>
  );
}
