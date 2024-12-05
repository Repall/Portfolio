import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import projetsData from '../data/ProjetsData'; // Import des données
import Projet from "../data/Types"

interface ProjetsContextType {
    projets: Projet[];
    loading: boolean;
    error: string | null;
}

interface ProjetsProviderProps {
    children: ReactNode;
}

const ProjetsContext = createContext<ProjetsContextType | undefined>(undefined);

export function ProjetsProvider({ children }: ProjetsProviderProps) {
    const [projets, setProjets] = useState<Projet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            setProjets(projetsData); 
            setLoading(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(`Erreur lors du chargement des données: ${err.message}`);
            } else {
                setError('Une erreur inconnue est survenue.');
            }
            setLoading(false);
        }
    }, []);

    return (
        <ProjetsContext.Provider value={{ projets, loading, error }}>
            {children}
        </ProjetsContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProjets() {
    const context = useContext(ProjetsContext);
    if (!context) {
        throw new Error('useProjets must be used within a ProjetsProvider');
    }
    return context;
}
