import "./Resturant.scss";

import poster_img from "../../assets/images/poster.jpg";

import { cards, postersImg, ResturantAccessories } from "../../assets/data";
import { useState } from "react";
import FullImage from "../../components/FullImage/FullImage";

const Resturant = () => {
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
    <div className="resturant">
      <div className="resturant-content">
        <div className="resturant-banner">
          <div className="resturant-banner-info">
            <h2>Signs, Posters & Marketing Materials</h2>
            <p>
              Stand out with custom signage and advertising materials for your
              business
            </p>
          </div>

          <div className="resturant-banner-img">
            <img src={poster_img} alt="" />
          </div>
        </div>

        <div className="resturant-lists-container">
          <div className="resturant-lists">
            <div className="resturant-items">
              <h2>Best Sellers</h2>

              <div className="resturant-cards">
                {ResturantAccessories.map((item) => (
                  <div
                    className="resturant-card"
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

export default Resturant;
