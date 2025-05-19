
import React from "react";
import RetroContainer from "../components/RetroContainer";
import RetroButton from "../components/RetroButton";
import StarBackground from "../components/StarBackground";

const CreationsPage = () => {
  const artworks = [
    {
      id: 1,
      image: "/lovable-uploads/0fc6ec2a-9c61-4b51-a6de-d75d01acd9cd.png",
      title: "Architectural Model"
    },
    {
      id: 2,
      image: "/lovable-uploads/2bd445ca-c51d-4fd0-9cde-cf8b708ed164.png",
      title: "String Art Portrait"
    },
    {
      id: 3,
      image: "/lovable-uploads/8f883240-6b0a-4dd3-a53d-ce36b32325b0.png",
      title: "ATMOS Artwork"
    },
    {
      id: 4,
      image: "/lovable-uploads/85209e02-a53c-4bc9-a193-183cc99937fe.png",
      title: "ARENA Artwork"
    },
    {
      id: 5,
      image: "/lovable-uploads/4b25aff6-1bba-4396-8d2d-a2e626645d7f.png",
      title: "PEARL Artwork"
    },
    {
      id: 6,
      image: "/lovable-uploads/805edac3-0819-4257-bcb7-4e63ca2a4c69.png",
      title: "Collaborations"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-10">
      <StarBackground />
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-center">
          <RetroButton color="pink" as="a" href="/what-we-do" className="mb-4">
            WORKSHOP
          </RetroButton>
          
          <div className="flex items-center space-x-4">
            <div className="text-retro-yellow text-xl">⭐</div>
            <div className="text-retro-yellow text-xl">🏆</div>
            <div className="text-retro-yellow text-xl">⭐</div>
          </div>
          
          <RetroButton color="green" as="a" href="/events" className="mb-4">
            SAC 1ST FLOOR
          </RetroButton>
        </div>
      </div>
      
      {/* Main title */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="text-retro-pink text-4xl md:text-6xl font-pixel mb-0 tracking-wider">
          OUR CREATIONS
        </h1>
      </div>
      
      {/* Gallery */}
      <div className="container mx-auto px-4 mb-16">
        <RetroContainer border="green" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="relative group">
                <img 
                  src={artwork.image} 
                  alt={artwork.title} 
                  className="w-full h-64 object-cover border-2 border-retro-blue transition-transform group-hover:scale-[1.02] duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-retro-black/70 p-2 border-t-2 border-retro-pink">
                  <h3 className="font-pixel text-retro-green text-sm">{artwork.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </RetroContainer>
        
        {/* Store building */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/51de6464-bfb0-46d9-822d-58861770efbe.png" 
            alt="Store" 
            className="h-64 object-contain" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <RetroContainer border="pink" className="h-full">
              <h3 className="font-pixel text-retro-green text-lg mb-4">ON DISPLAY AT SAC</h3>
              <p className="font-retro text-white text-lg">
                Our creations are proudly displayed at the Student Activity Center (SAC) on the first floor. Come visit during open hours to see our works in person!
              </p>
              <div className="mt-4">
                <div className="font-retro text-white">
                  <div className="flex items-center">
                    <span className="text-retro-yellow mr-2">⏰</span>
                    Open hours: 10:00 AM - 8:00 PM
                  </div>
                  <div className="flex items-center">
                    <span className="text-retro-yellow mr-2">📍</span>
                    Location: SAC Building, 1st Floor
                  </div>
                </div>
              </div>
            </RetroContainer>
          </div>
          
          <div>
            <RetroContainer border="blue" className="h-full">
              <h3 className="font-pixel text-retro-pink text-lg mb-4">SPECIAL COMMISSIONS</h3>
              <p className="font-retro text-white text-lg">
                Need something custom made for your event or club? We accept special commissions from clubs and departments across campus!
              </p>
              <div className="mt-4">
                <RetroButton color="green">
                  REQUEST COMMISSION
                </RetroButton>
              </div>
            </RetroContainer>
          </div>
        </div>
      </div>
      
      {/* Bottom pixel grass */}
      <div className="h-12 mt-16 bg-repeat-x w-full" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='12' viewBox='0 0 24 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='12' fill='%2355ff88'/%3E%3C/svg%3E")`,
        backgroundSize: '24px 12px'
      }}>
      </div>
    </div>
  );
};

export default CreationsPage;
