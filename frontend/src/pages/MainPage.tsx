import React from 'react';
import { Link } from 'react-router-dom';
 
const MainPage: React.FC = () => {
  const sdlcStages = [
    {
      title: 'Planning',
      description: 'AI-powered project planning and resource allocation',
      path: '/planning',
      iconClass: 'far fa-calendar-alt'
    },
    {
      title: 'Requirements',
      description: 'Automated requirements gathering and analysis using AI',
      path: '/requirements',
      iconClass: 'fas fa-tasks'
    },
    {
      title: 'Design',
      description: 'Intelligent design suggestions and architecture optimization',
      path: '/design',
      iconClass: 'fas fa-pencil-ruler'
    },
    {
      title: 'Development',
      description: 'AI-assisted coding and intelligent development tools',
      path: '/development',
      iconClass: 'fas fa-code'
    },
    {
      title: 'Testing',
      description: 'Automated test case generation and intelligent test execution',
      path: '/testing',
      iconClass: 'fas fa-vial'
    },
    {
      title: 'Deployment',
      description: 'Smart deployment strategies and predictive analytics',
      path: '/deployment',
      iconClass: 'fas fa-rocket'
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Hero section with animated background */}
      <div className="relative overflow-hidden py-20">
        {/* Animated grid background */}
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(29, 225, 209, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(29, 225, 209, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        ></div>
        
        {/* Animated glow effects */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transforming SDLC with AI
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Discover how artificial intelligence is revolutionizing each stage of the 
              Software Development Life Cycle, leading to faster delivery, higher quality, 
              and reduced costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdlcStages.map((stage, index) => (
              <Link 
                key={index} 
                to={stage.path}
                className="group relative bg-gray-800 rounded-lg shadow-glow overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-intense"
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/20 to-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <i className={`${stage.iconClass} text-2xl text-cyan-400 mr-3 group-hover:text-cyan-300 transition-colors`}></i>
                    <h2 className="text-2xl font-semibold text-white">{stage.title}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{stage.description}</p>
                  <div className="text-cyan-400 font-medium flex items-center group-hover:text-cyan-300 transition-colors">
                    Learn more 
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700"></div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-gray-800 rounded-lg p-8 shadow-glow relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -top-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-2xl font-semibold mb-6 text-white">Why AI in SDLC Matters</h2>
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {[
                {
                  title: 'Increased Efficiency',
                  description: 'Reduce manual effort and accelerate delivery with AI-powered automation'
                },
                {
                  title: 'Higher Quality',
                  description: 'Produce more reliable software with AI-driven testing and quality checks'
                },
                {
                  title: 'Reduced Costs',
                  description: 'Lower development costs through intelligent resource optimization'
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-md shadow-inner border border-gray-700/50 transform transition-all duration-300 hover:scale-[1.03] hover:border-cyan-800/50"
                >
                  <h3 className="text-xl font-medium mb-3 text-cyan-300">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 