import React from "react";
import Modal from 'react-modal';
import {data} from "../../data/projects-data"
import Carrousel from "../Carrousel/Carrousel";


import "./ProjectCard.css"

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
    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const stack = props.item.stack.map((item, index) => {
        return <i key={index} className={item}></i>
    })

    return (
        <a 
            className="project-card--wrapper"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        > 
            <article id={props.item.id} className="project-card">
                <img className="project-card--image" src={`${props.item.cover}`} alt={props.item.title}/>
                {isHovering &&
                    <div className="project-card--on-hover">
                        <h2></h2>
                        <button className="modal--open-btn"onClick={openModal}>DÉTAILS</button>
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
                <div className="modal--info">
                    <div className="flex between">
                        <div> 
                            <h2 className="modal--heading">{props.item.heading}</h2>
                            <h3 className="modal--subheading">{props.item.subheading}</h3>
                        </div>
                        <div className="stack--wrapper">
                            {stack}
                        </div>
                    </div>
                    <p className="modal--description">{props.item.description}</p>
                </div>

                <div className="modal--butons-wrapper">
                <a href={props.item.liveUrl} target="_blank" className="modal--link">SITE</a>
                <a href={props.item.repoUrl} target="_blank" className="modal--link">CODE</a>
                <button className="modal--close-btn"onClick={closeModal}>X</button>
                </div>  
            </Modal>
        </a>
        
    )
}