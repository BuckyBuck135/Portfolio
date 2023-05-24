import React from "react"
import "./Contact.css"
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      const inputs = gsap.utils.toArray('.staggered');
      inputs.forEach(input => {
                gsap.to(input, { 
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section--contact .contact--subheading",
                    toggleActions: "play none none reset"
                }
                })
            });
        
    });  
    return () => ctx.revert(); // cleanup
    
    }, []); // <- empty dependency Array so it doesn't re-run on every render
  
  return (
    <section id="section--contact" className="section--contact">
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L50 100 L100 0 Z" fill="#242424" stroke="#242424"></path>
        </svg>
        <div className="container"> 
            <h2 className="section--heading"><span className="section--number">03.</span> Contact</h2> 
            <h3 className="contact--subheading">Une question ? Un projet à réaliser ensemble ?</h3>

            <form name="contact" method="POST" data-netlify="true">
                <input aria-label="contact" type="hidden" name="form-name" value="contact" />
                <label className="visually-hidden"></label>
                <input aria-label="nom" className="form--input staggered X-3" type="text" name="name" placeholder="Nom" required />
                <label className="visually-hidden"></label>
                <input aria-label="email" className="form--input staggered X3" type="text" name="email" placeholder="Email" required />
                <label className="visually-hidden"></label>
                <textarea aria-label="envoyer" className="form--input staggered X-3" name="message" placeholder="Votre message" required />
                <button type="submit" className="timeBombButton staggered X3">
                  <span></span><span></span><span></span><span></span>
                  Envoyer</button>
            </form>
        </div>
    </section>
  );
}
