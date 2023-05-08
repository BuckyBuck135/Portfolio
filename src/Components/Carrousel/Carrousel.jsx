import React from "react"
import "./Carrousel.css"
import nextArrow from "../../assets/next-arrow.svg"
import previousArrow from "../../assets/previous-arrow.svg"

export default function Carrousel(props) {
    const pictures = props.pictures

    const maxIndex = pictures.length - 1
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const carrouselImages = pictures.map((image, index) => {
        return (
            <div key={index} className={currentIndex === index ? "carrousel--slide carrousel--active" : "carrousel--slide"}>
                {index === currentIndex && <img src={image} className="carrousel--image" alt="Carrousel d'images du logement."  />}
            </div>
        )
    })
    
    function prevImage() {
        setCurrentIndex(prevIndex => prevIndex === 0 ? maxIndex : prevIndex - 1)
    }

    function nextImage() {
        setCurrentIndex(prevIndex => prevIndex === maxIndex ? 0 : prevIndex + 1)
    }

    return (
        <figure className="carrousel--container">
            {carrouselImages}
            <div>
                <img src={previousArrow} onClick={prevImage} className="carrousel--arrow previous" alt="Icône de défilement en avant du carrousel."/> 
                <img src={nextArrow} onClick={nextImage} className="carrousel--arrow next" alt="Icône de défilement en arrière du carrousel."/> 
            </div>
        </figure>
    )
}