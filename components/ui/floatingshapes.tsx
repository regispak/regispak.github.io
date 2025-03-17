"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShapes = ({ count = 15 }: { count?: number }) => {
  const [shapes, setShapes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newShapes = [];
    const takenPositions: { x: number; y: number }[] = [];

    for (let i = 0; i < count; i++) {
      const shapeType = Math.random();
      const isCircle = shapeType < 0.4;
      const isSquare = shapeType < 0.65;
      const isTall = !isCircle && !isSquare && shapeType < 0.85;
      const isWide = !isCircle && !isSquare && !isTall;

      const minSize = 120;
      const maxSize = 250;
      const baseSize = Math.random() * (maxSize - minSize) + minSize;

      const width = isCircle || isSquare ? baseSize : isTall ? baseSize * 0.7 : baseSize * 1.6;
      const height = isCircle || isSquare ? baseSize : isTall ? baseSize * 1.6 : baseSize * 0.7;
      const borderRadius = isCircle ? "50%" : "30%";

      let x = Math.random() * 80 + 10; // Limit x to 10%-90%
      let y = Math.random() * 80 + 10; // Limit y to 10%-90%
      let attempts = 0;

      while (
        takenPositions.some(
          (pos) => Math.hypot(pos.x - x, pos.y - y) < width * 0.8
        ) &&
        attempts < 10
      ) {
        x = Math.random() * 80 + 10;
        y = Math.random() * 80 + 10;
        attempts++;
      }

      takenPositions.push({ x, y });

      newShapes.push(
        <motion.div
          key={i}
          className="absolute bg-primary/60"
          style={{
            width,
            height,
            borderRadius,
            left: `calc(${x}%)`,
            top: `calc(${y}%)`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.15, 1],
            x: [0, (Math.random() - 0.5) * 80, 0],
            y: [0, (Math.random() - 0.5) * 40, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: Math.random() * 12 + 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      );
    }

    setShapes(newShapes);
  }, [count]);

  return <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">{shapes}</div>;
};

export default FloatingShapes;