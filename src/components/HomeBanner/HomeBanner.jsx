import BannerCard from '../BannerCard/BannerCard';
import './HomeBanner.scss';
import { Banners } from '../../assets/data';

const HomeBanner = () => {
  return (
    <div className='homeBanner'>
      {Banners.slice(0, 2).map((banner, index) => (
        <BannerCard key={index} banner={banner} />
      ))}
    </div>
  );
};

export default HomeBanner;
