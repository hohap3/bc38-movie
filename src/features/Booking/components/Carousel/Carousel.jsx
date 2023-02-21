import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";

function CarouselComponent() {
  const bannerList = useSelector((state) => state.booking.banner);

  function renderBannerItem() {
    return bannerList.map((banner) => (
      <div key={banner.maBanner}>
        <img
          src={banner.hinhAnh}
          alt=""
          className="h-100 w-full object-cover"
        />
      </div>
    ));
  }

  return (
    <div>
      <Carousel>
        {/* <div className="bg-orange-400 h-10"></div>
        <div className="bg-slate-500 h-10"></div>
        <div className="bg-red-500 h-10"></div> */}
        {renderBannerItem()}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
