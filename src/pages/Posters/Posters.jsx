import "./Posters.scss";

import poster_img from "../../assets/images/poster.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards } from "../../assets/data";

const Posters = () => {
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
                {cards.map((card) => (
                  <MainCard key={card} card={card} cardDesign="postersCard" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posters;
