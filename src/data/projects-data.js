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
        cover: "/images/kasa/mockup.jpg",
        pictures: [
            "/images/kasa/mockup.jpg",
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
        cover: "/images/sophie-bluel/cover.jpg",
        pictures: [
            "/images/sophie-bluel/cover.jpg",
            "/images/sophie-bluel/login.jpg",
            "/images/sophie-bluel/dashboard.jpg",
            "/images/sophie-bluel/gallery.jpg",
            "/images/sophie-bluel/modal1.jpg",
            "/images/sophie-bluel/modal2.jpg",
        ],
        heading: "Sophie Bluel - Architecte",
        subheading: "Projet OpenClassrooms",
        description: "lorem ipsum blah blah",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt"
        ],
        liveUrl: "https://kasa-location.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/Projet-3---Portfolio-architecte-sophie-bluel",
        tags: [
            "HTML",
            "CSS",
            "API"
        ]
    },  
    {
        id: nanoid(),
        cover: "/images/sliced/cover.jpg",
        pictures: [
            "/images/sliced/cover.jpg",
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
    {
        id: nanoid(),
        cover: "/images/password-generator/cover.jpg",
        pictures: [
            "/images/password-generator/cover.jpg",
            "/images/password-generator/mobile.jpg",
            "/images/password-generator/copied.jpg"
            
        ],
        heading: "Générateur de mots de passe",
        subheading: "Never use an insecure password again",
        description: "Ce projet Scrimba couvre les bases de JS telles que la manipulation du DOM et les boucles for. J'y ai ajouté un color picker en CSS pur et un toast pour la copie des mots de passe dans le presse-papiers.",
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
]

