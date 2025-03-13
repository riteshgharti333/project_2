import "./BottomItemLists.scss";

import { category } from "../../assets/data";
import CategoryItem from "../CategoryItem/CategoryItem";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BottomItemLists = () => {
  return (
    <div className="bottomItemLists">
      {category.slice(1, 2).map((categoryItem, index) => (
        <div key={index} className="categories">
          <h2>{categoryItem.category_name}</h2>

          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={2}
            navigation
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              620: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1400: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            {categoryItem.category_product.map((item, index) => (
              <SwiperSlide key={index}>
                <CategoryItem
                  image={item.image}
                  title={item.title}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mobile-item">
            {categoryItem.category_product.map((item) => (
              <div className="mobile-item-card">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomItemLists;
