import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cartaembm from '../assets/aebm4.jpg';
import cartaembm2 from '../assets/aebm2.jpg';
import cartaembm3 from '../assets/aebm3.jpg';

const imgStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '600px', // Ajustez selon vos besoins
  objectFit: 'cover',
};

const captionStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '20px',
  borderRadius: '10px',
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  color: 'white',
};

const containerStyle = {
  margin: '20px', // Ajustez la marge selon vos besoins
};

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={cartaembm} alt="First slide" style={imgStyle} />
          <Carousel.Caption style={captionStyle}>
            <h3>Bienvenue à l'Association des Étudiants Burkinabé et Stagiaires au Maroc</h3>
            <p>Rejoignez notre communauté académique et professionnelle.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cartaembm2} alt="Second slide" style={imgStyle} />
          <Carousel.Caption style={captionStyle}>
            <h3>Engagement, Solidarité, Échange Culturel</h3>
            <p>Ensemble pour créer un impact positif dans la société.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={cartaembm3} alt="Third slide" style={imgStyle} />
          <Carousel.Caption style={captionStyle}>
            <h3>Restez Informé, Restez Connecté</h3>
            <p>Explorez les opportunités et restez informé sur nos activités.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
