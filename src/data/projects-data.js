import { nanoid } from 'nanoid'

//STACK ICONS
// HTML "fa-brands fa-html5"
// CSS "fa-brands fa-css3-alt"
// JS "fa-brands fa-js"
// NODE "fa-brands fa-node-js"
// REACT "fa-brands fa-react"

export const data = [
    {
        id: nanoid(),
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        pictures: [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"
            
        ],
        heading: "Générateur de mots de passe",
        subheading: "Projet personnel : Scrimba",
        description: "lorem ipsum blah blah",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt",
            "fa-brands fa-js"
        ],
        liveUrl: "https://generate-unique-passwords.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/Password-Generator",
        tags: [
            "HTML",
            "CSS",
            "JS"
        ]
    },
    {
        id: nanoid(),
        cover: "/images/kasa/mockup.jpg",
        pictures: [
            "/images/kasa/DEKSTOP-localhost_3000_fiche-logement_c67ab8a7.png",
            "/images/kasa/TABLET-kasa-location.netlify.app_a-propos.png",
            "/images/kasa/kasa-location.netlify.app_a-propos.png",
            "/images/kasa/localhost_3000_fiche-logement_b9123946(iPhone%2012%20Pro).png",

            
        ],
        heading: "Kasa",
        subheading: "location d’appartements entre particuliers",
        description: "lorem ipsum blah blah",
        stack: [
            "fa-brands fa-react",
            "fa-brands fa-css3-alt"
        ],
        liveUrl: "https://kasa-location.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/projet-6---kasa",
        tags: [
            "REACT",
            "CSS",
        ]
    },  
    {
        id: nanoid(),
        cover: "/images/sliced/cover.jpg",
        pictures: [
            "/images/sliced/order.jpg",
            "/images/sliced/form.jpg",
            "/images/sliced/pay.jpg",          
        ],
        heading: "Sliced",
        subheading: "Commande de pizzas en ligne",
        description: "Sliced, the home of the true pizza slice, est basé sur un projet solo Scrimba frontend career path pour le module 5 Essential JS. J'y ai ajouté mon propre style, avec un logo Illustrator fait sur mesure, et mis en application des concepts tels que l'utilisation de data attributes, .map() et validation de formulaire.",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt"
        ],
        liveUrl: "https://github.com/BuckyBuck135/Food-ordering-app",
        repoUrl: "https://github.com/BuckyBuck135/Food-ordering-app",
        tags: [
            "HTML",
            "CSS",
        ]
    },   
]

