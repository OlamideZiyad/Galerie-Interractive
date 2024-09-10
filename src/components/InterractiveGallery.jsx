import React from 'react';
import '../styles/interactiveGallery.css';
import '../assets/img/InterractiveGallery';
import '../assets/img/InterractiveGallery';
import '../assets/img/InterractiveGallery';
import '../assets/img/InterractiveGallery';
import '../assets/img/InterractiveGallery';
import '../assets/img/InterractiveGallery';
import '../assets/img/InterractiveGallery';

const InteractiveGallery = () => {
  const images = [
    {
      src: 'image1.jpg',
      description: 'Description for Image 1'
    },
    {
      src: 'image2.jpg',
      description: 'Description for Image 2'
    },
    {
      src: 'image3.jpg',
      description: 'Description for Image 3'
    },
    {
        src: 'image4.jpg',
        description: 'Description for Image 3'
      },
      {
        src: 'image5.jpg',
        description: 'Description for Image 3'
      },
      {
        src: 'image6.jpg',
        description: 'Description for Image 3'
      },
      {
        src: 'image7.jpg',
        description: 'Description for Image 3'
      }
  ];

  return (
    <div className="interactive-gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image.src} alt={`Gallery Item ${index}`} className="gallery-image" />
          <div className="gallery-description">
            {image.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveGallery;
