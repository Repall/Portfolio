import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#19305C",
        foreground: "#ffffff", // Text par default
        primary: "#F1916D",
        secondary: "#AE7DAC",
        gradient: {
          1: "#03122F",
          2: "#19305C",
          3: "#413B61",
          4: "#AE7DAC",
          5: "#F3DADF",
          6: "#F1916D",
        }
      },
      animation: {
        scroll: 'scroll 5s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        "nextui": {
          colors: {},
          layout: {
            // disabledOpacity: "0.4", // Transparence pour les éléments désactivés
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
