"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";

export const TextRevealHero = ({
  text,
}: {
  text: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { left, width } =
        containerRef.current.getBoundingClientRect();

      setLeft(left);
      setLocalWidth(width);
    }
  }, []);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const relativeX = event.clientX - left;

    setWidthPercentage((relativeX / localWidth) * 100);
  }

  function handleMouseEnter() {
    setIsMouseOver(true);
  }

  function handleMouseLeave() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block cursor-pointer"
    >
      <div className="relative inline-flex items-center overflow-hidden">

        {/* MAIN TEXT */}
        <h1
          className="
            relative
            z-10
            text-5xl
            md:text-7xl
            font-medium
            tracking-tight
            leading-[1.1]
            whitespace-nowrap
            text-white
          "
        >
          {text}
        </h1>

        {/* SHIMMER REVEAL */}
        <motion.div
          animate={{
            clipPath: `inset(0 ${
              100 - widthPercentage
            }% 0 0)`,
            opacity: isMouseOver ? 1 : 0,
          }}
          transition={{
            duration: isMouseOver ? 0 : 0.4,
          }}
          className="absolute inset-0 z-20"
        >
          <h1
            className="
              text-5xl
              md:text-7xl
              font-medium
              tracking-tight
              leading-[1.1]
              whitespace-nowrap
              bg-gradient-to-b
              from-white
              to-neutral-300
              bg-clip-text
              text-zinc-600
            "
          >
            {text}
          </h1>
        </motion.div>

        {/* SHINY LINE */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: isMouseOver ? 1 : 0,
          }}
          transition={{
            duration: isMouseOver ? 0 : 0.4,
          }}
          className="
            absolute
            z-30
            h-full
            w-[8px]
            bg-gradient-to-b
            from-transparent
            via-white
            to-transparent
          "
        />

        {/* STARS */}
        <MemoizedStars />
      </div>
    </div>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};

const MemoizedStars = memo(Stars);