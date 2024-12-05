import React, { useState, useMemo } from "react";
import { Input, Textarea } from "@nextui-org/react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const validateName = (value) => value.match(/^[a-zA-ZÀ-ÿ\s'-]+$/);
  const isNameInvalid = useMemo(() => {
    return name !== "" && !validateName(name);
  }, [name]);

  const validatePhone = (value) => value.match(/^[0-9]{10}$/);
  const isPhoneInvalid = useMemo(() => {
    return phone !== "" && !validatePhone(phone);
  }, [phone]);

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  const isEmailInvalid = useMemo(() => {
    return email !== "" && !validateEmail(email);
  }, [email]);

  const minDescriptionLength = 20;
  const isDescriptionTooShort = useMemo(() => {
    return description !== "" && description.length < minDescriptionLength;
  }, [description]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10 md:py-20">
      <h1 className="text-6xl md:text-8xl text-cyan-600 font-bold">Contact</h1>
      <p>N'hésitez pas à me contacter pour discuter de votre projet.</p>
      <form className="flex flex-col rounded w-4/5 lg:w-3/5 gap-6">
        
        {/* Champ Nom */}
        <div className="flex flex-col gap-3 mb-4">
          <Input
            isRequired
            type="text"
            label="Nom"
            placeholder="DeadPool"
            labelPlacement="outside"
            startContent={<i className="fa-solid fa-user text-2xl text-default-400 pointer-events-none flex-shrink-0"></i>}
            value={name}
            onValueChange={setName}
            isInvalid={isNameInvalid}
            color={isNameInvalid ? "danger" : undefined}
            errorMessage={isNameInvalid && "Le nom ne doit contenir que des lettres, des espaces ou des tirets !"}
            size="lg"
          />
        </div>

        {/* Champ Email */}
        <div className="flex flex-col gap-3 mb-4">
          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="deadpool@xforce.com"
            labelPlacement="outside"
            startContent={<i className="fa-solid fa-envelope text-2xl text-default-400 pointer-events-none flex-shrink-0"></i>}
            value={email}
            onValueChange={setEmail}
            isInvalid={isEmailInvalid}
            color={isEmailInvalid ? "danger" : undefined}
            errorMessage={isEmailInvalid && "Merci d'entrer une adresse mail valide !"}
            size="lg"
          />
        </div>

        {/* Champ Téléphone */}
        <div className="flex flex-col gap-3 mb-4">
          <Input
            isRequired
            type="tel"
            label="Téléphone"
            placeholder="0606060606"
            labelPlacement="outside"
            startContent={<i className="fa-solid fa-phone text-2xl text-default-400 pointer-events-none flex-shrink-0"></i>}
            value={phone}
            onValueChange={setPhone}
            isInvalid={isPhoneInvalid}
            color={isPhoneInvalid ? "danger" : undefined}
            errorMessage={isPhoneInvalid && "Le numéro de téléphone doit contenir 10 chiffres !"}
            size="lg"
          />
        </div>

        {/* Champ Description */}
        <div className="flex flex-col gap-3 mb-6">
        <Textarea
            isRequired
            label="Description"
            labelPlacement="outside"
            startContent={<i className="fa-solid fa-message text-2xl text-default-400 pointer-events-none flex-shrink-0"></i>}
            placeholder="Votre message..."
            className="w-full"
            radius="lg"
            size="lg"
            value={description}
            onValueChange={setDescription}
            isInvalid={isDescriptionTooShort}
            color={isDescriptionTooShort ? "danger" : undefined} 
            errorMessage={
              isDescriptionTooShort && `La description doit contenir au moins ${minDescriptionLength} caractères.`
            }
          />
        </div>

        <button
          type="submit"
          className="self-center uppercase bg-cyan-600 text-white py-2 px-10 rounded-lg hover:bg-cyan-400 focus:outline-none focus:bg-indigo-600"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
