import "swiper/css/free-mode";
import "swiper/css";

import { reviews } from "../utils/review";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import StarRating from "../components/StarRating";

const Testimonials = () => {
  return (
    <div className="min-h-screen rounded-lg p-2 md:p-10 w-full text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="text-2xl md:text-6xl font-bold mb-2 text-center leading-snug"
      >
        Loved by Job Seekers
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0.8 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-md md:text-2xl leading-relaxed mb-8 text-muted-foreground"
      >
        Join thousands of proffesionals that landed their dream job using
        JobTrackrr
      </motion.p>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.5 }}
      >
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
              <div className="h-full p-6 md:p-10  bg-muted rounded-2xl border flex flex-col justify-between items-center gap-4">
                <div className="space-y-4">
                  <p className="text-lg">{review.comment}</p>
                </div>
                <StarRating rating={review.rating} />
                <div>
                  <p className="text-2xl">{review.name}</p>
                  <p className="text-sm">{review.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Testimonials;
