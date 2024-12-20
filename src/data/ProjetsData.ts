import { Projet } from "./Types"

const projetsData: Projet[] = [
    {
        id: 1,
        number: 1,
        title: "Riding Cities",
        image: "/img/projets/ridingcities.png",
        url: "https://opc-riding-cities.vercel.app",
        github: "https://github.com/Repall/OPC-Riding-Cities",
        description: "Intégrer des images et des class CSS dans le fichier HTML",
        theme: "Premier pas sur le langage HTML",
        technologie: [
            "HTML",
            "CSS"
        ],
        responsive: false,
        category: "Formation",
        state : "OK"
    },
    {
        id: 2,
        number : 2,
        title: "Booki",
        image: "/img/projets/booki.png",
        url: "https://opc-booki.vercel.app/",
        github: "https://github.com/Repall/OPC-Booki",
        description: "Créer un site de A à Z avec HTML et CSS",
        theme: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
        technologie: [
            "HTML",
            "CSS"
        ],
        responsive: true,
        category: "Formation",
        state : "OK"
    },
    {
        id: 3,
        number : 3,
        title: "Oh My Food",
        image: "/img/projets/ohmyfood.png",
        url: "https://opc-oh-my-food.vercel.app/",
        github: "https://github.com/Repall/OPC-OhMyFood",
        description: "Créer un site de A à Z avec HTML et CSS avec des animations et transitions",
        theme: "Améliorez l'interface d'un site mobile avec des animations CSS",
        technologie: [
            "HTML",
            "CSS",
            "SASS / SCSS"
        ],
        responsive: true,
        category: "Formation",
        state : "OK"
    },
    {
        id: 4,
        number : 4,
        title: "Print It",
        image: "/img/projets/printit.png",
        url: "https://opc-print-it.vercel.app/",
        github: "https://github.com/Repall/OPC-Print-It",
        description: "Réaliser un carrousel en JS",
        theme: "Premiers pas sur le langage JavaScript",
        technologie: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        responsive: false,
        category: "Formation",
        state : "OK"
    },
    {
        id: 5,
        number : 5,
        title: "Portfolio Architecte Sophie Bluel",
        image: "/img/projets/sophiebluel.png",
        url: null,
        github: "https://github.com/Repall/OPC-Portfolio-Architecte-Sophie-Bluel",
        description: "Récupérer et modifier (add / delete) des données depuis une API et les afficher",
        theme: "Créez une page web dynamique avec JavaScript",
        technologie: [
            "HTML",
            "CSS",
            "JavaScript",
            "BackEnd"
        ],
        responsive: true,
        category: "Formation",
        state : "OK"
    },
    {
        id: 6,
        number : 6,
        title: "Kasa",
        image: "/img/projets/kasa.png",
        url: "https://opc-kasa.vercel.app",
        github: "https://github.com/Repall/OPC-Kasa",
        description: "Créer un site avec React et React Router et afficher des données depuis un JSON",
        theme: "Créez une application web de location immobillière avec React",
        technologie: [
            "HTML",
            "Tailwind CSS",
            "Vite",
            "React Router"
        ],
        responsive: true,
        category: "Formation",
        state : "OK"
    },
    {
        id: 7,
        number : 7,
        title: "Nina Carducci",
        image: "/img/projets/ninacarducci.png",
        url: "https://opc-nina-carducci.vercel.app/",
        github: "https://github.com/Repall/OPC-Nina-Carducci",
        description: "Optimiser le SEO d'un site",
        theme: "Optimisez le référencement d'un site de photographe",
        technologie: [
            "HTML",
            "CSS",
            "JavaScript",
            "Lighthouse"
        ],
        responsive: true,
        category: "Formation",
        state : "OK"
    },
    {
        id: 8,
        number : 8,
        title: "724events",
        image: "/img/projets/724events.png",
        url: "https://opc-724events.vercel.app/",
        github: "https://github.com/Repall/OPC-724events.git",
        description: "Chercher, trouver et corriger 6 bugs du site",
        theme: "Débuggez le site d'une agence d'événementiel",
        technologie: [
            "HTML",
            "CSS / SCSS", 
            "JavaScript",
            "Yarn",
            "CRA"
        ],
        responsive: true,
        category: "Formation",
        state : "OK"
    },
    {
        id: 9,
        number : 9,
        title: "Argent Bank",
        image: "/img/projets/argentbank.png",
        url: "",
        github: "https://github.com/Repall/OPC-Argent-Bank.git",
        description: "Utilisez une API pour un compte utilisateur bancaire avec React",
        theme: "Implémentez le front-end d'une application bancaire avec React",
        technologie: [
            "React",
            "Redux",
            "TypeScript",
            "Tailwind CSS"
        ],
        responsive: true,
        category: "Formation",
        state : "OK"
    },
    {
        id: 10,
        number : 10,
        title: "Qwenta",
        image: "/img/projets/qwenta.png",
        url: null,
        github: null,
        description: "Planifiez le développement du site de votre client",
        theme: "Gestion de Projet",
        technologie: [
            "GitHub",
            "PowerPoint"
        ],
        responsive: null,
        category: "Formation",
        state : "OK"
    },
    {
        id: 11,
        number : 11,
        title: "Mon Portfolio",
        image: "/img/projets/repall.png",
        url: "https://repall.fr",
        github: null,
        description: "Créez et publiez votre portfolio de développeur",
        theme: "Créer et mettre en ligne son propre site",
        technologie: [
            "React", 
            "TypeScript",
            "Tailwind CSS",
            "Next UI",
            "Vercel"
        ],
        responsive: true,
        category: "Formation",
        state : "OK"
    }
];

export default projetsData;
