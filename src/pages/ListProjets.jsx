import React from "react";
import { useProjets } from "../components/GetProjet";
import Thumb from "../components/Thumb";

export default function ListProjets() {
    const { projets, loading, error } = useProjets();

    if (loading) {
        return <div>Chargement des données...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <>
            <div className="py-20">
                <div className="flex flex-col gap-28 items-center">
                    <h1 className="text-5xl text-cyan-600 font-bold">Listes des projets</h1>
                </div>
                <div className="flex flex-col max-md:items-center md:flex-row md:justify-center md:flex-wrap md:rounded-xl my-6 md:p-16 2xl:py-10 gap-y-5 md:gap-y-[50px] md:gap-x-[60px] px-5 md:px-20">
                    <Thumb />
                </div>
            </div>
        </>
    );
}
