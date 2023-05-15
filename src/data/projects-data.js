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
            "/images/kasa/DEKSTOP-localhost_3000_fiche-logement_c67ab8a7.png",
            "/images/kasa/TABLET-kasa-location.netlify.app_a-propos.png",
            "/images/kasa/kasa-location.netlify.app_a-propos.png",
            "/images/kasa/localhost_3000_fiche-logement_b9123946(iPhone%2012%20Pro).png",
        ],
        heading: "Kasa",
        subheading: "Location d’appartements entre particuliers",
        description: "Ce projet OpenClassrooms utilise React Router pour la navigation entre les 4 pages et met en exergue la bonne pratique de composants réutilisables. J'y ai également inclus une couche services pour la future intégration d'une API.",
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
        cover: "/images/grimoire/mockup.jpg",
        pictures: [
            "/images/grimoire/cover.jpg",
            "/images/grimoire/book-detail.jpg",
            "/images/grimoire/laptop2.jpg",
            "/images/grimoire/tablet.jpg",
        ],
        heading: "Mon Vieux Grimoire",
        subheading: "Site communautaire de notations de livres",
        description: "Pour ce projet OpenClassrooms, j'ai développé le back-end de ce site avec le stack MERN. Cette API REST permet la réalisation d'opérations CRUD telles que l'ajout de livres et la notation. La sécurisation des routes protégées est effectuée avec JWT",
        stack: [
            "fa-brands fa-react",
            "fa-brands fa-css3-alt",
            "fa-brands fa-node-js"
        ],
        liveUrl: "https://kasa-location.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/projet-6---kasa",
        tags: [
            "NODE",
            "EXPRESS",
            "MONGODB"
        ]
    }, 
    {
        id: nanoid(),
        cover: "/images/sophie-bluel/mockup.jpg",
        pictures: [
            "/images/sophie-bluel/cover.jpg",
            "/images/sophie-bluel/login.jpg",
            "/images/sophie-bluel/dashboard.jpg",
            "/images/sophie-bluel/gallery.jpg",
            "/images/sophie-bluel/modal1.jpg",
            "/images/sophie-bluel/modal2.jpg",
        ],
        heading: "Sophie Bluel",
        subheading: "Portfolio pour architecte d'intérieur",
        description: "Pour ce projet OpenClassrooms, j'ai développé le front-end et intégré les requêtes API pour communiquer avec le back-end existant. Une page login permet à l'administrateur de se connecter puis d'utiliser des opérations CRUD pour la gestion de ses travaux.",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt",
            "fa-brands fa-js"
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
        cover: "/images/sliced/mockup.jpg",
        pictures: [
            "/images/sliced/cover.jpg",
            "/images/sliced/order.jpg",
            "/images/sliced/form.jpg",
            "/images/sliced/pay.jpg",          
        ],
        heading: "Sliced",
        subheading: "Commande de pizzas en ligne",
        description: "Sliced, the home of the true pizza slice, est une adaptation personalisée d'un projet solo Scrimba frontend career path pour le module 5 Essential JS. J'y ai ajouté mon propre style, avec un logo Illustrator fait sur mesure, et mis en application des concepts tels que l'utilisation de data attributes, .map() et validation de formulaire.",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt",
            "fa-brands fa-js"
        ],
        liveUrl: "https://sliced-restaurant.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/Food-ordering-app",
        tags: [
            "HTML",
            "CSS",
            "JS"
        ]
    },  
    {
        id: nanoid(),
        cover: "/images/booki/mockup.jpg",
        pictures: [
            "/images/booki/desktop.jpg",         
            "/images/booki/mobile.jpg",         
            "/images/booki/tablet.jpg",         
            "/images/booki/activites.jpg",         
        ],
        heading: "Booki",
        subheading: "Trouvez votre hébergement pour des vacances de rêve",
        description: "Booki fut mon premier projet OpenClassrooms. En partantd'un design Figma, jai intégré cette interface totalement responsive (desktop, tablette, mobile) en HTML et CSS. Cette version ne prévoyant pas de JS, les filtres ne sont donc pas fonctionnels.",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt"
        ],
        liveUrl: "https://booki-vacances.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/Projet-2---Integration-site-agence-de-voyage",
        tags: [
            "HTML",
            "CSS",
        ]
    },   
    {
        id: nanoid(),
        cover: "/images/password-generator/mockup.jpg",
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
    {
        id: nanoid(),
        cover: "/images/currency-converter/mockup.jpg",
        pictures: [
            "/images/currency-converter/laptop.jpg",
            "/images/currency-converter/mobile.jpg",
            "/images/currency-converter/tablet.jpg"
            
        ],
        heading: "₡urrency ₡onverter",
        subheading: "Convertisseur EUR / HKD / AUD / MYR",
        description: "Basé sur un solo projet de Scrimba, cette web app m'a initié aux principes Don't Repeat Yourself grâce à l'utilisation de fonctions utilisants des paramètres. J'ai également appliqué l'adage 'never trust the user' et ai appliqué des contrôles de l'input utilisateur.",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt",
            "fa-brands fa-js"
        ],
        liveUrl: "https://currency-converter-eur.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/currency-converter",
        tags: [
            "HTML",
            "CSS",
            "JS"
        ]
    },
]

