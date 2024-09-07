import React from 'react';

export default function Filter({ categories, selectedCategory, onCategorySelect }) {
    // Filtrer les catégories pour éviter les doublons (bien que l'on ait déjà utilisé Set)
    const uniqueCategories = [...new Set(categories)];

    const handleCategorySelect = (category) => {
        console.log("Catégorie sélectionnée :", category); // Vérifie la catégorie sélectionnée
        onCategorySelect(category);
    };

    return (
        <div className="flex flex-row gap-4 my-4">
            {uniqueCategories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}  // Utilise handleCategorySelect pour log
                    className={`px-4 py-2 rounded-2xl ${
                        selectedCategory === category ? "bg-pink-600 text-white" : "bg-red-700"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
