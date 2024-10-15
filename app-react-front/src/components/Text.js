import React, { useState } from 'react';

const AjoutProducteur = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        type_acheteur: '',
        numero_cni: '',
        numero_oncc: '',
        contact: '',
        filiale: '',
        coordonnees_geographiques: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        try {
            const response = await fetch('http://localhost:8000/cocoa/acheteur/new/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erreur réseau : ' + response.statusText);
            }

            const result = await response.json();
            console.log('Succès:', result);
        } catch (error) {
            console.error('Erreur:', error);
        }

        // Réinitialiser le formulaire après l'envoi
        setFormData({ 
        nom: '',
        prenom: '',
        type_acheteur: '',
        numero_cni: '',
        numero_oncc: '',
        contact: '',
        filiale: '',
        coordonnees_geographiques: '', 

        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nom">nom :</label>
                <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    value={formData.nom} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="prenom">prenom :</label>
                <input 
                    type="text" 
                    id="prenom" 
                    name="prenom" 
                    value={formData.prenom} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="type_acheteur">type_acheteur :</label>
                <input 
                    type="text" 
                    id="type_acheteur" 
                    name="type_acheteur" 
                    value={formData.type_acheteur} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="numero_cni">numero_cni :</label>
                <input 
                    type="text" 
                    id="numero_cni" 
                    name="numero_cni" 
                    value={formData.numero_cni} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="numero_oncc">numero_oncc :</label>
                <input 
                    type="text" 
                    id="numero_oncc" 
                    name="numero_oncc" 
                    value={formData.numero_oncc} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="contact">contact :</label>
                <input 
                    type="text" 
                    id="contact" 
                    name="contact" 
                    value={formData.contact} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="filiale">filiale :</label>
                <input 
                    type="text" 
                    id="filiale" 
                    name="filiale" 
                    value={formData.filiale} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="coordonnees_geographiques">coordonnees_geographiques :</label>
                <input 
                    type="text" 
                    id="coordonnees_geographiques" 
                    name="coordonnees_geographiques" 
                    value={formData.coordonnees_geographiques} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default AjoutProducteur;