
import React from "react";
import RetroContainer from "./RetroContainer";
import HealthBar from "./HealthBar";

interface EventCardProps {
  title: string;
  description: string;
  images: string[];
  enthusiasm: number;
  color?: "green" | "pink" | "blue" | "yellow";
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  images,
  enthusiasm,
  color = "green"
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-2">
        <h3 className="text-retro-pink font-pixel tracking-wider text-xl mr-4">
          {title}
        </h3>
        <HealthBar
          value={enthusiasm}
          maxValue={100}
          color={color}
          className="flex-grow"
        />
      </div>
      
      <RetroContainer border={color} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-sm">
              <img
                src={src}
                alt={`${title} image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="bg-retro-green p-4 text-black font-retro text-lg">
          ➡ {description}
        </div>
      </RetroContainer>
    </div>
  );
};

export default EventCard;
