import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  images: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null; 

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-4 max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black rounded-full p-2 z-50"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="w-full h-full flex justify-center items-center">
          <div className="relative w-full max-h-[80vh] overflow-hidden">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full z-50"
              aria-label="Previous Image"
            >
              &#10094;
            </button>

            <img
              src={images[currentImageIndex]}
              alt="Full screen"
              className="w-full h-auto object-contain"
            />

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full z-50"
              aria-label="Next Image"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
