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
    }   
]

