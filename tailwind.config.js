const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    darkMode: "class", // Utilisation de la classe "dark" pour activer le mode sombre
    plugins: [
        nextui({
            themes: {
                "blue-dark": {
                    extend: "dark", // Hérite des valeurs par défaut du thème sombre de NextUI
                    colors: {
                        background: "#001F26", // Bleu très sombre pour le fond
                        foreground: "#ffffff", // Texte clair pour lisibilité
                        primary: {
                            50: "#003844",
                            100: "#004d5a",
                            200: "#00677c", 
                            300: "#00819e",
                            400: "#009abc",
                            500: "#00b3d8", // Couleur primaire par défaut
                            600: "#33c6e0",
                            700: "#66d8e8",
                            800: "#99eaf1",
                            900: "#ccfdf9",
                            DEFAULT: "#00b3d8", // Couleur principale
                            foreground: "#ffffff", // Couleur du texte des boutons
                        },
                        focus: "#33c6e0", // Couleur de focus
                    },
                    layout: {
                        disabledOpacity: "0.4", // Transparence pour les éléments désactivés
                        radius: {
                            small: "4px",
                            medium: "8px", // Rayons de bordure doux
                            large: "12px",
                        },
                        borderWidth: {
                            small: "1px",
                            medium: "2px",
                            large: "3px",
                        },
                    },
                },
            },
        }),
    ],
};
