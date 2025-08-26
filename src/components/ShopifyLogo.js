import React from "react";
import shopifyLogoSvg from "../images/shopify.svg";

const ShopifyLogo = ({ size = 120, color = "white" }) => {
  return (
    <img 
      src={shopifyLogoSvg} 
      alt="Shopify Logo" 
      style={{ 
        width: size, 
        height: size,
        filter: color === "white" ? "brightness(0) invert(1)" : "none"
      }} 
    />
  );
};

export default ShopifyLogo;
