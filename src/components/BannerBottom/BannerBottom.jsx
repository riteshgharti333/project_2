import "./BannerBottom.scss";

import { Banners } from "../../assets/data";
import BannerCard from "../BannerCard/BannerCard";

const BannerBottom = () => {
  return (
    <div className="bannerBottom">
      {Banners.slice(1, 2).map((banner, index) => (
        <BannerCard key={index} banner={banner} />
      ))}
    </div>
  );
};

export default BannerBottom;
