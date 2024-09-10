import React from "react";
import '../styles/galleryStyle.css';
import Beignet1 from "../assets/img/Beignet1.jpeg";
import BonamoussadiNord from "../assets/img/BonamoussadiNord.jpeg";
import BonamoussadiNord2 from "../assets/img/BonamoussadiNord2.jpeg";
import food from "../assets/img/food.jpeg";
import SadiNord3 from "../assets/img/SadiNord3.jpeg";
import SadiSud from "../assets/img/SadiSud.jpeg";
import doualasunset from "../assets/img/doualasunset.jpeg";
import IMG_9458 from "../assets/img/IMG_9458.jpeg";
import IMG_9453 from "../assets/img/IMG_9453.jpeg";
import IMG_9788 from "../assets/img/IMG_9788.jpeg";


const Gallery = () => {
  const images = [
     Beignet1,
    "https://images.unsplash.com/photo-1594999945795-e570338fdd12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1576487194710-67873008c0c6?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553590183-ab158a91a160?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1713364681376-2314bdbff3cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554226525-780cbb187456?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    BonamoussadiNord,
    BonamoussadiNord2,
    food,
    SadiNord3,
    SadiSud,
    doualasunset,
    IMG_9458,
    IMG_9453,
    IMG_9788
    
  ];

  return (
    <div className="gallery" id="Galerie">
      {images.map((image, index) => (
        <div key={index} className="gallery_item">
          <img src={image} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
