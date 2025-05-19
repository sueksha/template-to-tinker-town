
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RetroContainer from "../components/RetroContainer";
import RetroButton from "../components/RetroButton";
import HealthBar from "../components/HealthBar";
import StarBackground from "../components/StarBackground";

const Index = () => {
  const [workshopHealth, setWorkshopHealth] = useState(50);
  const [roomHealth, setRoomHealth] = useState(75);
  const [budget, setBudget] = useState(25000);
  
  // Simulate random health bar fluctuations for visual effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkshopHealth((prev) => Math.min(100, Math.max(25, prev + Math.random() * 10 - 5)));
      setRoomHealth((prev) => Math.min(100, Math.max(25, prev + Math.random() * 10 - 5)));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-10">
      <StarBackground />
      
      {/* Status bars */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="hidden md:block">
            <HealthBar value={workshopHealth} maxValue={100} color="green" label="WORKSHOP" />
          </div>
          <div className="text-center">
            <div className="font-pixel text-white text-sm mb-1">BUDGET {budget} (10000)</div>
          </div>
          <div className="hidden md:block">
            <HealthBar value={roomHealth} maxValue={100} color="pink" label="AND ROOM" />
          </div>
        </div>
      </div>
      
      {/* Hero section */}
      <div className="container mx-auto px-4 mb-16">
        <RetroContainer border="green" className="relative py-12 animate-pixel-fade-in">
          <div className="absolute left-6 top-6 text-retro-yellow text-2xl">★</div>
          <div className="absolute right-6 top-6 text-retro-yellow text-2xl">★</div>
          <div className="absolute left-6 bottom-6 text-retro-yellow text-2xl">★</div>
          <div className="absolute right-6 bottom-6 text-retro-yellow text-2xl">★</div>
          
          <h1 className="text-retro-pink text-4xl md:text-6xl text-center font-pixel mb-8 tracking-wider leading-relaxed">
            DEPARTMENT OF<br />ARTS & DECO
          </h1>
          
          <div className="max-w-2xl mx-auto mb-10">
            <div className="font-retro text-white text-xl text-center">
              WE CHOOSE AND MAKE THE TRICKIEST CANVASES TO PAINT
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link to="/what-we-do">
              <RetroButton color="pink" size="lg" glitch>
                SIGN UP
              </RetroButton>
            </Link>
          </div>
          
          <div className="absolute bottom-[-20px] left-12 hidden md:block">
            <img 
              src="/lovable-uploads/3e7da965-9fb4-4d97-be72-e100f3dd5a03.png" 
              alt="Character" 
              className="w-24 h-24 object-contain pixel-art" 
            />
          </div>
          
          <div className="absolute bottom-[-20px] right-12 hidden md:block">
            <img 
              src="/lovable-uploads/3e7da965-9fb4-4d97-be72-e100f3dd5a03.png" 
              alt="Character" 
              className="w-24 h-24 object-contain pixel-art transform scale-x-[-1]" 
            />
          </div>
        </RetroContainer>
      </div>
      
      {/* Quick links */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link to="/what-we-do#painting" className="block">
            <RetroContainer border="pink" className="text-center hover:translate-y-[-5px] transition-transform">
              <div className="mb-4">
                <span className="text-4xl">🖌️</span>
              </div>
              <h3 className="font-pixel text-white">PAINTING</h3>
            </RetroContainer>
          </Link>
          
          <Link to="/what-we-do#sketching" className="block">
            <RetroContainer border="pink" className="text-center hover:translate-y-[-5px] transition-transform">
              <div className="mb-4">
                <span className="text-4xl">✏️</span>
              </div>
              <h3 className="font-pixel text-white">SKETCHING</h3>
            </RetroContainer>
          </Link>
          
          <Link to="/what-we-do#workshop" className="block">
            <RetroContainer border="pink" className="text-center hover:translate-y-[-5px] transition-transform">
              <div className="mb-4">
                <span className="text-4xl">🔨</span>
              </div>
              <h3 className="font-pixel text-white">WORKSHOP</h3>
            </RetroContainer>
          </Link>
          
          <Link to="/what-we-do#woodwork" className="block">
            <RetroContainer border="pink" className="text-center hover:translate-y-[-5px] transition-transform">
              <div className="mb-4">
                <span className="text-4xl">🪚</span>
              </div>
              <h3 className="font-pixel text-white">WOODWORK</h3>
            </RetroContainer>
          </Link>
        </div>
      </div>
      
      {/* Featured events */}
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-retro-green text-2xl mb-8 text-center">FEATURED EVENTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <RetroContainer border="blue" className="hover:translate-y-[-5px] transition-transform">
            <h3 className="font-pixel text-retro-pink mb-4">ATMOS</h3>
            <img 
              src="/lovable-uploads/8f883240-6b0a-4dd3-a53d-ce36b32325b0.png" 
              alt="ATMOS" 
              className="w-full h-40 object-cover mb-4" 
            />
            <p className="font-retro text-white">ATMOS: THE TECH FEST OF BPHC</p>
          </RetroContainer>
          
          <RetroContainer border="yellow" className="hover:translate-y-[-5px] transition-transform">
            <h3 className="font-pixel text-retro-pink mb-4">ARENA</h3>
            <img 
              src="/lovable-uploads/85209e02-a53c-4bc9-a193-183cc99937fe.png" 
              alt="ARENA" 
              className="w-full h-40 object-cover mb-4" 
            />
            <p className="font-retro text-white">ARENA: THE SPORTS FEST OF BPHC</p>
          </RetroContainer>
          
          <RetroContainer border="green" className="hover:translate-y-[-5px] transition-transform">
            <h3 className="font-pixel text-retro-pink mb-4">PEARL</h3>
            <img 
              src="/lovable-uploads/4b25aff6-1bba-4396-8d2d-a2e626645d7f.png" 
              alt="PEARL" 
              className="w-full h-40 object-cover mb-4" 
            />
            <p className="font-retro text-white">PEARL: THE CULTURAL FEST OF BPHC</p>
          </RetroContainer>
        </div>
        
        <div className="text-center">
          <Link to="/events">
            <RetroButton color="blue" size="md">
              VIEW ALL EVENTS
            </RetroButton>
          </Link>
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

export default Index;
