export default function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-5 px-10 md:px-20 py-5 text-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 lg:gap-32 xl:gap-56 p-5 2xl:gap-80 md:h-full border-solid border-4 border-primary rounded-3xl shadow-md shadow-white ">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-primary text-5xl font-bold">Contact</h2>
            <p className="text-center"><span className="underline">Toulouse</span> | <span className="underline">Haute-Garonne</span> | <span className="underline">Occitanie</span></p>
          </div>
          {/* <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-1">
                          <p className="underline">Email :</p>
                          <a className="transition-color duration-700 hover:text-focus" title="Mon email" href="mailto:repall.017@gmail.com">
                              repall.017@gmail.com
                          </a>
                      </div>
                      <div className="flex flex-row gap-1">
                          <p className="underline">Téléphone :</p>
                          <a className="transition-color duration-700 hover:text-focus" title="Mon Téléphone" href="tel:+33632988546">
                              06.32.98.85.46
                          </a>
                      </div>
                  </div> */}
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
