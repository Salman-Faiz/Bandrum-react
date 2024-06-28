import { useState } from 'react';
import './Banner.css'
import Navbar from '../../Navbar';


const Banner = () => {
  const images = [
    "https://iili.io/d3bdcfR.jpg",
    "https://iili.io/d3bdYiv.jpg",
    "https://iili.io/d3bowTQ.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      
    <button onClick={prevSlide} className="left-arrow font-extrabold">{"<"}</button>
    <div className="slider-content">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
    <button onClick={nextSlide} className="right-arrow font-extrabold">{">"}</button>
  </div>
  );
};

export default Banner;