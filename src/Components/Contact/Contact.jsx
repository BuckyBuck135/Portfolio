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
            <form method="POST" data-netlify="true">
            {/* <form onSubmit={handleSubmit(onSubmit)} method="POST" data-netlify="true"> */}
                <input type="text" placeholder="Nom :" {...register("Name", {required: true, maxLength: 100})} />
                <input type="text" placeholder="Email :" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <textarea placeholder="Votre message : " {...register("Message", {required: true})} />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </section>
  );
}
