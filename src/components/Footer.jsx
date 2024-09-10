import React from 'react';
import '../styles/footerStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">GalerieInteractive237</h1>
                    <p>
                        Ce projet web est concut selon mon centre d'interet. J'aime la photographie, c'est a dire, prendre des photos du paysage des villes de mon Pays le Cameroun.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; +237 659810488</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; Olamidezyad@gmail.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Liens rapides</h2>
                    <br />
                    <ul>
                        <a href="#"><li>Accueil</li></a>
                        <a href="#"><li>À propos</li></a>
                        <a href="#"><li>Services</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>

                <div className="footer-section contact-form">
                    <h2>Contactez-moi</h2>
                    <br />
                    <form action="#" method="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Votre adresse email..." />
                        <textarea name="message" className="text-input contact-input" placeholder="Votre message..."></textarea>
                        <button type="submit" className="btn btn-big">
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; 2024 GaleieInteractive237 | Designed by MHDz
            </div>
        </footer>
    );
}

export default Footer;
