
import React from "react";
import { cn } from "../lib/utils";

interface RetroContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  border?: "green" | "pink" | "blue" | "yellow";
  glow?: boolean;
  children: React.ReactNode;
}

const RetroContainer: React.FC<RetroContainerProps> = ({
  className,
  border = "green",
  glow = true,
  children,
  ...props
}) => {
  const borderColorMap = {
    green: "border-retro-green",
    pink: "border-retro-pink",
    blue: "border-retro-blue",
    yellow: "border-retro-yellow",
  };

  const glowColorMap = {
    green: "shadow-[0_0_8px_rgba(85,255,136,0.5)]",
    pink: "shadow-[0_0_8px_rgba(255,85,205,0.5)]",
    blue: "shadow-[0_0_8px_rgba(85,204,255,0.5)]",
    yellow: "shadow-[0_0_8px_rgba(255,221,68,0.5)]",
  };

  return (
    <div
      className={cn(
        "relative border-2 px-6 py-4 rounded-none bg-retro-black/70",
        borderColorMap[border],
        glow && glowColorMap[border],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default RetroContainer;
