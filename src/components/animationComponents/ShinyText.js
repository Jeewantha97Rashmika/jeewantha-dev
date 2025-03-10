import React from "react";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  const shinyStyle = {
    color: "#b5b5b5a4",
    background: `linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 60%
    )`,
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    display: "inline-block",
    animation: disabled ? "none" : `shine ${animationDuration} linear infinite`,
  };

  return (
    <div className={className} style={shinyStyle}>
      {text}
      <style>
        {`
          @keyframes shine {
            0% { background-position: 100%; }
            100% { background-position: -100%; }
          }
        `}
      </style>
    </div>
  );
};

export default ShinyText;
