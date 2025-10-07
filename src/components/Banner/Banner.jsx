import React from "react";
import BannerImage from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";

const Banner = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* 🍽️ Image Section */}
        <div className="relative flex justify-center">
          {/* Yellow Circle Background */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:h-[400px] md:w-[400px] bg-lightYellow rounded-full"
          ></motion.div>

          {/* Food Image */}
          <motion.img
            initial={{ opacity: 0, x: -100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.2, rotate: 15, x: 50, y: 50 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              scale: {
                type: "spring",
                stiffness: 400,
                damping: 10,
                duration: 0.5,
              },
            }}
            src={BannerImage}
            alt="banner-img"
            className="relative z-10 w-full max-w-[350px] drop-shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-5 lg:max-w-[400px] text-center lg:text-left">
          <motion.h1
            variants={slideUp(0.6)}
            initial="hidden"
            whileInView="show"
            className="text-5xl lg:text-6xl uppercase font-semibold italic leading-tight"
          >
            The Best Yummy Food in the Town
          </motion.h1>
          <motion.p
            variants={slideUp(0.8)}
            initial="hidden"
            whileInView="show"
            className="text-sm text-gray-600"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ea
            enim porro delectus, quod quos.
          </motion.p>
          <motion.button variants={slideUp(1)} initial="hidden" whileInView="show" className="btn-primary mt-4">Order Now</motion.button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
