import React from "react";
import foodPng from "../../assets/food/food.png";
import spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";
import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";

export const slideUp = (delay) => {
  return {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, delay: delay } },
  };
};
const Hero = () => {
  return (
    <main className="relative overflow-hidden flex items-center">
      {/* Background yellow shape */}
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-[55%] h-[700px] bg-lightYellow rounded-l-[200px] -z-10"
      ></motion.div>

      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:24 place-items-center justify-between">
          {/* Text section */}
          <div className="space-y-4 text-center md:text-left mt-14 md:mt-0">
            <motion.h1
              variants={slideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-ouline text-transparent"
            >
              Yummy
              <img
                src={Leaf}
                alt="hero-leaf"
                className="absolute w-[50px] top-0 right-0 md:right-[100px]"
              />
            </motion.h1>

            <motion.h1
              variants={slideUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              Breakfast
            </motion.h1>

            <motion.p
              variants={slideUp(0.7)}
              initial="hidden"
              whileInView="show"
              className="text-sm md:text-base my-6 text-gray-600"
            >
              Lorem ipsum dolor, ullam ex aliquid, distinctio vel dignissimos!
            </motion.p>

            <motion.button
              variants={slideUp(0.8)}
              initial="hidden"
              whileInView="show"
              className="btn-primary gap-4 flex items-center mx-auto md:mx-0 md:mr-10 justify-center"
            >
              <IoCartOutline className="inline mr-2" /> Order Now
            </motion.button>
          </div>

          {/* Image section */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={foodPng}
              alt="food-plate"
              className="w-[450px] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={spoon}
              alt="spoon"
              className="w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Banana}
              alt="banana"
              className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
