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
            <i onClick={nextImage} className=" fa-solid fa-backward-step carrousel--arrow previous"></i>
            <i onClick={prevImage} className=" fa-solid fa-forward-step carrousel--arrow next"></i>
        </figure>
    )
}