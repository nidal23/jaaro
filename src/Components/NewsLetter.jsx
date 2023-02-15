import React from "react";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="news-text">
        <p>Sign up to our newsletter and stay connected!</p>
      </div>
      <div>
        <input type="email" className="email" placeholder="Enter Email" />
      </div>
      <div>
        <motion.button
          className="btn"
          whileHover={{
            scale: "1.1",
            opacity: 1.3,
          }}
          initial={{
            opacity: 1,
          }}
        >
          Jar me Up
        </motion.button>
      </div>
    </div>
  );
};

export default NewsLetter;
