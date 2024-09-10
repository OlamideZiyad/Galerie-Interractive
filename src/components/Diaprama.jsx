import React, { useState, useEffect } from "react";
import '../styles/styleDiaporama.css';

function Slideshow() {
    const images = [
        {
            image: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/287673999.jpg?k=e4dd22511779ac652209741bea8044f19b89d43e857ca127b62be8271f233243&o=",
            description: 'BONANDJO'
        },
        {
            image: "https://sortiradouala.com/assets/uploads/article/QuestcequifaitdevousunhabitantdelavilledeDouala/image_1648914320085.webp",
            description: 'DEIDO'
        },
        {
            image: "https://c0.wallpaperflare.com/preview/37/753/222/cameroon-douala-bonassama-night.jpg",
            description: 'BONASAMA'
        },
        {
            image: "https://pbs.twimg.com/media/EorLLk0XUAExrj-?format=jpg&name=large",
            description: 'BONAMOUSSADI'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("fade-in");

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass("fade-out");
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setFadeClass("fade-in");
            }, 500); // Délai pour la transition
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="slideshow" id="Diaporama">
            <img 
                src={images[currentIndex].image} 
                alt={`Slide ${currentIndex + 1}`} 
                className={fadeClass} 
            />
            <div className="description">
                <p>{images[currentIndex].description}</p>
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
