import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
 
const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    { path: '/sdlc', label: 'Overview' },
    { path: '/planning', label: 'Planning' },
    { path: '/requirements', label: 'Requirements' },
    { path: '/design', label: 'Design' },
    { path: '/development', label: 'Development' },
    { path: '/testing', label: 'Testing' },
    { path: '/deployment', label: 'Deployment' },
    { path: '/ai-tools', label: 'AI Tools' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-950 bg-opacity-90 backdrop-blur-md text-indigo-400 shadow-lg border-b border-indigo-600/20 sticky top-0 z-50">
      {/* Animated glowing lines */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500"></div>
      
      {/* Animated background pattern */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-5"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(165, 180, 252, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(165, 180, 252, 0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      ></div>
      
      {/* Animated glow effects */}
      <div className="absolute -left-40 top-0 w-80 h-20 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -right-40 top-0 w-80 h-20 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-xl font-bold flex items-center group"
          >
            <span className="text-2xl mr-2 text-indigo-400 group-hover:text-indigo-300 transition-colors">◢</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 bg-clip-text text-transparent hover:from-indigo-300 hover:via-purple-300 hover:to-blue-400 transition-all duration-300">
              AI in SDLC
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group overflow-hidden py-2 px-1 hover:text-indigo-300 transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-indigo-300' : 'text-indigo-500'
                }`}
              >
                <span className="relative z-10">
                  {link.label}
                  {link.label === 'AI Tools' && (
                    <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                      New
                    </span>
                  )}
                </span>
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 animate-pulse"></span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                
                {/* Animated hover glow effect */}
                <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 bg-indigo-500 blur-md transition-opacity duration-300"></span>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="flex items-center p-2 text-indigo-400 hover:text-indigo-300 transition-colors"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-indigo-900/30 py-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 px-4 hover:bg-gray-800 transition-colors ${
                location.pathname === link.path 
                  ? 'text-indigo-300 border-l-2 border-indigo-400' 
                  : 'text-indigo-500 border-l-2 border-transparent'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
              {link.label === 'AI Tools' && (
                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                  New
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 