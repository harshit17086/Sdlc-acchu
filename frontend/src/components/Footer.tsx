import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">AI in SDLC</h3>
            <p className="max-w-md text-gray-400">
              Transforming Software Development Life Cycle with Artificial Intelligence.
              Learn how AI can revolutionize each stage of your development process.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sdlc" className="text-gray-400 hover:text-white transition-colors">Overview</Link>
              </li>
              <li>
                <Link to="/planning" className="text-gray-400 hover:text-white transition-colors">Planning</Link>
              </li>
              <li>
                <Link to="/requirements" className="text-gray-400 hover:text-white transition-colors">Requirements</Link>
              </li>
              <li>
                <Link to="/testing" className="text-gray-400 hover:text-white transition-colors">Testing</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} AI in SDLC Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 