
import React from "react";
import { cn } from "../lib/utils";
import { LucideIcon } from "lucide-react";

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "green" | "pink" | "blue" | "yellow";
  size?: "sm" | "md" | "lg";
  glitch?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

const RetroButton: React.FC<RetroButtonProps> = ({
  className,
  color = "pink",
  size = "md",
  glitch = false,
  children,
  as: Component = "button",
  href,
  icon: Icon,
  iconPosition = "left",
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

  const componentProps = Component === "a" ? { href, ...props } : props;

  return (
    <Component
      className={cn(
        "font-pixel text-white uppercase tracking-wider inline-block transition-all relative active:translate-y-1 active:shadow-[0_2px_0] disabled:opacity-50 disabled:pointer-events-none",
        colorMap[color],
        sizeMap[size],
        glitch && "hover:animate-pixel-glitch",
        className
      )}
      {...componentProps}
    >
      {Icon && iconPosition === "left" && (
        <span className="inline-block mr-2 -mt-1">
          <Icon size={size === "sm" ? 12 : size === "md" ? 16 : 20} />
        </span>
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <span className="inline-block ml-2 -mt-1">
          <Icon size={size === "sm" ? 12 : size === "md" ? 16 : 20} />
        </span>
      )}
    </Component>
  );
};

export default RetroButton;
