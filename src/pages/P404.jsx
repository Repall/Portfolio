import React from "react";
import { NavLink } from "react-router-dom";

export default function P404() {
  return (
    <>
      <div className="flex flex-col gap-28 py-28">
        <h1 className="text-red-400 flex justify-center text-8xl font-bold lg:text-[288px]">404</h1>
        <div className="text-red-400 flex flex-col justify-center text-center font-bold text-lg px-5">
          <p className="uppercase text-3xl pb-8">Oups !</p>
          <p>La page que vous demandez n'exsite pas.</p>
          <p>OU</p>
          <p>La page est en cour de développement.</p>
        </div>
        <NavLink to="/" className="underline flex justify-center">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </>
  );
}
