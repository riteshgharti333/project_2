import "./Printing.scss";

import poster_img from "../../assets/images/poster.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { printImg } from "../../assets/data";
import { useState } from "react";
import FullImage from "../../components/FullImage/FullImage";

const Printing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="printing">
      <div className="printing-content">
        <div className="printing-banner">
          <div className="printing-banner-info">
            <h2>Pen & T-Shirt Printing</h2>
          </div>
          <div className="printing-banner-img">
            <img src={poster_img} alt="" />
          </div>
        </div>

        <div className="printing-lists-container">
          <div className="printing-lists">
            <div className="printing-items">
              <h2>Best Sellers</h2>

              <div className="printing-cards">
                {printImg.map((item) => (
                  <div
                    className="printing-card"
                    key={item.img}
                    onClick={() => openModal(item.img)}
                  >
                    <img src={item.img} alt={item.img} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FullImage
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default Printing;
