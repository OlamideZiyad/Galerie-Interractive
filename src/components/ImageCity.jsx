import React from "react";
import '../styles/cityImage.css';

const CityImage = () => {
  return (
    <div className="city_image_container">
      <img
        src="https://mediaim.expedia.com/destination/1/82cc8533d022ded6a346423ff511f97f.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh"
        alt="Ville de Douala"
        className="city_image"
      />
      <div className="city_text">
        <h1>Douala</h1>
        <p>
          Douala est la capitale économique du Cameroun, un carrefour commercial majeur
          en Afrique centrale. Avec ses marchés animés, son port international et une riche
          histoire, Douala est une métropole incontournable. Découvrez ses sites historiques
          comme la Cathédrale Saint-Pierre-et-Saint-Paul ou le Monument des rois Bell, ainsi
          que sa culture vibrante à travers ses festivals et marchés colorés. 
        </p>
      </div>
    </div>
  );
}

export default CityImage;
