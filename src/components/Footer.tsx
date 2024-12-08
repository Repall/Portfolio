export default function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-5 px-10 md:px-20 py-5 text-white">
        <div className="flex flex-col lg:flex-row justify-center max-lg:gap-14 lg:justify-around items-center  p-5 md:h-full border-solid border-4 border-primary rounded-3xl shadow-md shadow-white ">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-primary text-5xl font-bold">Contact</h2>
            <p className="text-center">
              <span className="underline">Toulouse</span> | <span className="underline">Haute-Garonne</span> |
              <span className="underline">Occitanie</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 xl:gap-8">
            <div className="flex flex-col items-center gap-1">
              <p className="border-b-2 border-primary">EMAIL</p>
              <a className="transition-color duration-700 hover:text-primary" title="Mon email" href="mailto:corentin.caillaud17@gmail.com">
                corentin.caillaud17@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="border-b-2 border-primary">TÉLÉPHONE</p>
              <a className="transition-color duration-700 hover:text-primary" title="Mon Téléphone" href="tel:+33785643160">
                07-85-64-31-60
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <a href="https://github.com/Repall" aria-label="Mon GitHub">
              <i className="fa-brands fa-github text-5xl"></i>
            </a>
            <a href="www.linkedin.com/in/corentin-caillaud/">
              <i className="fa-brands fa-linkedin text-5xl"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-between text-center mt-5 flex-col gap-5 w-fit mx-auto">
          <p>Ce site a été réalisé à la main et ne collecte aucune donnée. Merci de votre visite !</p>
          <p>
            Fait avec <i className="fa-solid fa-heart text-red-700"></i> et passion par Corentin
          </p>
          <p className="text-sm mx-auto font-bold">
            &copy; 2024
            <span className="text-primary"> Corentin </span>
            <br />
            Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
}
