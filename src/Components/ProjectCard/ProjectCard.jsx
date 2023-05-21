import React from "react";
import Modal from 'react-modal';
import { useRef, useLayoutEffect } from "react";
import Carrousel from "../Carrousel/Carrousel";
import "./ProjectCard.css"
gsap.registerPlugin(ScrollTrigger);

Modal.setAppElement('#root');

export default function ProjectCard(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setIsHovering(false)
    }

    const [isHovering, setIsHovering] = React.useState(false);
    const handleClickIn = (e) => {
        if(e.target.id) {
            setIsHovering(prev => !prev);
        } else {
            setIsHovering(prev => !prev)
        }
    }

    const handleClickOut = () => {
        setIsHovering(prev => !prev);
    }

    const stack = props.item.stack.map((item, index) => {
        return <i key={index} className={item}></i>
    })

    const tags = props.item.tags.join(" / ")
    const background = props.item.pictures[0]
    
    // const cards = gsap.utils.toArray('.project-card--wrapper');
    // cards.forEach(card => {
    //   gsap.to(card, { 
    //     x: 0,
    //     opacity: 1,
    //     duration: 0.5,
    //     scrollTrigger: {
    //       trigger: card,
    //       toggleActions: "play none play reset"
    //     }
    //   })
    // });
    
    const comp = useRef(); // create a ref for the root level element (for scoping)

useLayoutEffect(() => {
  
  // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
  let ctx = gsap.context(() => {
    
    const cards = gsap.utils.toArray('.project-card--wrapper');
    cards.forEach(card => {
      gsap.to(card, { 
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          toggleActions: "play none play reset"
        }
      })
    });
    
  }, comp); // <- IMPORTANT! Scopes selector text
  
  return () => ctx.revert(); // cleanup
  
}, []); // <- empty dependency Array so it doesn't re-run on every render

    return (
        <a 
        className="project-card--wrapper"
            onClick={handleClickIn}
        > 
            <article  className="project-card">
                <img id={props.item.id} className="project-card--image" src={background} alt={props.item.heading}/>

                {isHovering &&
                    <div className="project-card--on-hover" onClick={handleClickOut}>
                        <div className="cardFadeInUp">
                            <h2>{props.item.heading}</h2>
                            <h3>{props.item.subheading}</h3>
                            <span className="project-card--tags">{tags}</span>
                        </div>
                        <button className="modal--open-btn cardFadeInDown" onClick={openModal}>DÉTAILS</button>
                    </div>
                }
            </article>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Example Modal"
            >
                <Carrousel pictures={props.item.pictures} />
                <div className="modal--inner">
                    <div className="modal--info">
                        <div> 
                            <h2 className="modal--heading">{props.item.heading}</h2>
                            <h3 className="modal--subheading">{props.item.subheading}</h3>
                            <p className="modal--description">{props.item.description}</p>
                        </div>
                        <div className="stack--wrapper">
                            {stack}
                        </div>   
                    </div>
                    <div className="modal--buttons-wrapper">
                        <a href={props.item.liveUrl} target="_blank" className="modal--link"><i className="fa-solid fa-arrow-up-right-from-square"></i>SITE</a>
                        <a href={props.item.repoUrl} target="_blank" className="modal--link"><i className="fa-brands fa-github"></i>CODE</a>
                        <button className="modal--link modal--close-btn"onClick={closeModal}>X</button>
                    </div> 
                </div>

                 
            </Modal>
        </a>
        
    )
}