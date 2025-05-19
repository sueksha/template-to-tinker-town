
import React from "react";
import RetroContainer from "../components/RetroContainer";
import RetroButton from "../components/RetroButton";
import StarBackground from "../components/StarBackground";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "COSTAAN",
      fullName: "CHETAN SURYA",
      contact: "9603774494",
      image: "/lovable-uploads/4635ab7a-9271-40dc-8de9-a05cf4fdb76f.png",
    },
    {
      id: 2,
      name: "COSSACN",
      fullName: "SUDEEKSHA LINGIREDDY",
      contact: "8328008255",
      image: "/lovable-uploads/4635ab7a-9271-40dc-8de9-a05cf4fdb76f.png",
    },
    {
      id: 3,
      name: "STUCCAN",
      fullName: "KENCHE TRIJAL",
      contact: "7893062053",
      image: "/lovable-uploads/4635ab7a-9271-40dc-8de9-a05cf4fdb76f.png",
    }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-10">
      <StarBackground />
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <RetroContainer border="pink" className="text-center">
          <h1 className="text-retro-green text-4xl md:text-6xl font-pixel mb-6 tracking-wider">
            OUR TEAM
          </h1>
          <p className="font-retro text-white text-xl max-w-3xl mx-auto">
            Meet the creative minds behind Arts & Deco. Our team is dedicated to bringing artistic vision to life across campus.
          </p>
        </RetroContainer>
      </div>
      
      {/* Status bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-retro-blue mr-2">🔋</div>
            <div className="text-retro-yellow mr-1">★</div>
            <div className="text-retro-yellow mr-1">★</div>
            <div className="text-retro-yellow mr-1">★</div>
            <div className="text-retro-yellow mr-1">★</div>
            <div className="text-retro-yellow mr-1">★</div>
          </div>
          <div className="flex items-center">
            <div className="font-pixel text-white text-sm mr-2">PASSION 2500</div>
            <div className="bg-gray-900 w-32 h-4 border border-retro-green">
              <div className="bg-retro-green h-full" style={{ width: '67%' }}></div>
            </div>
            <div className="font-pixel text-retro-pink text-sm ml-2">ENTHUSIASM</div>
          </div>
        </div>
      </div>
      
      {/* Team motto */}
      <div className="container mx-auto px-4 mb-16">
        <RetroContainer border="blue" className="mb-8">
          <div className="text-center">
            <h2 className="font-pixel text-retro-pink text-3xl mb-4">WE DO THIS NOT BECAUSE</h2>
            <h2 className="font-pixel text-retro-pink text-3xl mb-4">IT IS EASY BUT BECAUSE</h2>
            <h2 className="font-pixel text-retro-pink text-3xl mb-4">WE THOUGHT IT WOULD</h2>
            <h2 className="font-pixel text-retro-pink text-3xl">BE EASY</h2>
          </div>
        </RetroContainer>
      </div>
      
      {/* Team members */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="font-pixel text-retro-green text-2xl mb-8 text-center">TEAM LEADS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {teamMembers.map((member) => (
            <RetroContainer key={member.id} border="green" className="flex flex-col items-center">
              <div className="mb-4 border-4 border-retro-blue overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name} 
                  className="w-48 h-48 object-cover hover:scale-110 transition-all duration-300" 
                />
              </div>
              
              <div className="w-full">
                <RetroContainer border="blue" className="mb-4 text-center">
                  <h3 className="font-pixel text-white">♦ {member.name}</h3>
                  <p className="font-retro text-retro-green">{member.fullName}</p>
                  <p className="font-retro text-white">{member.contact}</p>
                </RetroContainer>
              </div>
            </RetroContainer>
          ))}
        </div>
        
        <RetroContainer border="yellow" className="text-center py-8">
          <h3 className="font-pixel text-retro-pink text-xl mb-6">JOIN OUR TEAM</h3>
          <p className="font-retro text-white text-lg mb-6">
            Interested in joining the Arts & Deco team? We're always looking for creative minds and passionate artists!
          </p>
          <RetroButton color="green" size="lg">
            SIGN UP NOW
          </RetroButton>
        </RetroContainer>
      </div>
      
      {/* Contact */}
      <div className="container mx-auto px-4 mb-16">
        <RetroContainer border="pink" className="relative">
          <h2 className="font-pixel text-retro-green text-2xl mb-8 text-center">THANK YOU!</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <span className="text-white mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </span>
              <span className="font-pixel text-white">AND_BPHC</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-white mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <span className="font-pixel text-white text-sm md:text-base">ARTSNDECO@HYDERABAD.BITS-PILANI.AC.IN</span>
            </div>
          </div>
          
          {/* Pixel character */}
          <div className="hidden md:block absolute bottom-[-48px] right-12">
            <img 
              src="/lovable-uploads/6d367ca3-7e6a-482a-a3b5-d40bc40a8728.png" 
              alt="Character" 
              className="h-48 object-contain" 
            />
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

export default TeamPage;
