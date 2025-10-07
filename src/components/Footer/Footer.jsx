import React from "react";
import logo from "../../assets/food/logo.png";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-lightYellow rounded-t-3xl"
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="space-y-3 lg:max-w-[300px]">
            <img src={logo} alt="brand-logo" className="w-24" />
            <p className="font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              recusandae ex accusantium neque dicta porro totam placeat
              laboriosam voluptatibus autem.
            </p>
            <a href="#" className="inline-block mt-6 text-sm font-bold">
              contact@food.com
            </a>
          </div>
          {/* Quick Guide */}
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-2">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Service</li>
                <li className="footer-link">Blog</li>
                <li className="footer-link">Contact us</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-2">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Service</li>
                <li className="footer-link">Blog</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-2">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
