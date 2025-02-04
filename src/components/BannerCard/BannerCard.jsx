import "./BannerCard.scss";

const BannerCard = ({ banner }) => {
  return (
    <div className="BannerCard">
      <img src={banner.image} alt="" />

      <div className="bannerCard-info">
        <h2>{banner.title}</h2>
        <p>{banner.desc}</p>
        <div className="bannerCard-buttons">
          {banner.buttons.map((btn, index) => (
            <button key={index}>{btn}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
