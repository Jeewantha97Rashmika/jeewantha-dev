import React from "react";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
} from "react-icons/si";
import { color, useAnimate } from "framer-motion";

export default function SkillGrid() {
  return (
    <div style={{ backgroundColor: "#F1F1F1", padding: "8rem 0rem" }}>
      <div style={{ margin: "0 auto", maxWidth: "74rem", }}>
        <ClipPathLinks />
      </div>
    </div>
  );
}

const ClipPathLinks = () => {
  return (
    <div
      style={{
        border: "1px solid #474747",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <LinkBox Icon={SiGoogle} href="#" />
        <LinkBox Icon={SiShopify} href="#" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <LinkBox Icon={SiApple} href="#" />
        <LinkBox Icon={SiSoundcloud} href="#" />
        <LinkBox Icon={SiAdobe} href="#" />
        <LinkBox Icon={SiFacebook} href="#" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <LinkBox Icon={SiTiktok} href="#" />
        <LinkBox Icon={SiSpotify} href="#" />
        <LinkBox Icon={SiLinkedin} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        display: "grid",
        border: "0.5px solid #474747",
        height: "8rem",
        width: "100%",
        placeContent: "center",
        "@media (min-width: 640px)": { height: "7rem" },
        "@media (min-width: 768px)": { height: "9rem" },
      }}
    >
      <Icon
        style={{
          color: "#474747",
          fontSize: "2.25rem",
          "@media (min-width: 640px)": { fontSize: "1.875rem" },
          "@media (min-width: 1024px)": { fontSize: "2.5rem" },
        }}
      />

      <div
        ref={scope}
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeContent: "center",
          backgroundColor: "#171717",
          color: "white",
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
      >
        <Icon
          style={{
            fontSize: "2.25rem",
            "@media (min-width: 640px)": { fontSize: "1.875rem" },
            "@media (min-width: 768px)": { fontSize: "2.5rem" },
          }}
        />
      </div>
    </a>
  );
};
