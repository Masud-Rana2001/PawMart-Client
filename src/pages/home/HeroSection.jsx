
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function BannerCarousel() {
  const banners = [
    {
      id: 1,
      img: "https://i.ibb.co.com/k2mLJCW4/Screenshot-2025-11-09-164048.png",
      title: "From Furry Friends to Family Members",
      btn: "Shop Now",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/svpW81YB/Screenshot-2025-11-09-175756.png",
      title: "Treat your pets to the Finest Food",
      btn: "Adopt Now",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/chWQwR0b/Screenshot-2025-11-09-180111.png",
      title: "Everything Your Pet Deserves",
      btn: "Explore Products",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className=" overflow-hidden"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
               dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950  transition-all duration-500 "
              style={{
                backgroundImage: `url(${banner.img})`,
              }}
            >
              {/* Dark overlay for better readability */}
              <div className="absolute inset-0 bg-black/50 dark:bg-black/60 transition-all duration-500"></div>

              {/* Text animation */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-5 md:px-10"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white dark:text-amber-300 mb-6 drop-shadow-lg">
                  {banner.title}
                </h2>
                <Link
                  to="/pets-and-supplies"
                  className="inline-block bg-white/90 text-emerald-700 dark:bg-amber-400 dark:text-gray-900 hover:scale-105 font-semibold px-6 py-3 rounded-full shadow-md transition"
                >
                  {banner.btn}
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
