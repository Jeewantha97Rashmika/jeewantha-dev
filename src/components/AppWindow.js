import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";

const FullIcon = ({ size }) => (
  <svg
    viewBox="0 0 13 13"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
    <path d="M9.26 12.03L.006 2.73v9.3H9.26zM2.735.012l9.3 9.3v-9.3h-9.3z" />
  </svg>
);

const ExitFullIcon = ({ size }) => (
  <svg
    viewBox="0 0 19 19"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
    <path d="M18.373 9.23L9.75.606V9.23h8.624zM.6 9.742l8.623 8.624V9.742H.599z" />
  </svg>
);

const TrafficLights = ({ id, max, setMax, setMin, close }) => (
  <div
    style={{ display: "flex", position: "absolute", left: "8px", top: "6px" }}
  >
    <button
      style={{
        width: "12px",
        height: "12px",
        backgroundColor: "#f56565",
        transition: "background-color 0.5s ease, color 0.5s ease",
        borderRadius: "50%",
        marginRight: "6px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => close(id)}
    />
    <button
      style={{
        width: "12px",
        height: "12px",
        backgroundColor: max ? "#d3d3d3" : "#ecc94b",
        transition: "background-color 0.5s ease, color 0.5s ease",
        borderRadius: "50%",
        marginRight: "6px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => setMin(id)}
      disabled={max}
    />
    <button
      style={{
        width: "12px",
        height: "12px",
        backgroundColor: "#48bb78",
        transition: "background-color 0.5s ease, color 0.5s ease",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => setMax(id)}
    >
      {max ? <ExitFullIcon size={8} /> : <FullIcon size={8} />}
    </button>
  </div>
);

const Window = ({
  id,
  title,
  children,
  max,
  min,
  setMax,
  setMin,
  close,
  z,
  focus,
  width = 640,
  height = 700,
}) => {
  const [state, setState] = useState({
    width: width,
    height: height,
    x: window.innerWidth / 2 - width / 2,
    y: window.innerHeight / 2 - height / 2,
  });

  const updatePositionAndSize = () => {
    setState((prev) => ({
      ...prev,
      width: Math.min(window.innerWidth, prev.width),
      height: Math.min(window.innerHeight, prev.height),
      x: Math.max(0, Math.min(window.innerWidth - prev.width, prev.x)),
      y: Math.max(0, Math.min(window.innerHeight - prev.height, prev.y)),
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", updatePositionAndSize);
    return () => window.removeEventListener("resize", updatePositionAndSize);
  }, []);

  const handleDragStop = (e, d) => {
    setState((prev) => ({ ...prev, x: d.x, y: d.y }));
  };

  const handleResizeStop = (e, direction, ref, delta, position) => {
    setState({
      width: parseInt(ref.style.width),
      height: parseInt(ref.style.height),
      x: position.x,
      y: position.y,
    });
  };

  return (
    // <Rnd
    //   bounds="window"
    //   size={{ width: max ? "100%" : state.width, height: max ? "100%" : state.height }}
    //   position={{ x: max ? 0 : state.x, y: max ? 0 : state.y }}
    //   onDragStop={handleDragStop}
    //   onResizeStop={handleResizeStop}
    //   minWidth={200}
    //   minHeight={150}
    //   style={{
    //     zIndex: z,
    //     border: "1px solid rgba(0,0,0,0.2)",
    //     borderRadius: max ? "0" : "8px",
    //     overflow: "hidden",
    //     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    //     backgroundColor: "#f7f7f7",
    //     transition: "all 0.3s ease",
    //   }}
    //   onMouseDown={() => focus(id)}
    // >

    // </Rnd>

    <Box
      sx={{
        zIndex: z,
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: max ? "0" : "8px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#f7f7f7",
        transition: "background-color 0.5s ease, color 0.5s ease",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          height: "24px",
          backgroundColor: "#e2e8f0",
          transition: "background-color 0.5s ease, color 0.5s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "grab",
        }}
      >
        <TrafficLights
          id={id}
          max={max}
          setMax={setMax}
          setMin={setMin}
          close={close}
        />
        <div
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#4a5568",
            margin: "0 auto",
            pointerEvents: "none",
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(100% - 24px)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </Box>
  );
};

export default Window;
