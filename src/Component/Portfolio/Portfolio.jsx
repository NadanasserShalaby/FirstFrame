import React, { useState } from 'react';
import port1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';
// import './Portfolio.css'; // Import CSS file for styles

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Open modal with the clicked image
  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // Close modal when clicking outside the image
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <section className='portfolio-container'>
        <div className='header'>
          <h1 className='text-uppercase text-center fw-bolder'>Portfolio Component</h1>
        </div>
        <div className="container">
          <div className="row pt-5 gy-3">
            {/* Image Gallery */}
            {[port1, port2, port3, port3, port1, port2].map((image, index) => (
              <div className="col-md-4" key={index}>
                <div className="image">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className='portfolio-image'
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={currentImage} alt="Selected" className="modal-image" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
