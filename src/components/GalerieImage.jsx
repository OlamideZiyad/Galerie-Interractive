import React from 'react';
import '../styles/imageGallery.css';

function ImageGallery() {
    const images = [
        {
            src: "https://scontent.fdla4-1.fna.fbcdn.net/v/t39.30808-6/454384126_495196839765699_2473371730896212494_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=M_5MBGVghXAQ7kNvgHPZ799&_nc_ht=scontent.fdla4-1.fna&_nc_gid=AIKRE6r7lp5vZyWYL7SX68d&oh=00_AYBflpJPAlJ1Wjn7dmoecA0phZ-VUWhCHorX9_L8_YAYTQ&oe=66E0BD04",
            title: "Golden Bank & nouveau siege CCA",
            description: "A GAUCHE LE NOUVEAU SIEGE DE LA GOLDEN BANK DES MILLIADAIRES FOYOU ET CONGELCAM ET A DROITE CELUI DU MILLIADAIRE MKEMLA DE CCA BANK."
        },
        {
            src: "https://scontent.fdla4-1.fna.fbcdn.net/v/t39.30808-6/301751555_1945830542275619_5034388795459036025_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qx3VyywslcAQ7kNvgEGOzaE&_nc_ht=scontent.fdla4-1.fna&_nc_gid=Ab1EjrDiSIVTfKaMHu3Crb9&oh=00_AYAJ0WbqYTQTRTJBzHzL4MDhkBSMz5Nvi25KKYFQ2C38lg&oe=66E09DC4",
            title: "Krystal Palace",
            description: "Hotel 5 Etoile a Douala"
        },
        {
            src: "https://scontent.fdla4-1.fna.fbcdn.net/v/t39.30808-6/302150223_5220810581371891_8566210849356189086_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AJaIr4UUDn8Q7kNvgEMhdfR&_nc_ht=scontent.fdla4-1.fna&oh=00_AYC4B1k9qA9gED7vYPd1Lhm5wpGNL3drmZq4vY7iQHMMYA&oe=66E0D8AC",
            title: "Port Autonome",
            description: "Le port autonome de Douala"
        },
        {
            src:'https://scontent.fdla4-1.fna.fbcdn.net/v/t39.30808-6/351327106_808614470398787_2101154301513080091_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NbDUJVXBbXMQ7kNvgH9CObx&_nc_ht=scontent.fdla4-1.fna&oh=00_AYA_ByimRUEi4He_hb6hNZdTbQ7LCqvcYxfMAlgiR8C5fw&oe=66E0DACF',
            title: "Douala Grand Mall",
            description: "Le plus grand Centre commercial de l'afrique central"
        }
        // Ajoute d'autres images ici
    ];

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <div className="image-container" key={index}>
                    <img src={image.src} alt={image.title} className="gallery-image" />
                    <div className="overlay">
                        <div className="overlay-text">
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;
