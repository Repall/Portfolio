import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projets from '../assets/projets.json'; 

const ProjetRedirect = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const projet = projets.find(p => p.id === id);

    useEffect(() => {
        if (!projet) {
            navigate('/404', { replace: true });
        } else {
            window.open(projet.url, '_blank');
            navigate('/projets', { replace: true }); 
        }
    }, [projet, navigate]);

    return null;
};

export default ProjetRedirect;
