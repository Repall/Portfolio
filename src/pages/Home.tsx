import { useState, useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Stack from "../components/Stack";

export default function Home() {
  const words: string[] = ["Web", "React", "TypeScript", "Tailwind"];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <>
      <div className="relative h-screen bg-gradient-to-b to-gradient-1 via-gradient-3 from-gradient-6 animate-wave bg-[length:200%_200%] pt-48 py-14">
        <Header />
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(25, 48, 92, 0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(25, 48, 92, 0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(25, 48, 92, 0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#19305C" />
          </g>
        </svg>
        <section className="bg-background flex flex-col md:flex-row justify-evenly items-center max-lg:items-center max-md:gap-10 max-lg:gap-16 px-10 py-10 md:py-20 mx-5 md:mx-14 lg:mx-32  rounded-[6rem] shadow-xl outline outline-8 outline-white shadow-white">
          <div className="space-y-5 md:space-y-20">
            <h1 className="text-primary flex justify-center font-bold text-4xl sm:text-5xl lg:text-7xl xl:text-8xl">Corentin Caillaud</h1>
            <h2 className="flex justify-center font-bold text-2xl sm:text-3xl lg:text-5xl xl:text-6xl flex-wrap">
              Développeur&nbsp;
              <span
                className={`text-primary animate-bounce transition-opacity duration-500 ease-in-out ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </h2>
            <div className="space-y-6">
              <p className="sm:text-xl">Spécialisé dans le développement web Front-End, basé sur Toulouse et sa région.</p>
              <p className="sm:text-xl">Je réalise des interfaces utilisateur modernes, intuitives et performantes.</p>
            </div>
          </div>
          <img
            alt="Repall"
            fetchpriority="high"
            width="575"
            height="575"
            className="rounded-full w-40 h-40 md:w-64 md:h-64 xl:w-96 xl:h-96"
            src="/img/corentinpp.jpg"
          />
        </section>
      </div>
      {/* <section>
        <h2 className="text-primary text-center text-5xl font-bold">Pésentation</h2>
        <p className="text-center">Développeur junior, je cherche à apprendre tous les jours et à me perfectionner dans le domaine pour proposer une expérience utilisateur de mieux en mieux chaque jours</p>
      </section>
      <section>
        <h2 className="text-primary text-center text-5xl font-bold">Mes projets</h2>
      </section> */}
      <section>
        <h2 className="text-primary text-center text-5xl font-bold">Ma Stack</h2>
        <Stack />
      </section>
      <Footer />
    </>
  );
}
