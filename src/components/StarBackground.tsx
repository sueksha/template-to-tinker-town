
import React from "react";

const StarBackground: React.FC = () => {
  const stars = Array.from({ length: 10 }).map((_, index) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    const size = Math.random() * 0.5 + 0.5; // Between 0.5 and 1

    return (
      <div
        key={index}
        className="absolute text-retro-yellow animate-pixel-float"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          fontSize: `${size}rem`,
          animationDelay: `${delay}s`,
        }}
      >
        ★
      </div>
    );
  });

  return <div className="fixed inset-0 z-[-1] overflow-hidden">{stars}</div>;
};

export default StarBackground;
