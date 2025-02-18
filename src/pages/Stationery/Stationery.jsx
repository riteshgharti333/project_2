import "./Stationery.scss";

import poster_img from "../../assets/images/poster.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards } from "../../assets/data";

const Stationery = () => {
  return (
    <div className="stationery">
      <div className="stationery-content">
        <div className="stationery-banner">
          <div className="stationery-banner-info">
            <h2>Custom Stationery</h2>
            <p>Create a cohesive set of custom office supplies.</p>
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
                {cards.map((card) => (
                  <MainCard card={card} cardDesign="stationeryCard" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stationery;
