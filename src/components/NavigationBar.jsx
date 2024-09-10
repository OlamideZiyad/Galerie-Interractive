import React, { useState } from 'react';
import '../styles/navigationstyle.css';

const NavigationBar = () => {
    // État pour contrôler l'affichage du menu
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'ouverture/fermeture du menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>DOUALA</h1>
            </div>

            {/* Nav links */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#Accueil">Accueil</a></li>
                <li><a href="#histoire">Histoire</a></li>
                <li><a href="#Diaporama">Diaporama</a></li>
                <li><a href="#Galerie">Galerie</a></li>
                <li><a href="#Arrondisement">Visité</a></li>
                <li><a href="#Contact">À propos</a></li>
            </ul>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Icône hamburger */}
            </div>
        </nav>
    );
};

export default NavigationBar;
