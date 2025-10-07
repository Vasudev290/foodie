import React from "react";
import { motion } from "framer-motion";
import food1 from "../../assets/food/food.png";
import food2 from "../../assets/food/food2-plate.png";
import food3 from "../../assets/food/banner.png";
import { slideUp } from "../Hero/Hero.jsx";

const popularRecipeData = [
  {
    id: 1,
    name: "Hot Chocolate",
    img: food2,
    price: "$5.99",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Hot Cake",
    img: food1,
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
const PopularRecipe = () => {
  return (
    <section>
      <div className="container py-24">
        <motion.h3
          variants={slideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-semibold uppercase py-8 italic"
        >
          Our Popular Recipe
        </motion.h3>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {popularRecipeData.map((item) => {
            return (
              <div className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl">
                <img
                  key={item.id}
                  src={item.img}
                  alt="Popular-Items"
                  className="w-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg] transition-all duration-300"
                />
                <div>
                  <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                    Buy Now
                  </button>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl text-yellow-500 font-bold">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipe;
