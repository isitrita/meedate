"use client";
// ./src/app/components/MovingSVGs.tsx
import React, { useEffect, useRef, useState } from "react";

const MovingSVGs: React.FC = () => {
  const svgRefs = useRef<SVGSVGElement[]>([]);
  const [positions, setPositions] = useState<SVGPosition[]>([]);

  // SVG attributes
  const svgSize = 100;
  const numSVGs = 5;
  const initialX = 50;
  const initialY = 50;
  const speed = 1;

  interface SVGPosition {
    x: number;
    y: number;
    dx: number;
    dy: number;
  }

  useEffect(() => {
    // Initialize SVG positions
    const initialPositions: SVGPosition[] = Array.from(
      { length: numSVGs },
      (_, index) => ({
        x: initialX + index * 120,
        y: initialY,
        dx: speed * Math.random() * 2 - speed, // Random initial horizontal velocity
        dy: speed * Math.random() * 2 - speed, // Random initial vertical velocity
      })
    );
    setPositions(initialPositions);
  }, []);

  useEffect(() => {
    // Move SVGs
    const moveSVGs = () => {
      const newPositions = positions.map((pos) => ({
        ...pos,
        x: pos.x + pos.dx,
        y: pos.y + pos.dy,
      }));
      setPositions(newPositions);
      requestAnimationFrame(moveSVGs);
    };
    requestAnimationFrame(moveSVGs);
  }, [positions]);
  useEffect(() => {
    // Check for collisions and bounce
    const checkCollisions = () => {
      if (positions.length === 0) return; // Check if positions array is empty

      const newPositions = [...positions];

      for (let i = 0; i < numSVGs; i++) {
        for (let j = i + 1; j < numSVGs; j++) {
          const dx = newPositions[i].x - newPositions[j].x;
          const dy = newPositions[i].y - newPositions[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < svgSize) {
            // Bounce
            const angle = Math.atan2(dy, dx);
            const targetX1 = newPositions[i].x + Math.cos(angle) * svgSize;
            const targetY1 = newPositions[i].y + Math.sin(angle) * svgSize;
            const targetX2 = newPositions[j].x - Math.cos(angle) * svgSize;
            const targetY2 = newPositions[j].y - Math.sin(angle) * svgSize;

            newPositions[i].dx = (targetX1 - newPositions[i].x) / 10;
            newPositions[i].dy = (targetY1 - newPositions[i].y) / 10;
            newPositions[j].dx = (targetX2 - newPositions[j].x) / 10;
            newPositions[j].dy = (targetY2 - newPositions[j].y) / 10;
          }
        }
      }

      setPositions(newPositions);
      requestAnimationFrame(checkCollisions);
    };
    requestAnimationFrame(checkCollisions);
  }, [positions]);

  return (
    <div className="relative" style={{ width: "100%", height: "100vh" }}>
      {positions.map((pos, index) => (
        <svg
          key={index}
          ref={(el) => {
            if (el) svgRefs.current[index] = el;
          }}
          className="absolute"
          width={svgSize}
          height={svgSize}
          x={pos.x - svgSize / 2} // Adjust x to center the SVG
          y={pos.y - svgSize / 2} // Adjust y to center the SVG
          style={{ transform: `rotate(${pos.x * 2}deg)` }}
        >
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={svgSize / 2}
            fill="blue"
          />
        </svg>
      ))}
    </div>
  );
};

export default MovingSVGs;
