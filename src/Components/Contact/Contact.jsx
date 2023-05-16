import React from "react"
import { useForm } from 'react-hook-form';


import "./Contact.css"
import ProjectCard from "../ProjectCard/ProjectCard";


export default function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <section id="section--contact" className="section--contact">
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L50 100 L100 0 Z" fill="#242424" stroke="#242424"></path>
        </svg>
        <div className="container"> 
            <h2 className="section--heading"><span className="section--number">03.</span> Contact</h2> 
            <h3 className="contact--subheading">Une question ? Un projet à réaliser ensemble ?</h3>

            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <label className="visually-hidden"></label>
                <input className="form--input" type="text" name="name" placeholder="Nom :" required />
                <label className="visually-hidden"></label>
                <input className="form--input" type="text" name="email" placeholder="Email :" required />
                <label className="visually-hidden"></label>
                <textarea className="form--input" name="message" placeholder="Votre message : " required />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </section>
  );
}
