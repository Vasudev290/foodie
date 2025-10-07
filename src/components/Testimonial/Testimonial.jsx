import React from "react";
import { motion } from "framer-motion";
import Banner from "../../assets/food/banner.png";

const Testimonial = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Text Content - Left Side */}
          <div className="space-y-8">
            {/* Opening Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-7xl text-gray-300 font-serif -mb-8 -ml-4"
            >
              "
            </motion.div>

            {/* Testimonial Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti blanditilis ipsam, optio molestias sit itaque a. Sint,ptio molestias sit itaque a. Sint, vero obcaccati. Ipsam.
            </motion.p>

            {/* Author Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-6"
            >
              {/* Author Avatar */}
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
              </div>
              
              {/* Author Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  VD
                </h3>
                <p className="text-gray-600 text-sm">
                  CEO, Greet Labs Pvt Ltd
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl -z-10"></div>
              
              {/* Main Image */}
              <img
                src={Banner}
                alt="Testimonial Visual"
                className="w-full h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full opacity-80"
            />
            
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute -top-3 -right-3 w-4 h-4 bg-blue-400 rounded-full opacity-60"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;