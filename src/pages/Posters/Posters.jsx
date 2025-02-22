import "./Posters.scss";

import poster_img from "../../assets/images/poster.jpg";

import { cards, postersImg } from "../../assets/data";
import { useState } from "react";
import FullImage from "../../components/FullImage/FullImage";

const Posters = () => {
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
    <div className="posters">
      <div className="posters-content">
        <div className="posters-banner">
          <div className="posters-banner-info">
            <h2>Signs, Posters & Marketing Materials</h2>
            <p>
              Stand out with custom signage and advertising materials for your
              business
            </p>
          </div>

          <div className="posters-banner-img">
            <img src={poster_img} alt="" />
          </div>
        </div>

        <div className="posters-lists-container">
          <div className="posters-lists">
            <div className="posters-items">
              <h2>Best Sellers</h2>

              <div className="posters-cards">
                {postersImg.map((item) => (
                  <div
                    className="posters-card"
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

export default Posters;
