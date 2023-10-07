import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import data from "../../data/testimonials.json";

import { useState } from "react";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section id="testimonials" className="py-14 section">
      <div className="container relative">
        <Slider
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
        >
          {data.testimonials.map((item, ind) => (
            <SwiperSlide className="flex items-center cursor-pointer" key={ind}>
              <TestimonialsCard {...item} />
            </SwiperSlide>
          ))}
        </Slider>
        <div className="absolute right-[8px] top-[33%] xl:top-[89px] flex flex-col justify-between h-[340px]">
          <p className="text-white text-3xl font-bold">0{activeSlide}</p>
          <p className="text-white text-3xl font-bold">
            0{data.testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
