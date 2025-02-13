// OfficeSupplies.js
import React, { useState } from 'react';
import "./OfficeSupplies.scss";
import poster_img from "../../assets/images/poster.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { bills, cards } from "../../assets/data";
import FullImage from "../../components/FullImage/FullImage"; 

const OfficeSupplies = () => {
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
    <div className="officeSupplies">
      <div className="officeSupplies-content">
        <div className="officeSupplies-banner">
          <div className="officeSupplies-banner-info">
            <h2>Office & Hospital Stationery Supply</h2>
            <p>Create a cohesive set of custom office supplies.</p>
          </div>
          <div className="officeSupplies-banner-img">
            <img src={poster_img} alt="" />
          </div>
        </div>

        <div className="officeSupplies-lists-container">
          <div className="officeSupplies-lists">
            <div className="officeSupplies-items">
              <h2>Best Sellers</h2>

              <div className="officeSupplies-cards">
                {bills.map((bill) => (
                  <div className="officeSupplies-card" key={bill.id} onClick={() => openModal(bill.img)}>
                    <img src={bill.img} alt={bill.title} />
                    <p>{bill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full image view */}
      <FullImage isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  );
};

export default OfficeSupplies;
