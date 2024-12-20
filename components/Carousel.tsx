"use client"

import React, { useState, useEffect } from "react";
import Modal from "./Modal"; 

interface CarouselProps {
  images: string[]; 
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`carousel-img-${currentIndex}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={openModal} 
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      <Modal
        isOpen={isModalOpen}
        images={images} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Carousel;
