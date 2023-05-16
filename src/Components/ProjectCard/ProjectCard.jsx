import React from "react";
import Modal from 'react-modal';
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

    const tags = props.item.tags.join(" / ")
    const background = props.item.pictures[0]
    return (
        <a 
            className="project-card--wrapper"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        > 
            <article id={props.item.id} className="project-card">
                <img className="project-card--image" src={background} alt={props.item.heading}/>

                {isHovering &&
                    <div className="project-card--on-hover" onClick={openModal}>
                        <div className="fadeInUp">
                            <h2>{props.item.heading}</h2>
                            <h3>{props.item.subheading}</h3>
                            <span className="project-card--tags">{tags}</span>
                        </div>
                        <button className="modal--open-btn fadeInDown" onClick={openModal}>DÉTAILS</button>
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