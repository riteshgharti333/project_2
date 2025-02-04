import './BannerBottom.scss'
import { Banners } from '../../assets/data';


import BannerCard from '../BannerCard/BannerCard'

const BannerBottom = () => {
  return (
    <div  className='bannerBottom'>
          {Banners.slice(2,4).map((banner, index) => (
        <BannerCard key={index} banner={banner} />
      ))}
    </div>
  )
}

export default BannerBottom
