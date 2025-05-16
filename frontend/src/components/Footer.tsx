import React from 'react';
import { Link } from 'react-router-dom';
 
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 relative overflow-hidden">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-5"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(29, 225, 209, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(29, 225, 209, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      ></div>
      
      {/* Animated glow effect */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2 text-cyan-400">◢</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI in SDLC
              </span>
            </h3>
            <p className="max-w-md text-gray-400 border-l-2 border-cyan-800/30 pl-4">
              Transforming Software Development Life Cycle with Artificial Intelligence.
              Learn how AI can revolutionize each stage of your development process.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195c-.9-.96-2.18-1.56-3.591-1.56-2.724 0-4.927 2.204-4.927 4.927 0 .39.044.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.731-.668 1.574-.668 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.375 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.004-.426-.013-.631A9.936 9.936 0 0024 4.59l-.047-.02z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: '/sdlc', label: 'Overview' },
                { path: '/planning', label: 'Planning' },
                { path: '/requirements', label: 'Requirements' },
                { path: '/testing', label: 'Testing' }
              ].map((link, index) => (
                <li key={index} className="group">
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-cyan-300 transition-colors flex items-center"
                  >
                    <span className="w-0 h-px bg-cyan-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 inline-block"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p className="text-sm">
            &copy; {currentYear} <span className="text-cyan-400">AI in SDLC Project</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 