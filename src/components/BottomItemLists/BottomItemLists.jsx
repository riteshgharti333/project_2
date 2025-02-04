import { category } from "../../assets/data";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./BottomItemLists.scss";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BottomItemLists = () => {
  return (
    <div className="bottomItemLists">
      {category.slice(3, 4).map((categoryItem, index) => (
        <div key={index} className="categories">
          <h1>{categoryItem.category_name}</h1>

          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            {categoryItem.category_product.map((item, index) => (
              <SwiperSlide key={index}>
                <CategoryItem image={item.image} title={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default BottomItemLists;
