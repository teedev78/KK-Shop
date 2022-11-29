import React from "react";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import "./promotions.css";
import smartphoneimg1 from "../../assets/promotion-001-n.jpg";
import smartphoneimg2 from "../../assets/promotion-002-n.jpg";
import smartphoneimg3 from "../../assets/promotion-003-n.jpg";
import smartphoneimg4 from "../../assets/promotion-004-n.jpg";
import sample6x4 from "../../assets/sample600x400.png";

function Promotions() {
  const imglists = [
    smartphoneimg1,
    smartphoneimg2,
    smartphoneimg3,
    smartphoneimg4,
  ];

  return (
    <div className="kk__promotions">
      <div className="kk__promotions-header">
        <h1>โปรโมชั่นใหม่มาแรง</h1>
      </div>
      <div className="kk__promotions-links">
        <div className="kk__promotions-pagination">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {imglists.map((url, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={imglists[index]} alt={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="kk__promotions-side_banners">
          <div className="kk__promotions-banner1">
            <img src={sample6x4} alt="banner1" />
          </div>
          <div className="kk__promotions-banner2">
            <img src={sample6x4} alt="banner2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
