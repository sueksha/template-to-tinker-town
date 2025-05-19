
import React from "react";
import RetroContainer from "../components/RetroContainer";
import ArtCard from "../components/ArtCard";
import HealthBar from "../components/HealthBar";
import StarBackground from "../components/StarBackground";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen pt-24 pb-10">
      <StarBackground />
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <RetroContainer border="green" className="flex justify-between items-center">
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/3d590992-c7bf-49e1-941c-6a74ac79c91e.png" 
              alt="Arts and Deco Logo" 
              className="w-32 h-32 object-contain" 
            />
          </div>
          <h1 className="text-retro-pink text-4xl md:text-6xl text-center font-pixel mb-0 tracking-wider">
            WHAT WE DO
          </h1>
          <div className="hidden md:block">
            <div className="w-32"></div>
          </div>
        </RetroContainer>
      </div>
      
      {/* Categories */}
      <div className="container mx-auto px-4 mb-16">
        <div id="category-section" className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div id="painting">
            <ArtCard 
              title="PAINTING" 
              icon="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='16' fill='%23A0522D'/%3E%3Crect y='16' width='6' height='48' fill='%23A0522D'/%3E%3Crect x='6' y='16' width='52' height='6' fill='%23FF55CD'/%3E%3Crect x='10' y='22' width='6' height='30' fill='%23FF55CD'/%3E%3Crect x='16' y='22' width='6' height='30' fill='%23FF55CD'/%3E%3Crect x='22' y='22' width='6' height='30' fill='%23FF55CD'/%3E%3Crect x='28' y='22' width='6' height='30' fill='%23FF55CD'/%3E%3Crect x='34' y='22' width='6' height='30' fill='%23FF55CD'/%3E%3C/svg%3E"
              color="pink"
            />
          </div>
          
          <div id="sketching">
            <ArtCard 
              title="SKETCHING" 
              icon="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='54' width='44' height='6' fill='%23FFA500'/%3E%3Crect x='16' y='48' width='32' height='6' fill='%23FFA500'/%3E%3Crect x='22' y='6' width='20' height='42' fill='%23FFDD44'/%3E%3Crect x='27' y='4' width='10' height='2' fill='%23000'/%3E%3Cpath d='M32 4L28 0H36L32 4Z' fill='%23555'/%3E%3C/svg%3E"
              color="yellow"
            />
          </div>
          
          <div id="workshop">
            <ArtCard 
              title="WORKSHOP" 
              icon="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='16' y='10' width='8' height='20' fill='%23888'/%3E%3Crect x='36' y='10' width='8' height='20' fill='%23888'/%3E%3Crect x='16' y='28' width='28' height='6' fill='%23888'/%3E%3Crect x='24' y='34' width='12' height='20' fill='%23888'/%3E%3Crect x='20' y='54' width='20' height='6' fill='%23888'/%3E%3C/svg%3E"
              color="blue"
            />
          </div>
          
          <div id="woodwork">
            <ArtCard 
              title="WOODWORK" 
              icon="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='14' y='6' width='36' height='52' fill='%23A0522D'/%3E%3Crect x='18' y='10' width='28' height='4' fill='%23D2B48C'/%3E%3Crect x='18' y='18' width='28' height='4' fill='%23D2B48C'/%3E%3Crect x='18' y='26' width='28' height='4' fill='%23D2B48C'/%3E%3Crect x='18' y='34' width='28' height='4' fill='%23D2B48C'/%3E%3Crect x='18' y='42' width='28' height='4' fill='%23D2B48C'/%3E%3Crect x='18' y='50' width='28' height='4' fill='%23D2B48C'/%3E%3C/svg%3E"
              color="green"
            />
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="container mx-auto px-4 mb-16">
        <RetroContainer border="pink" className="mb-8">
          <h2 className="font-pixel text-retro-green text-xl mb-6">ABOUT OUR ACTIVITIES</h2>
          
          <div className="space-y-6 font-retro text-lg text-white">
            <p>
              The Department of Arts & Deco is responsible for making canvases for various clubs to paint on. We are the people who decide what goes where in our campus.
            </p>
            <p>
              Our artists and craftspeople create beautiful designs, illustrations, and decorative elements for events, festivals, and campus life. From small sketches to large installations, we transform spaces and bring creative vision to life.
            </p>
          </div>
        </RetroContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RetroContainer border="green">
            <h3 className="font-pixel text-retro-pink text-lg mb-4">OUR EXPERTISE</h3>
            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-retro text-white">Painting</span>
                  <span className="font-retro text-retro-yellow">★★★★★</span>
                </div>
                <HealthBar value={95} maxValue={100} color="pink" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-retro text-white">Sketching</span>
                  <span className="font-retro text-retro-yellow">★★★★☆</span>
                </div>
                <HealthBar value={85} maxValue={100} color="yellow" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-retro text-white">Workshop</span>
                  <span className="font-retro text-retro-yellow">★★★★☆</span>
                </div>
                <HealthBar value={80} maxValue={100} color="blue" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-retro text-white">Woodwork</span>
                  <span className="font-retro text-retro-yellow">★★★★★</span>
                </div>
                <HealthBar value={90} maxValue={100} color="green" />
              </div>
            </div>
          </RetroContainer>
          
          <RetroContainer border="blue">
            <h3 className="font-pixel text-retro-pink text-lg mb-4">NO PREREQUISITES!!!</h3>
            <div className="font-retro text-lg text-white mb-4">
              <p>Anyone can join our department, regardless of experience level! We value enthusiasm and willingness to learn above all else.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img 
                  src="/lovable-uploads/8c52cb6f-1132-43d7-88fb-297d38457492.png" 
                  alt="No prerequisites" 
                  className="w-full h-32 object-cover" 
                />
              </div>
              <div>
                <img 
                  src="/lovable-uploads/8c52cb6f-1132-43d7-88fb-297d38457492.png" 
                  alt="No prerequisites" 
                  className="w-full h-32 object-cover" 
                />
              </div>
            </div>
          </RetroContainer>
        </div>
      </div>
      
      {/* Quote */}
      <div className="container mx-auto px-4 mb-16">
        <RetroContainer border="yellow" className="text-center py-8">
          <h2 className="font-pixel text-retro-pink text-2xl mb-4">WE DO THIS NOT BECAUSE IT IS EASY</h2>
          <h2 className="font-pixel text-retro-green text-2xl">BUT BECAUSE WE THOUGHT IT WOULD BE EASY</h2>
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

export default WhatWeDo;
