import React from "react"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./Projects.css"
import {data} from "../../data/projects-data"
import Carrousel from "../Carrousel/Carrousel";




Modal.setAppElement('#root');

export default function Projects() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(event) {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const stack = data[0].stack.map((item, index) => {
    return <i key={index} className={item}></i>
})
    return (
        <section className="section--projects">
            <div className="container"> 
              <h2 className="section--heading"><span className="section--number">02.</span> Projets</h2> 
            </div>

            <div>
              <button onClick={openModal}>Open Modal</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Example Modal"
              >
                <Carrousel pictures={data[0].pictures} />
                <div className="modal--info">
                  <div className="flex between">
                    <div>
                      <h2 className="modal--heading">{data[0].heading}</h2>
                      <h3 className="modal--subheading">{data[0].subheading}</h3>
                    </div>
                    <div className="stack--wrapper">
                        {stack}
                    </div>
                  </div>
                  <p className="modal--description">{data[0].description}</p>
                </div>

                  <div className="modal--butons-wrapper">
                    <a href={data[0].liveUrl} target="_blank" className="modal--link">SITE</a>
                    <a href={data[0].repoUrl} target="_blank" className="modal--link">CODE</a>
                    <button className="modal--close-btn"onClick={closeModal}>X</button>
                  </div>  
              </Modal>
    </div>
        </section>
    )
}