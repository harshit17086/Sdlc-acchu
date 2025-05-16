import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(to right, rgba(29, 225, 209, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(29, 225, 209, 0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}>
        </div>
        
        {/* Animated glow effects */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Transforming Software Development Life Cycle
          </h1>
          <h2 className="text-2xl text-gray-300 mb-6">Leveraging AI to Revolutionize SDLC</h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-8"></div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 mb-12 border border-gray-700/50 max-w-4xl mx-auto">
          <p className="text-gray-300 mb-6 leading-relaxed">
            The integration of AI into the Software Development Life Cycle (SDLC) is essential to address
            the growing complexity and demands of modern software projects. The Software Development Life
            Cycle (SDLC) typically encompasses stages such as Planning, Requirement Gathering, Design,
            Development, Testing, and Deployment.
          </p>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Our project highlights how AI can revolutionize each stage of SDLC by automating repetitive tasks,
            providing intelligent insights, and enhancing decision-making capabilities throughout the
            development process.
          </p>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            We've done a deep dive on using AI for requirement gathering and test case generation,
            showcasing how machine learning and natural language processing can transform these
            critical phases of software development.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            Explore our comprehensive guide to discover how AI is being leveraged by companies
            to optimize their software development processes and deliver higher quality products
            faster and more efficiently.
          </p>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/sdlc" 
              className="relative group overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-all duration-300 transform group-hover:scale-105">
                Explore AI in SDLC
              </span>
              <span className="absolute inset-0 bg-cyan-400 blur-md opacity-30 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></span>
            </Link>
            
            <Link 
              to="/ai-tools" 
              className="relative group overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-all duration-300 transform group-hover:scale-105">
                Try AI Tools
                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-white text-pink-600">
                  New
                </span>
              </span>
              <span className="absolute inset-0 bg-purple-400 blur-md opacity-30 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></span>
            </Link>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute top-1/4 right-10 w-16 h-16 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
            <path fill="currentColor" d="M45.2,-51.2C59.6,-42.5,73,-28.6,78.1,-11.7C83.3,5.3,80.2,25.3,69.2,39.8C58.1,54.2,39.1,63.1,19.9,69C0.7,74.9,-18.7,77.9,-33.4,70.7C-48,63.5,-57.8,46.1,-65.8,27.3C-73.8,8.4,-79.9,-11.9,-74.2,-28.1C-68.5,-44.3,-51,-56.3,-34.1,-64.2C-17.3,-72,-0.1,-75.7,14.6,-71.1C29.3,-66.6,30.8,-59.9,45.2,-51.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-10 w-20 h-20 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
            <path fill="currentColor" d="M65.5,-19.4C75.1,8.1,65.8,44.4,42.8,59C19.7,73.7,-17.1,66.7,-39.1,46.9C-61.1,27.1,-68.2,-5.4,-57.5,-32.9C-46.7,-60.4,-18.4,-82.9,6.4,-85.1C31.2,-87.3,55.9,-46.9,65.5,-19.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomePage;