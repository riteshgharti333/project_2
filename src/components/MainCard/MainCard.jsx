import "./MainCard.scss";

const MainCard = ({ card, cardDesign }) => {
  return (
    <div className={`mainCard ${cardDesign}`}>
      <img src={card.image} alt="" />
      <p className="card-title">{card.title}</p>
      <p className="card-desc">{card.price}</p>
    </div>
  );
};

export default MainCard;
