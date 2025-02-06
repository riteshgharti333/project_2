import "./Homepage.scss";

import BannerBottom from "../../components/BannerBottom/BannerBottom";
import BottomItemLists from "../../components/BottomItemLists/BottomItemLists";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import ItemLists from "../../components/ItemLists/ItemLists";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />

      <div className="categories-lists">
        <ItemLists />
      </div>

      <BannerBottom />

      <div className="categories-bottom-lists">
        <BottomItemLists />
      </div>
    </div>
  );
};

export default Homepage;
