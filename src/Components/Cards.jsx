import React from "react";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <div className="cards">
      <motion.div className="card-item card-1" whileHover={{ scale: 1.1 }}>
        <p>Fresh and Organic</p>
      </motion.div>
      <motion.div className="card-item card-2" whileHover={{ scale: 1.1 }}>
        <p>All round nutritional benefit</p>
      </motion.div>
      <motion.div className="card-item card-3" whileHover={{ scale: 1.1 }}>
        <p>Delivered at your doorstep</p>
      </motion.div>
    </div>
  );
};

export default Cards;
