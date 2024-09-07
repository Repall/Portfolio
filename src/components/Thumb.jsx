import React, { useState } from "react";
import { useProjets } from "./GetProjet";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Skeleton } from "@nextui-org/react";

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
            projet.number && projet.title ? (
              <p className="z-50 absolute bg-primary-300 text-lg font-bold rounded-b-xl w-[335px] max-sm:w-64 px-5 py-2">
                Projet {projet.number} | {projet.title}
              </p>
            ) : (
              <p className="z-50 absolute bg-danger text-lg font-bold rounded-b-xl w-[335px] max-sm:w-64 px-5 py-2">Projet {projet.number} non démarré...</p>
            )
          ) : null}

          {projet ? (
            projet.image ? (
              <img className="h-full w-full object-cover rounded-xl" src={projet.image} alt="Image aperçu projet" />
            ) : (
              <Skeleton className="h-full rounded-xl"></Skeleton>
            )
          ) : null}
        </div>
      ))}

      <Modal
        className="bg-black border-4 border-primary shadow-2xl shadow-pink-800"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="justify-center text-4xl">{selectedProjet.title}</ModalHeader>
              <ModalBody className="flex flex-row-reverse">
                <div className="flex flex-col justify-evenly w-1/2 text-center items-center ">
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
                          <div className="flex flex-row gap-2 pt-3">
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
                                }): null}
                          </div>
                        </>
                      ) : null
                    ) : null}
                  </div>
                </div>
                {selectedProjet ? (
                  selectedProjet.image ? (
                    <img className="h-full w-1/2 object-cover rounded-xl" src={selectedProjet.image} alt="Image aperçu projet" />
                  ) : (
                    <Skeleton className="h-64 w-1/2 rounded-xl"></Skeleton>
                  )
                ) : null}
                {/* <img className="h-full w-1/2 object-cover rounded-xl" src={selectedProjet.image} alt="Image du projet" /> */}
              </ModalBody>
              <ModalFooter className="flex flex-row justify-evenly">
                {selectedProjet ? (
                  selectedProjet.github ? (
                    <Button color="primary" variant="shadow" onClick={() => window.open(selectedProjet.github, "_blank")}>
                      Voir le dépôt <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
                      Voir le projet <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
