import "./VisitingCards.scss";
import banner_img from "../../assets/images/page1.jpg";
import MainCard from "../../components/MainCard/MainCard";
import { cards } from "../../assets/data";
import card2 from "../../assets/images/card2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

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

      <div className="visitingCards-container">
        <h2>Shop By Papers & Textures</h2>
        <p className="visitingCards-desc">Most Popular</p>

        <div className="visiting-cards">
          {cards.map((card) => (
            <MainCard card={card} />
          ))}
        </div>
      </div>

      <div className="visitingCards-container">
        <h2>Shop Specialty Business Cards</h2>

        <p className="visitingCards-desc">
          Make a statement with our selection of specialty cards, intended for
          unique projects and uses
        </p>

        <div className="visitingCards-container-cards">
          <div className="special-card">
            <img src={card2} alt="" />
            <p className="special-cards-title">NFC Visiting Cards</p>
            <p className="price">1 Starting at ₹2300.000</p>
          </div>

          <div className="special-card">
            <img src={card2} alt="" />
            <p className="special-cards-title">NFC Visiting Cards</p>
            <p className="price">1 Starting at ₹2300.000</p>
          </div>
        </div>
      </div>

      <div className="visitingCards-container">
        <div className="visitingCards-container-top">
        <h2>Creative ways to use your cards</h2>
        <p>See more business card templates <FaArrowRightLong className="right-arrow"/></p>
        </div>
       

        <p className="visitingCards-desc">
          Looking for something specific? Check out these on-trend templates for
          top industries.
        </p>

        <div className="visitingCards-container-cards-2">
         
          <div className="special-card-2">
            <img src={card2} alt="" />
            <p className="special-cards2-title">Beauty & Spa</p>
          </div>

          <div className="special-card-2">
            <img src={card2} alt="" />
            <p className="special-cards2-title">Beauty & Spa</p>
          </div>

          <div className="special-card-2">
            <img src={card2} alt="" />
            <p className="special-cards2-title">Beauty & Spa</p>
          </div>

          <div className="special-card-2">
            <img src={card2} alt="" />
            <p className="special-cards2-title">Beauty & Spa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitingCards;
