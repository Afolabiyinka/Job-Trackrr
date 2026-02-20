import "swiper/css/free-mode";
import "swiper/css";

import { reviews } from "../utils/review";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="min-h-screen rounded-lg p-2 md:p-10 w-full text-center">
      <motion.h1 className="text-2xl md:text-6xl font-bold mb-8 text-center leading-snug">
        What Our Users Are Saying <br /> About Their Experience
      </motion.h1>
      <Swiper
        className="flex items-center justify-center w-full"
        modules={[Autoplay, FreeMode]}
        freeMode
        loop={true}
        speed={4000}
        slidesPerView="auto"
        spaceBetween={20}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 20 },
          600: { slidesPerView: 2, spaceBetween: 15 },
          320: { slidesPerView: 1, spaceBetween: 10 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="w-auto">
            <div className="h-full p-6 md:p-10  bg-background rounded-2xl border flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="text-lg">{review.comment}</p>
              </div>
              <div>
                <p className="text-2xl">{review.name}</p>
                <p className="text-sm">{review.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
