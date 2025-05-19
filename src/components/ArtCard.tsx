
import React from "react";
import RetroContainer from "./RetroContainer";

interface ArtCardProps {
  title: string;
  icon: string;
  color?: "green" | "pink" | "blue" | "yellow";
}

const ArtCard: React.FC<ArtCardProps> = ({ title, icon, color = "pink" }) => {
  return (
    <div className="w-full">
      <RetroContainer 
        border={color} 
        className="flex flex-col items-center py-8 hover:translate-y-[-5px] transition-transform"
      >
        <div className="mb-6">
          <img src={icon} alt={title} className="w-16 h-16 object-contain pixel-art" />
        </div>
        <div className="w-full border-b-2 border-dashed border-gray-600 mb-4"></div>
        <h3 className="font-pixel text-white uppercase text-center">{title}</h3>
      </RetroContainer>
    </div>
  );
};

export default ArtCard;
