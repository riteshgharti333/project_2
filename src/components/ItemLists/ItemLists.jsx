import CategoryItem from "../CategoryItem/CategoryItem";
import { category } from "../../assets/data";
import "./ItemLists.scss";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

const ItemLists = () => {
  return (
    <div className="itemLists">
      {category.slice(0, 3).map((categoryItem, index) => (
        <div key={index} className="categories">
          <h1>{categoryItem.category_name}</h1>

          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            breakpoints={{
              // Responsive breakpoints
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
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

export default ItemLists;
