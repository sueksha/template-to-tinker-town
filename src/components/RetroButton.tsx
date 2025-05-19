
import React from "react";
import { cn } from "../lib/utils";

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "green" | "pink" | "blue" | "yellow";
  size?: "sm" | "md" | "lg";
  glitch?: boolean;
  children: React.ReactNode;
}

const RetroButton: React.FC<RetroButtonProps> = ({
  className,
  color = "pink",
  size = "md",
  glitch = false,
  children,
  ...props
}) => {
  const colorMap = {
    green: "bg-retro-green hover:bg-retro-green/90 shadow-[0_4px_0_#2c8c44]",
    pink: "bg-retro-pink hover:bg-retro-pink/90 shadow-[0_4px_0_#aa3688]",
    blue: "bg-retro-blue hover:bg-retro-blue/90 shadow-[0_4px_0_#3580a5]",
    yellow: "bg-retro-yellow hover:bg-retro-yellow/90 shadow-[0_4px_0_#b59a2b]",
  };

  const sizeMap = {
    sm: "px-3 py-1 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      className={cn(
        "font-pixel text-white uppercase tracking-wider inline-block transition-all relative active:translate-y-1 active:shadow-[0_2px_0] disabled:opacity-50 disabled:pointer-events-none",
        colorMap[color],
        sizeMap[size],
        glitch && "hover:animate-pixel-glitch",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default RetroButton;
