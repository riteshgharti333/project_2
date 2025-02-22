import "./VisitingCards.scss";

import banner_img from "../../assets/images/page1.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards, visitngCardsImg } from "../../assets/data";
import { useState } from "react";
import FullImage from "../../components/FullImage/FullImage";

const VisitingCards = () => {
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
    <div className="visitingCards">
      <div className="visitingCards-banner">
        <img src={banner_img} alt={banner_img} />
        <h1>Visiting Cards</h1>
      </div>

      <div className="visitingCards-container">
        <h2>Shop By Shapes</h2>

        <div className="visiting-cards">
          {visitngCardsImg.map((item) => (
            <div
              className="visiting-card"
              key={item.img}
              onClick={() => openModal(item.img)}
            >
              <img src={item.img} alt={item.img} />
            </div>
          ))}
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

export default VisitingCards;
