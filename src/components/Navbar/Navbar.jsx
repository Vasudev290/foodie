import logo from "../../assets/food/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const menuItems = [
  { id: 1, name: "Home", path: "/", delay: 0.1 },
  { id: 1, name: "About", path: "/about", delay: 0.2 },
  { id: 1, name: "Menu", path: "/menu", delay: 0.3 },
  { id: 1, name: "Delivery", path: "/delivery", delay: 0.4 },
  { id: 1, name: "Contact Us", path: "/contact", delay: 0.5 },
];

const slideDown = (delay) => {
  return {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, delay: delay } },
  };
};

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between italic font-bold text-xl items-center py-4">
        {/* Logo Section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={logo}
          alt="logo"
          className="w-36"
        />
        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            {menuItems.map((menu) => {
              return (
                <motion.li
                  variants={slideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                >
                  <a
                    href={menu.path}
                    className="inline-block px-2 py-2 text-2xl"
                  />
                  {menu.name}
                </motion.li>
              );
            })}
          </ul>
        </div>
        {/* Button Section */}
        <div>
          <motion.button variants={slideDown(0.8)} initial="initial" animate="animate"  className="h-[40px] w-[50px] grid place-items-center rounded-full text-white bg-dark">
            <IoCartOutline />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
