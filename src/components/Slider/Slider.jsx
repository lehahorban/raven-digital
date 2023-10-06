import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";

const Slider = ({ children, onSlideChange }) => {
  return (
    <>
      <Swiper
        className="h-[1000px] xl:h-[517px]"
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={onSlideChange}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Slider;
