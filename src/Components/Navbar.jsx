import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="item-1">jaarO</div>
      <motion.div className="item-2 item" whileHover={{ scale: 1.2 }}>
        Product
      </motion.div>
      <motion.div className="item-3 item" whileHover={{ scale: 1.2 }}>
        Pricing
      </motion.div>
      <motion.div className="item-4 item" whileHover={{ scale: 1.2 }}>
        Blog
      </motion.div>
    </div>
  );
};

export default Navbar;
