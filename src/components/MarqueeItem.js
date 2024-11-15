import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div
    style={{
        display: 'flex',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))',
        maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))',
      }}
    >
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", flexShrink: 0 }}
      >
        {images.map((image, index) => {
          return (
            <img
              style={{
                height: "100px",
                width: "100px",
               
              }}
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>

      {/* <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", flexShrink: 0 }}
      >
        {images.map((image, index) => {
          return (
            <img
              style={{
                height: "100px",
                width: "100px",
                paddingRight: "200px",
              }}
              src={image}
              key={index}
            />
          );
        })}
      </motion.div> */}
    </div>
  );
};

export default MarqueeItem;
