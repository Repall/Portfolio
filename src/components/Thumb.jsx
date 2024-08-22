import React from "react";
import { useProjets } from "./GetProjet";
import { Link } from "react-router-dom";

export default function Thumb() {
    const { projets, loading, error } = useProjets();

    if (loading) {
        return <div>Chargement des données...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <>
            {projets.map((projet) => {
                const imageUrl = new URL(projet.image, import.meta.url).href;
                return (
                    <Link to={`/projet/${projet.id}`} key={projet.id}>
                        <div className="flex flex-col-reverse w-[335px] h-[255px] max-sm:size-64 bg-cyan-600  rounded-xl transition duration-700 hover:scale-105">
                            <p className="z-5 absolute bg-cyan-600  text-white text-lg font-bold rounded-b-xl w-[335px] max-sm:w-64 px-5 py-2">Projet {projet.id} | {projet.title}</p>
                            <img className="h-full w-full object-cover rounded-xl" src={imageUrl} alt="Image aperçu projet" />
                        </div>
                    </Link>
                );
            })}
        </>
    );
}
