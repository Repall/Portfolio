import React, { useState, useEffect } from "react";
import { useProjets } from "../components/GetProjet";
import Thumb from "../components/Thumb";
import Filter from "../components/Filter";

export default function ListProjets() {
    const { projets } = useProjets();
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        console.log(projets); // Vérifie si les projets sont bien chargés
    }, [projets]);

    if (!projets || projets.length === 0) {
        return <div>Chargement des projets...</div>;
    }

    // Filtrage des projets selon la catégorie sélectionnée
    const filteredProjets =
        selectedCategory === "All"
            ? projets
            : projets.filter((projet) => projet.category === selectedCategory);

    // Création de la liste des catégories uniques
    const categories = ["All", ...new Set(projets.map((projet) => projet.category))];
    console.log(categories); // Vérifie les catégories disponibles

    return (
        <>
            <div className="py-20">
                <div className="flex flex-col gap-28 text-center text-5xl text-primary-500 font-bold items-center pb-10 border-b-4 dark:border-white border-black">
                    <h1>Liste des projets</h1>
                </div>
                {/* <Filter categories={categories} selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} /> */}
                <div className="flex flex-col max-md:items-center md:flex-row md:justify-center md:flex-wrap md:rounded-xl my-6 md:p-16 2xl:py-10 gap-y-5 md:gap-y-[50px] md:gap-x-[60px] px-5 md:px-20">
                    <Thumb projets={filteredProjets} />
                </div>
            </div>
        </>
    );
}
