import React from "react";
import { motion } from "framer-motion";

const HeroContainer = () => {
  return (
    <div className="header">
      <div className="jarro">
        <div className="jarr">jarr</div>
        <motion.div className="circle">
          <motion.div className="circle-1">
            <motion.div className="circle-2"></motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="tagline">
        <p>
          <span className="health">health</span> in a{" "}
          <span className="jar">jar</span>
        </p>
      </div>
    </div>
  );
};

export default HeroContainer;
