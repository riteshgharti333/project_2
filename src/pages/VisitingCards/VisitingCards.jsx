import "./VisitingCards.scss";

import banner_img from "../../assets/images/page1.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards } from "../../assets/data";

const VisitingCards = () => {
  return (
    <div className="visitingCards">
      <div className="visitingCards-banner">
        <img src={banner_img} alt={banner_img} />
        <h1>Visiting Cards</h1>
      </div>

      <div className="visitingCards-container">
        <h2>Shop By Shapes</h2>
        <p className="visitingCards-desc">
          Select from various shapes & sizes.
        </p>

        <div className="visiting-cards">
          {cards.map((card) => (
            <MainCard card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitingCards;
