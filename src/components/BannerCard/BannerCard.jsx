import "./BannerCard.scss";

const BannerCard = ({ banner }) => {
  return (
    <div className="BannerCard">
      <div className="banner-card-img">
        <img src={banner.image} alt="" />
      </div>

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
