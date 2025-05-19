
import React from "react";
import RetroContainer from "../components/RetroContainer";
import EventCard from "../components/EventCard";
import RetroButton from "../components/RetroButton";
import StarBackground from "../components/StarBackground";

const EventsPage = () => {
  const events = [
    {
      title: "ATMOS",
      description: "THE TECH FEST OF BPHC",
      images: [
        "/lovable-uploads/8f883240-6b0a-4dd3-a53d-ce36b32325b0.png",
      ],
      enthusiasm: 75,
      color: "blue"
    },
    {
      title: "ARENA",
      description: "THE SPORTS FEST OF BPHC",
      images: [
        "/lovable-uploads/85209e02-a53c-4bc9-a193-183cc99937fe.png",
      ],
      enthusiasm: 85,
      color: "green"
    },
    {
      title: "PEARL",
      description: "THE CULTURAL FEST OF BPHC",
      images: [
        "/lovable-uploads/4b25aff6-1bba-4396-8d2d-a2e626645d7f.png",
      ],
      enthusiasm: 95,
      color: "pink"
    },
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-10">
      <StarBackground />
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <RetroContainer border="blue" className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-retro-yellow text-xl mr-2">⭐</span>
            <h1 className="text-retro-pink text-4xl md:text-6xl font-pixel tracking-wider inline-block">EVENTS</h1>
            <span className="text-retro-yellow text-xl ml-2">⭐</span>
          </div>
          <p className="font-retro text-white text-xl">
            We participate in and create artworks for various events throughout the academic year!
          </p>
        </RetroContainer>
      </div>
      
      {/* Status bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-retro-blue mr-2">🔋</div>
            <div className="font-pixel text-white text-sm">PASSION 2500</div>
          </div>
          <div className="flex items-center">
            <div className="font-pixel text-retro-pink text-sm mr-2">ENTHUSIASM</div>
            <div className="bg-gray-900 w-32 h-4 border border-retro-pink">
              <div className="bg-retro-pink h-full" style={{ width: '67%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Events */}
      <div className="container mx-auto px-4 mb-16">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            images={event.images}
            enthusiasm={event.enthusiasm}
            color={event.color as "green" | "pink" | "blue" | "yellow"}
          />
        ))}
      </div>
      
      {/* Over the years */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="font-pixel text-retro-pink text-2xl mb-8 text-center">OVER THE YEARS</h2>
        
        <RetroContainer border="yellow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img 
                src="/lovable-uploads/bdb5d89f-0a32-4dfe-bd3f-7c8b2267e80d.png" 
                alt="Over the years" 
                className="w-full h-auto" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-retro text-white text-lg mb-6">
                Over the years, our department has grown from a small group of enthusiastic artists to a significant presence on campus, contributing to all major events and festivals.
              </p>
              <p className="font-retro text-white text-lg mb-6">
                Each year brings new talent, ideas, and creations that push the boundaries of what's possible with our limited resources and unlimited imagination.
              </p>
              <div className="flex justify-center">
                <RetroButton color="pink">
                  JOIN OUR LEGACY
                </RetroButton>
              </div>
            </div>
          </div>
        </RetroContainer>
      </div>
      
      {/* Collaborations */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="font-pixel text-retro-green text-2xl mb-8 text-center">COLLABORATIONS</h2>
        
        <RetroContainer border="blue" className="relative">
          {/* Stars for decoration */}
          <div className="absolute top-4 left-4 text-retro-yellow text-xl">★</div>
          <div className="absolute top-4 right-4 text-retro-yellow text-xl">★</div>
          <div className="absolute bottom-4 left-4 text-retro-yellow text-xl">★</div>
          <div className="absolute bottom-4 right-4 text-retro-yellow text-xl">★</div>
          
          <div className="px-6 py-4">
            <div className="mb-6">
              <div className="flex items-center">
                <div className="text-retro-yellow mr-2">♦</div>
                <h3 className="font-pixel text-white text-lg">NIRMAAN</h3>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center">
                <div className="text-retro-yellow mr-2">♦</div>
                <h3 className="font-pixel text-white text-lg">DOPY</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <img 
                  src="/lovable-uploads/805edac3-0819-4257-bcb7-4e63ca2a4c69.png" 
                  alt="Ignite" 
                  className="w-full h-36 object-cover border-2 border-retro-pink" 
                />
              </div>
              <div>
                <img 
                  src="/lovable-uploads/805edac3-0819-4257-bcb7-4e63ca2a4c69.png" 
                  alt="Collaboration" 
                  className="w-full h-36 object-cover border-2 border-retro-green" 
                />
              </div>
              <div>
                <img 
                  src="/lovable-uploads/805edac3-0819-4257-bcb7-4e63ca2a4c69.png" 
                  alt="Collaboration" 
                  className="w-full h-36 object-cover border-2 border-retro-blue" 
                />
              </div>
            </div>
          </div>
        </RetroContainer>
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

export default EventsPage;
