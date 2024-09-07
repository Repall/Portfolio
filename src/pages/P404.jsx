import React from "react";

export default function P404() {

    return (
        <>
            <div className="flex flex-col gap-28 py-28">
                <h1 className="text-red-400 flex justify-center text-8xl font-bold lg:text-[288px]">404</h1>
                <p className="text-red-400 flex justify-center text-center text-lg px-5">Oups! La page que vous demandez n'exsite pas. <br /> OU <br />La page est en cour de développement.</p>
                <a href="/" className="underline flex justify-center">
                    Retourner sur la page d'accueil
                </a>
            </div>
        </>
    );
}