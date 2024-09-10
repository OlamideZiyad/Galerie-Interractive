import React from 'react'
import NavigationBar from './components/NavigationBar';
import Accueil from './components/Accueil';
import History from './components/History';
import Slideshow from './components/Diaprama';
import CityImage from './components/ImageCity';
import Gallery from './components/Galerie';
import Footer from './components/Footer';
import ImageGallery from './components/GalerieImage';



const App = ()=> {
  return(
    <div>
      <NavigationBar></NavigationBar>
       <CityImage></CityImage>
      <Accueil></Accueil>
      <History />
      <Slideshow></Slideshow>
      <Gallery></Gallery>
     <ImageGallery></ImageGallery>
       <Footer></Footer>
      
     
    </div>
  );
};
   

export default App
