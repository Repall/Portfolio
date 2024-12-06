import { NavLink } from "react-router-dom";

export default function P404() {
  return (
    <>
      <div className="flex flex-col gap-16 mb-14">
        <h1 className="text-secondary flex justify-center text-8xl font-bold lg:text-[288px]">404</h1>
        <div className="text-secondary flex flex-col justify-center text-center font-bold text-lg px-5">
          <p className="uppercase text-3xl pb-8">Oups !</p>
          <p>La page que vous demandez n'exsite pas.</p>
          <p className="border-y-4 self-center w-1/12">OU</p>
          <p>La page est en cour de développement.</p>
        </div>
        <NavLink to="/" className="underline flex justify-center">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </>
  );
}
