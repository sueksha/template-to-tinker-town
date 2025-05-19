
import React from "react";
import { cn } from "../lib/utils";

interface HealthBarProps {
  value: number;
  maxValue: number;
  color?: "green" | "pink" | "blue" | "yellow";
  label?: string;
  className?: string;
}

const HealthBar: React.FC<HealthBarProps> = ({
  value,
  maxValue,
  color = "green",
  label,
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));
  
  const colorMap = {
    green: "bg-retro-green border-retro-green",
    pink: "bg-retro-pink border-retro-pink",
    blue: "bg-retro-blue border-retro-blue",
    yellow: "bg-retro-yellow border-retro-yellow",
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="text-xs font-pixel mb-1 uppercase tracking-wide text-white">
          {label}
        </div>
      )}
      <div className="h-4 bg-gray-900/50 relative border-2 border-gray-700 overflow-hidden">
        <div
          className={cn("h-full transition-all duration-500", colorMap[color])}
          style={{ width: `${percentage}%` }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_40%,rgba(255,255,255,0.2)_50%,transparent_60%,transparent_100%)]"></div>
      </div>
    </div>
  );
};

export default HealthBar;
