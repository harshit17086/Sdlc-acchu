import React from 'react';
 
const DeploymentPage: React.FC = () => {
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
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 flex items-center">
          <div>
            <h1 className="text-4xl font-bold mb-3 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI in Deployment
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
          <div className="ml-auto opacity-20">
            <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5.41V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5.41l-2-2-3 2zM5 13.41V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7.59l-2-2-3 2z" fill="currentColor"/>
              <path d="M13 5.41L10 2H9l2 2-2 2v1l4-1.59z" fill="currentColor"/>
              <path d="M5 13.41L2 10H1l2 2-2 2v1l4-1.59z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 transform transition-all hover:shadow-glow-intense duration-500">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Transforming Deployment with AI
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5 border-l-2 border-cyan-800/30 pl-4">
                AI is revolutionizing the deployment phase of SDLC by enabling intelligent 
                release decisions, automating deployment pipelines, and providing predictive 
                analytics for potential production issues.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-brain text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">Intelligent Release Management</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
                    AI algorithms can analyze code changes, test results, and historical data to 
                    recommend optimal release timing and strategies.
                  </p>
                </div>
                
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-analytics text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">Automated Canary Analysis</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
                    AI-powered systems can monitor canary deployments in real-time, automatically 
                    rolling back problematic releases before they impact all users.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Deployment Risk Assessment
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5">
                Modern AI systems can predict deployment risks by analyzing code changes, 
                deployment history, and infrastructure metrics, enabling teams to take 
                preventive actions before issues occur in production.
              </p>
              
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30 group hover:border-cyan-800/50 transition-all transform hover:scale-[1.01] duration-300">
                <h3 className="text-xl font-medium mb-6 text-cyan-300 flex items-center">
                  <i className="fas fa-award text-cyan-400 mr-3"></i>
                  Benefits
                </h3>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {[
                    { text: "Reduced deployment failures", icon: "fas fa-shield-alt", color: "from-green-400 to-cyan-300" },
                    { text: "Faster recovery from incidents", icon: "fas fa-bolt", color: "from-cyan-400 to-blue-300" },
                    { text: "More confident release decisions", icon: "fas fa-chart-line", color: "from-blue-400 to-indigo-300" },
                    { text: "Optimized deployment timing", icon: "fas fa-clock", color: "from-indigo-400 to-purple-300" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-20 flex items-center justify-center mr-3`}>
                        <i className={`${item.icon} text-white`}></i>
                      </div>
                      <div className="bg-gray-800/30 px-4 py-3 rounded-lg border border-gray-700/30 flex-grow">
                        <span className="text-gray-200">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 sticky top-20">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                AI Deployment Tools
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: "Harness", desc: "AI-powered verification", icon: "fas fa-check-circle" },
                  { name: "LaunchDarkly", desc: "Intelligent feature flagging", icon: "fas fa-flag" },
                  { name: "Dynatrace", desc: "AI-based monitoring", icon: "fas fa-chart-area" },
                  { name: "OpsMx", desc: "Deployment intelligence", icon: "fas fa-server" },
                  { name: "Armory", desc: "ML-driven deployment analysis", icon: "fas fa-shield-alt" }
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
                  <i className="fas fa-rocket text-cyan-400 mr-2"></i>
                  <span className="text-cyan-300 font-medium">Deployment Success</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Organizations using AI-powered deployment tools report 75% fewer production incidents and 45% faster time-to-market.
                </p>
              </div>
              
              {/* Deployment visualization */}
              <div className="mt-8 p-4 bg-gray-900/70 border border-gray-700/50 rounded-lg overflow-hidden">
                <div className="text-xs mb-2 text-gray-400 flex justify-between">
                  <span>Deployment Flow</span>
                  <span className="text-cyan-400">AI-enhanced</span>
                </div>
                <div className="relative w-full h-24 flex items-center">
                  <div className="absolute inset-x-0 h-1 bg-gray-700"></div>
                  {['Build', 'Test', 'Stage', 'Deploy'].map((stage, i) => (
                    <div key={i} className="relative z-10 flex-grow flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full mb-1 ${i < 3 ? 'bg-cyan-400' : 'bg-cyan-600 animate-pulse'}`}></div>
                      <div className="h-8 text-xs text-cyan-300">{stage}</div>
                      <div className="absolute w-12 h-12 rounded-full bg-cyan-400 opacity-5 animate-ping" 
                           style={{ animationDelay: `${i * 0.5}s` }}></div>
                    </div>
                  ))}
                  <div className="absolute h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 z-0" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentPage; 