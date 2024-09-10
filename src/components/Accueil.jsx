import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/accueilstyle.css';

gsap.registerPlugin(ScrollTrigger);

function Accueil() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: -100, opacity: 0 }, // Position initiale: décalage vers la gauche et invisible
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          markers: false, // Enlève les marqueurs si tu ne veux pas les voir
        },
      }
    );
  }, []);

  return (
    <div className="home_section">
      {/* Section de l'image */}
      <div className="dla_home_picture">
        <img 
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRmR0yZ2Jq3aPV4J3eZunadNyQ6gS5ZZZ-HUZB-fDhdVFP5TnzjuEf4JU3MdBU40_cV1UW5_h0NbJlhu1P5JBEsiuU82IZpIpudSCxXpw" 
          alt="douala_img" 
        />
      </div>
      {/* Section de la description de Douala */}
      <div className="dla_home_text" ref={textRef}>
        <p>Douala est la capitale économique du Cameroun et
          le principal centre d’affaires du pays.
          Située sur les rives de l’estuaire du fleuve Wouri,
          cette ville dynamique est un carrefour commercial majeur
          en Afrique centrale.</p>
      </div>
    </div>
  );
}

export default Accueil;
