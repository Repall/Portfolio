import React, { createContext, useContext, useState, useEffect } from 'react';
import projetsData from '../assets/projets.json'; 

const ProjetsContext = createContext();

export function ProjetsProvider({ children }) {
    const [projets, setProjets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            setProjets(projetsData);
            setLoading(false);
        } catch (err) {
            setError(`Erreur lors du chargement des données: ${err.message}`);
            setLoading(false);
        }
    }, []);

    return (
        <ProjetsContext.Provider value={{ projets, loading, error }}>
            {children}
        </ProjetsContext.Provider>
    );
}

export function useProjets() {
    return useContext(ProjetsContext);
}
