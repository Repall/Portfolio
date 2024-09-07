import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


export default function Home() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div className="flex flex-col gap-28 py-20">
                <h1 className="text-cyan-600 flex justify-center text-5xl font-bold lg:text-8xl">Site en construction</h1>
                <p className="flex justify-center text-5xl font-bold lg:text-8xl">Repall. <br /><br /><br /><br /><br /><br /><br /></p>
            </div> 
        </>
    );
}
