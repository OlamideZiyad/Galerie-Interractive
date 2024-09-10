import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/HistoryStyle.css';

gsap.registerPlugin(ScrollTrigger);

const History = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          x: section.classList.contains('reverse') ? '100%' : '-100%',
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
            markers: false, // Enlève les marqueurs si tu ne veux pas les voir
          },
        }
      );
    });
  }, []);

  const historyData = [
    {
      image: 'https://sfd.susana.org/images/cities/Douala.jpg',
      text: "Douala, capitale économique du Cameroun, est une ville portuaire située sur la côte atlantique. Elle a joué un rôle clé dans l'histoire coloniale du pays, avec un port actif depuis des siècles.",
      reverse: false,
    },
    {
      image: 'https://cameroun24.net/images/news/douala_akwa_1930_670.jpg',
      text: "Au début du XXe siècle, la ville est devenue un centre commercial et industriel majeur pendant la période coloniale allemande, avant d'être prise en charge par les Français après la Première Guerre mondiale.",
      reverse: true,
    },
    {
      image: 'https://cameroun24.net/images/news/ngondo_wouri_cameroun640.jpg',
      text: "Aujourd'hui, Douala est un centre culturel, économique et commercial, abritant une population diversifiée et des industries florissantes, notamment le pétrole, la logistique, et le commerce.",
      reverse: false,
    },
  ];

  return (
    <div className="history-container">
      {historyData.map((section, index) => (
        <div
          className={`history-section ${section.reverse ? 'reverse' : ''}`}
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          <img src={section.image} alt={`Douala history ${index}`} className="history-image" />
          <p className="history-text">{section.text}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
