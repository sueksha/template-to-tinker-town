
import React from "react";
import { NavLink } from "react-router-dom";
import RetroButton from "./RetroButton";

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-retro-black/90 border-b-2 border-retro-green p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <NavLink to="/" className="text-retro-pink font-pixel text-lg tracking-wider">
          ARTS & DECO
        </NavLink>
        
        <div className="hidden md:flex space-x-4">
          <NavLink to="/what-we-do" className={({ isActive }) => 
            isActive ? "text-retro-green font-pixel text-sm" : "text-white hover:text-retro-pink font-pixel text-sm"
          }>
            WHAT WE DO
          </NavLink>
          <NavLink to="/creations" className={({ isActive }) => 
            isActive ? "text-retro-green font-pixel text-sm" : "text-white hover:text-retro-pink font-pixel text-sm"
          }>
            OUR CREATIONS
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => 
            isActive ? "text-retro-green font-pixel text-sm" : "text-white hover:text-retro-pink font-pixel text-sm"
          }>
            EVENTS
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => 
            isActive ? "text-retro-green font-pixel text-sm" : "text-white hover:text-retro-pink font-pixel text-sm"
          }>
            TEAM
          </NavLink>
        </div>
        
        <RetroButton color="pink" size="sm" className="md:hidden">
          MENU
        </RetroButton>
        
        <RetroButton color="green" size="sm" className="hidden md:block">
          SIGN UP
        </RetroButton>
      </div>
    </nav>
  );
};

export default Navigation;
