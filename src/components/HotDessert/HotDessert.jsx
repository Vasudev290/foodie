import React from "react";
import { motion } from "framer-motion";
import food1 from "../../assets/food/food.png";
import food2 from "../../assets/food/food2-plate.png";
import food3 from "../../assets/food/food.png";
import { slideUp } from "../Hero/Hero.jsx";

const hotDessertData = [
  {
    id: 1,
    name: "Hot Chocolate",
    img: food1,
    price: "$5.99",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Hot Cake",
    img: food2,
    price: "$5.00",
    delay: 0.6,
  },
  {
    id: 3,
    name: "Hot Dessert",
    img: food3,
    price: "$6.99",
    delay: 0.8,
  },
];
const HotDessert = () => {
  return (
    <section className="relative z-10 pt-20">
      <div className="container py-12">
        {/* Heading Section */}
        <motion.h3
          variants={slideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-semibold text-darkGreen uppercase py-8"
        >
          Hot Chocolate
        </motion.h3>
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotDessertData.map((item) => {
            return (
              <motion.div
                variants={slideUp(item.delay)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
                key={item.id}
              >
                <img
                  src={item.img}
                  alt="product-img"
                  className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl text-yellow-500">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotDessert;
