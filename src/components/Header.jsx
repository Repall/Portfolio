import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-slate-700 text-white flex flex-col lg:flex-row lg:justify-around max-lg:gap-20 items-center p-7">
                <div class="flex flex-col gap-5 lg:gap-10 text-center">
                    <h1 class="text-7xl font-bold uppercase">REPALL.FR</h1>
                </div>
                <nav className="flex flex-row justify-center items-center text-2xl">
                    <ul className="flex flex-row items-center lg:flex lg:flex-row gap-10 max-lg:text-2xl ">
                        <li className="">
                            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-cyan-600 px-3 py-2 rounded-xl " : "hover:text-cyan-600 duration-500 cursor-pointer px-3 py-2 ")}>
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projets" className={({ isActive }) => (isActive ? "bg-cyan-600 px-3 py-2 rounded-xl " : "hover:text-cyan-600 duration-500 cursor-pointer px-3 py-2")}>
                                Projets
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "bg-cyan-600 p-2 rounded-xl " : "hover:text-cyan-600 duration-500 cursor-pointer p-2")}>
                                À Propos
                            </NavLink>
                        </li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
}
