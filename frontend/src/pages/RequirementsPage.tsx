import React from 'react';
 
const RequirementsPage: React.FC = () => {
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
        
        <div className="absolute -right-40 top-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -left-40 bottom-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center mb-12">
          <h1 className="text-4xl font-bold mr-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI for Requirements
          </h1>
          <div className="flex-grow h-0.5 bg-gradient-to-r from-cyan-400/20 to-transparent rounded"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 mb-8 border border-gray-700/50 transform transition-all hover:shadow-glow-intense duration-500">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Revolutionizing Requirements with AI
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5 border-l-2 border-cyan-800/30 pl-4">
                AI technologies are transforming how teams gather, analyze, and manage requirements. 
                By leveraging natural language processing, machine learning, and predictive analytics, 
                organizations can reduce ambiguity and improve requirements quality.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-comments text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">Natural Language Processing</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
                    AI-powered NLP tools can analyze stakeholder interviews, documentation, and 
                    user feedback to extract key requirements and identify inconsistencies.
                  </p>
                </div>
                
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-sort-amount-up text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">Automated Classification</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
                    Machine learning algorithms can categorize requirements by type, priority, 
                    complexity, and impact, helping teams focus on high-value requirements first.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 mb-8 border border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Deep Dive: AI Requirements Gathering
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5">
                Modern AI systems can generate user stories, acceptance criteria, and even 
                detect potential security requirements based on the system domain and context.
              </p>
              
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30 group hover:border-cyan-800/50 transition-all transform hover:scale-[1.01] duration-300">
                <h3 className="text-xl font-medium mb-4 text-cyan-300 flex items-center">
                  <i className="fas fa-chart-pie text-cyan-400 mr-3"></i>
                  Case Study: Efficiency Gains
                </h3>
                <div className="pl-10 pr-4 py-4 bg-gradient-to-r from-cyan-900/10 to-blue-900/10 rounded-lg border-l-2 border-cyan-500/30">
                  <p className="text-gray-300">
                    Companies using AI-powered requirements tools report up to <span className="text-cyan-300">40% reduction</span> in requirements 
                    defects and <span className="text-cyan-300">25% faster</span> requirements gathering processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 sticky top-20">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                AI Tools for Requirements
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: "IBM Watson", desc: "Requirements analysis engine", icon: "fas fa-robot" },
                  { name: "QRALab", desc: "Requirements quality assessment", icon: "fas fa-check-double" },
                  { name: "ReqSuite", desc: "AI-powered requirements generation", icon: "fas fa-file-code" },
                  { name: "GPT Models", desc: "Requirements validation and enhancement", icon: "fas fa-brain" }
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
                <p className="text-gray-400 flex items-start text-sm">
                  <i className="fas fa-lightbulb text-yellow-400 mr-3 mt-1"></i>
                  <span>
                    AI-driven requirements tools can reduce project rework by up to 35% by identifying inconsistencies early in the development cycle.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsPage; 