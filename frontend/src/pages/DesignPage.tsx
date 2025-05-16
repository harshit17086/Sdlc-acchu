import React from 'react';
 
const DesignPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12">
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 relative">
          <h1 className="text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered Design
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
              <path fill="currentColor" d="M45.2,-51.2C59.6,-42.5,73,-28.6,78.1,-11.7C83.3,5.3,80.2,25.3,69.2,39.8C58.1,54.2,39.1,63.1,19.9,69C0.7,74.9,-18.7,77.9,-33.4,70.7C-48,63.5,-57.8,46.1,-65.8,27.3C-73.8,8.4,-79.9,-11.9,-74.2,-28.1C-68.5,-44.3,-51,-56.3,-34.1,-64.2C-17.3,-72,-0.1,-75.7,14.6,-71.1C29.3,-66.6,30.8,-59.9,45.2,-51.2Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content - 2 columns */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 transform transition-all hover:shadow-glow-intense duration-500">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Transforming Software Design with AI
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5 border-l-2 border-cyan-800/30 pl-4">
                AI is revolutionizing software design by generating architecture recommendations, 
                optimizing component interactions, and suggesting design patterns based on requirements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-sitemap text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">Architecture Recommendation</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
                    AI systems can analyze requirements to suggest optimal architectural approaches,
                    considering factors like scalability, security, and performance.
                  </p>
                </div>
                
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-desktop text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">UI/UX Design Generation</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
                    Generative AI tools can create user interface mockups and design elements
                    based on best practices and user preference data.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Design Pattern Recommendation
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5">
                AI systems can analyze your project requirements and suggest appropriate design patterns
                that address your specific challenges, reducing technical debt before it happens.
              </p>
              
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30 transform hover:scale-[1.01] hover:border-cyan-800/50 transition-all duration-300">
                <h3 className="text-xl font-medium mb-4 text-cyan-300 flex items-center">
                  <i className="fas fa-award text-cyan-400 mr-3"></i>
                  Benefits
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { text: "Faster design decisions", icon: "fas fa-bolt" },
                    { text: "Reduced architectural flaws", icon: "fas fa-shield-alt" },
                    { text: "More consistent system design", icon: "fas fa-cubes" },
                    { text: "Better alignment with requirements", icon: "fas fa-bullseye" }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="mr-3 w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-900/50 group-hover:text-cyan-300 transition-all">
                        <i className={benefit.icon}></i>
                      </div>
                      <span className="text-gray-300">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1 column */}
          <div className="md:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 sticky top-20">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                AI Design Tools
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: "IBM Watson", desc: "Architectural decision assistant", icon: "fas fa-server" },
                  { name: "Figma AI", desc: "Intelligent design capabilities", icon: "fas fa-pencil-ruler" },
                  { name: "Midjourney", desc: "UI concept generation", icon: "fas fa-paint-brush" },
                  { name: "GitHub Copilot", desc: "Pattern implementation", icon: "fab fa-github" }
                ].map((tool, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg border border-gray-700/30 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 group"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-3 group-hover:bg-cyan-900/50 transition-colors">
                        <i className={`${tool.icon} text-cyan-400 group-hover:text-cyan-300 transition-colors`}></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-cyan-300">{tool.name}</h3>
                        <p className="text-sm text-gray-400">{tool.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/20 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fas fa-chart-line text-cyan-400 mr-2"></i>
                  <span className="text-cyan-300 font-medium">Design Efficiency</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Organizations using AI-powered design tools report reducing design time by up to 40% while improving overall system quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPage; 