import React, { useState } from "react";

export default function () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gestion de l'envoi du formulaire
        console.log("Form submitted:", formData);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-10 py-10 md:py-20">
            <h1 className="text-6xl md:text-8xl text-cyan-600 font-bold">Contact</h1>
            <p>N'hésitez pas à me contacter pour discuter de votre projet.</p>
            <form className="flex flex-col rounded w-4/5 lg:w-3/5 gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 mb-4">
                    <label htmlFor="name" className="block text-white">
                        Nom *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="DeadPool"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-cyan-600"
                        required
                    />
                </div>

                <div className="flex flex-col gap-3 mb-4">
                    <label htmlFor="email" className="block text-white">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="deadpool@xforce.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-cyan-600"
                        required
                    />
                </div>

                <div className="flex flex-col gap-3 mb-4">
                    <label htmlFor="phone" className="block text-white">
                        Téléphone *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="0606060606"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-cyan-600"
                        required
                    />
                </div>

                <div className="flex flex-col gap-3 mb-6">
                    <label htmlFor="message" className="block text-white">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message..."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-cyan-600"
                        rows="4"
                        required
                    ></textarea>
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
