import "./Stationery.scss";

import poster_img from "../../assets/images/poster.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards, marriageMaterialsImg } from "../../assets/data";
import { useState } from "react";
import FullImage from "../../components/FullImage/FullImage";

const Stationery = () => {
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
    <div className="stationery">
      <div className="stationery-content">
        <div className="stationery-banner">
          <div className="stationery-banner-info">
            <h2>Marriage Materials</h2>
          </div>
          <div className="stationery-banner-img">
            <img src={poster_img} alt="" />
          </div>
        </div>

        <div className="stationery-lists-container">
          <div className="stationery-lists">
            <div className="stationery-items">
              <h2>Best Sellers</h2>

              <div className="stationery-cards">
                {marriageMaterialsImg.map((item) => (
                  <div
                    className="stationery-card"
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

export default Stationery;
