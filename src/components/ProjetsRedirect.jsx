import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projets from '../assets/projets.json'; 

const ProjetRedirect = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const projet = projets.find(p => p.id === id);

    useEffect(() => {
        if (!projet) {
            navigate('/404');
        }
    }, [projet, navigate]);

    if (!projet) {
        return null;
    }

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src={projet.url}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title={`Projet ${id}`}
            />
        </div>
    );
};

export default ProjetRedirect;
