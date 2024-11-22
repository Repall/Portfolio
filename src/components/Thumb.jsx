import { useState } from "react";
import { useProjets } from "./GetProjet";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Skeleton } from "@nextui-org/react";

import ridingCitiesIMG from "../assets/ridingcities.png"
import bookieIMG from "../assets/booki.png"
import ohMyFoodIMG from "../assets/ohmyfood.png"
import printItIMG from "../assets/printit.png"
import sophieBluelIMG from "../assets/sophiebluel.png"
import kasaIMG from "../assets/kasa.png"
import ninaCarducciIMG from "../assets/ninacarducci.png"
import eventsIMG from "../assets/events.png"
import argentBankIMG from "../assets/argentbank.png"
const images = {
  ridingcities: ridingCitiesIMG,
  booki: bookieIMG,
  ohmyfood: ohMyFoodIMG,
  printit: printItIMG,
  sophiebluel: sophieBluelIMG,
  kasa: kasaIMG,
  ninacarducci: ninaCarducciIMG,
  events: eventsIMG,
  argentbank: argentBankIMG,
};

export default function Thumb() {
  const { projets } = useProjets();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProjet, setSelectedProjet] = useState(null);

  const handleOpenModal = (projet) => {
    setSelectedProjet(projet);
    onOpen();
  };

  return (
    <>
      {projets.map((projet) => (
        <div
          key={projet.id}
          onClick={() => handleOpenModal(projet)}
          className="flex flex-col-reverse w-[335px] h-[255px] max-sm:w-64 rounded-xl transition duration-700 hover:scale-105 cursor-pointer"
        >
          {projet ? (
            projet.title ? (
              <p className="z-10 absolute bg-primary-300 text-lg font-bold rounded-b-xl w-[335px] max-sm:w-64 px-5 py-2">
                Projet {projet.number} | {projet.title}
              </p>
            ) : (
              <p className="z-10 absolute bg-danger text-lg font-bold rounded-b-xl w-[335px] max-sm:w-64 px-5 py-2">
                Projet {projet.number} non démarré...
              </p>
            )
          ) : null}

          {projet ? (
            projet.image ? (
              <img className="h-full w-full object-cover rounded-xl" src={images[projet.image]} alt="Image aperçu projet" />
            ) : (
              <Skeleton className="h-full rounded-xl"></Skeleton>
            )
          ) : null}
        </div>
      ))}

      <Modal
        className="bg-black max-h-full border-4 border-primary shadow-2xl shadow-pink-800"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-center text-center text-2xl md:text-4xl">
                <p>{selectedProjet.title}</p>
                <p className="text-lg font-normal flex flex-col sm:flex-row  justify-center items-center gap-4">
                  {selectedProjet.theme}
                  {selectedProjet ? (
                    selectedProjet.responsive === true ? (
                      <Button color="success" variant="shadow" className="cursor-default">
                        Responsive
                      </Button>
                    ) : selectedProjet.responsive === false ? (
                      <Button color="danger" variant="shadow" className="cursor-default">
                        Non responsive
                      </Button>
                    ) : null
                  ) : null}
                </p>
              </ModalHeader>
              <ModalBody className="flex flex-col-reverse md:flex-row-reverse">
                <div className="flex flex-col justify-evenly md:w-1/2 max-sm:pt-6 max-md:mt-6 max-md:gap-10 max-sm:border-t-8 sm:border-x-8 sm:rounded-full md:px-7 text-center items-center ">
                  {selectedProjet ? (
                    selectedProjet.description ? (
                      <p>{selectedProjet.description}</p>
                    ) : (
                      <>
                        <Skeleton className="h-5 w-1/3 rounded-xl"></Skeleton>
                        <Skeleton className="h-5 w-1/2 rounded-xl"></Skeleton>
                        <Skeleton className="h-5 w-1/3 rounded-xl"></Skeleton>
                      </>
                    )
                  ) : null}

                  <div>
                    {selectedProjet ? (
                      selectedProjet.techonologie.length > 0 ? (
                        <>
                          <p className="underline">Technologies utilisées :</p>
                          <div className="flex flex-row flex-wrap justify-center gap-2 pt-3">
                            {Array.isArray(selectedProjet.techonologie)
                              ? selectedProjet.techonologie.map((item, index) => {
                                  return (
                                    <Button
                                      key={index}
                                      radius="full"
                                      className="bg-gradient-to-tr from-pink-500 to-yellow-500
                                            text-white"
                                      variant="shadow"
                                    >
                                      {item}
                                    </Button>
                                  );
                                })
                              : null}
                          </div>
                        </>
                      ) : null
                    ) : null}
                  </div>
                </div>
                {selectedProjet ? (
                  selectedProjet.image ? (
                    <img className="h-full md:w-1/2 object-cover rounded-xl" src={images[selectedProjet.image]} alt="Image aperçu projet" />
                  ) : (
                    <Skeleton className="h-64 md:w-1/2 rounded-xl"></Skeleton>
                  )
                ) : null}
              </ModalBody>
              <ModalFooter className="flex flex-col md:flex-row justify-evenly">
                {selectedProjet ? (
                  selectedProjet.github ? (
                    <Button color="primary" variant="shadow" onClick={() => window.open(selectedProjet.github, "_blank")}>
                      Voir le dépôt <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Button>
                  ) : (
                    <Button color="default" isDisabled className="cursor-default">
                      Dépôt non disponible
                    </Button>
                  )
                ) : null}
                {selectedProjet ? (
                  selectedProjet.state === "OK" ? (
                    <Button color="success" variant="shadow" className="cursor-default">
                      Projet terminé !
                    </Button>
                  ) : selectedProjet.state === "PROGRESS" ? (
                    <Button color="warning" isLoading className="cursor-default">
                      Projet en cours...
                    </Button>
                  ) : selectedProjet.state === "NOT_STARTED" ? (
                    <Button color="danger" variant="shadow" className="cursor-default">
                      Projet non démarré
                    </Button>
                  ) : null
                ) : null}
                {selectedProjet ? (
                  selectedProjet.url ? (
                    <Button color="primary" variant="shadow" onClick={() => window.open(`${selectedProjet.url}`, "_blank")}>
                      Voir le projet <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Button>
                  ) : (
                    <Button color="default" isDisabled className="cursor-default">
                      Projet non disponible
                    </Button>
                  )
                ) : null}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
