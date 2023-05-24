import { nanoid } from 'nanoid'

//STACK ICONS
// HTML "fa-brands fa-html5"
// CSS "fa-brands fa-css3-alt"
// JS "fa-brands fa-js"
// NODE "fa-brands fa-node-js"
// REACT "fa-brands fa-react"
// SEO "fa-solid fa-magnifying-glass"

export const data = [
    
    {
        id: nanoid(),
        pictures: [
            "/images/kasa/DEKSTOP-localhost_3000_fiche-logement_c67ab8a7.webp",
            "/images/kasa/TABLET-kasa-location.netlify.app_a-propos.webp",
            "/images/kasa/kasa-location.netlify.app_a-propos.webp",
            "/images/kasa/localhost_3000_fiche-logement_b9123946(iPhone%2012%20Pro).webp",
            "/images/kasa/mockup.webp",
        ],
        heading: "Kasa",
        subheading: "Location d’appartements entre particuliers",
        description: "J'ai développé ce projet OpenClassrooms en React et CSS à partir d'une maquette Figma déjà réalisée et sans bibliothèques tierces. J'ai utilisé React Router pour la navigation entre les 4 pages et mis en exergue la bonne pratique de composants réutilisables. J'y ai également inclus une couche services pour la future intégration d'une API.",
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
        pictures: [
            "/images/grimoire/cover.webp",
            "/images/grimoire/book-detail.webp",
            "/images/grimoire/laptop2.webp",
            "/images/grimoire/mockup.webp",
            "/images/grimoire/addbook.webp",
        ],
        heading: "Mon Vieux Grimoire",
        subheading: "Site communautaire de notations de livres",
        description: "Pour ce projet OpenClassrooms, j'ai développé le back-end de ce site avec le stack MERN. Cette API REST permet la réalisation d'opérations CRUD telles que l'ajout de livres et la notation. La sécurisation des routes protégées est effectuée avec JWT",
        stack: [
            "fa-brands fa-react",
            "fa-brands fa-css3-alt",
            "fa-brands fa-node-js"
        ],
        liveUrl: "https://monvieuxgrimoire.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/Mon-Vieux-Grimoire--backend",
        tags: [
            "NODE",
            "EXPRESS",
            "MONGODB"
        ]
    }, 
    {
        id: nanoid(),
        pictures: [
            "/images/sophie-bluel/cover.jpg",
            "/images/sophie-bluel/login.jpg",
            "/images/sophie-bluel/dashboard.jpg",
            "/images/sophie-bluel/gallery.jpg",
            "/images/sophie-bluel/modal1.jpg",
            "/images/sophie-bluel/modal2.jpg",
            "/images/sophie-bluel/mockup.jpg",
            "/images/sophie-bluel/mobile.jpg",
            "/images/sophie-bluel/tablet.jpg",
        ],
        heading: "Sophie Bluel",
        subheading: "Portfolio pour architecte d'intérieur",
        description: "Pour ce projet OpenClassrooms, j'ai développé le front-end et intégré les requêtes API pour communiquer avec le back-end existant. Une page login permet à l'administrateur de se connecter puis d'utiliser des opérations CRUD pour la gestion de ses travaux.",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt",
            "fa-brands fa-js"
        ],
        liveUrl: "https://sophiebluelarchitecte.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/Projet-3---Portfolio-architecte-sophie-bluel",
        tags: [
            "HTML",
            "CSS",
            "API"
        ]
    },  
    {
        id: nanoid(),
        pictures: [
            "/images/nina-carducci/cover.jpg",
            "/images/nina-carducci/lighthouse.jpg",
            "/images/nina-carducci/gallery.jpg",
            "/images/nina-carducci/services.jpg",
            "/images/nina-carducci/contact.jpg",          
        ],
        heading: "Nina Carducci",
        subheading: "Débogage, optimisation et SEO",
        description: "Dans le cadre de ce projet OpenClassrooms, j'ai effectué un travail à plusieurs niveaux sur le site de cette photographe. Tout d'abord, l'optimisation des images du site : des images trop lourdes rendaient la page très longue à charger. Ensuite, le débogage du code et l'optimisation de sa structure afin d’améliorer le chargement et l’accessibilité du site. Finalement, un travail de SEO pour améliorer le positionnement du site dans les résultats de moteurs de recherche.",
        stack: [
            "fa-brands fa-html5",
            "fa-brands fa-css3-alt",
            "fa-brands fa-js",
            "fa-solid fa-magnifying-glass"
        ],
        liveUrl: "https://nina-carducci-photographe.netlify.app/",
        repoUrl: "https://github.com/BuckyBuck135/Projet-5---nina-carducci.github.io",
        tags: [
            "HTML",
            "CSS",
            "JS",
            "SEO"
        ]
    },  
    {
        id: nanoid(),
        pictures: [
            "/images/booki/desktop.webp",         
            "/images/booki/mobile.webp",         
            "/images/booki/tablet.webp",         
            "/images/booki/activites.webp",         
            "/images/booki/mockup.webp",         
        ],
        heading: "Booki",
        subheading: "Trouvez votre hébergement pour des vacances de rêve",
        description: "Booki fut mon premier projet OpenClassrooms. En partant d'un design Figma, j'ai intégré cette interface totalement responsive (desktop, tablette, mobile) en HTML et CSS. Cette version ne prévoyant pas de JS, les filtres ne sont donc pas fonctionnels.",
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
        pictures: [
            "/images/password-generator/cover.jpg",
            "/images/password-generator/mobile.jpg",
            "/images/password-generator/copied.jpg"
            
        ],
        heading: "Générateur de mots de passe",
        subheading: "Never use an insecure password again",
        description: "Ce projet Scrimba couvre les bases de JS telles que la manipulation du DOM et les boucles for. J'y ai ajouté un color picker codé en CSS pur ainsi qu'une fonction de copie du mot de passe dans le presse-papiers. Un pop-up indique la copie réussie pour une meilleure expérience utilisateur.",
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
    }
    ,
    {
        id: nanoid(),
        pictures: [
            "/images/menumaker/cover.jpg",
            "/images/menumaker/veille.jpg",
            "/images/menumaker/flowchart.jpg",
            "/images/menumaker/kanban.jpg",
            "/images/menumaker/table.jpg",
            
        ],
        heading: "Menu Maker by Qwenta",
        subheading: "Planification et gestion de projet",
        description: "Ce projet OpenClassrooms est particulier puisqu'il ne concerne pas la programmation, mais la planification et la gestion de projet en trois axes : développer un système de veille technologique afin de trouver les solutions techniques aux besoins fonctionnels; en parallèle, déterminer les spécifications techniques du site Menu Maker by Qwenta; finalement, organiser la gestion de projet du développement du site.",
        stack: [
            ""
        ],
        liveUrl: "",
        repoUrl: "",
        tags: [
            "Figma",
            "Notion",
            "Miro"
        ]
    },
]

