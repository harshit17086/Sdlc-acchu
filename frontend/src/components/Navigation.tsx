import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const links = [
    { path: '/sdlc', label: 'Overview' },
    { path: '/planning', label: 'Planning' },
    { path: '/requirements', label: 'Requirements' },
    { path: '/design', label: 'Design' },
    { path: '/development', label: 'Development' },
    { path: '/testing', label: 'Testing' },
    { path: '/deployment', label: 'Deployment' }
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold">AI in SDLC</Link>
          
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-blue-200 transition-colors ${
                  location.pathname === link.path ? 'font-bold border-b-2 border-white' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="flex items-center p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu (hidden by default) */}
      <div className="md:hidden hidden bg-blue-700 pb-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block py-2 px-4 hover:bg-blue-800 transition-colors ${
              location.pathname === link.path ? 'font-bold' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 