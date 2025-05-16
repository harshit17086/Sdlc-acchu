import React from 'react';
 
const PlanningPage: React.FC = () => {
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
        
        <div className="absolute -right-40 top-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -left-40 bottom-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI-Enhanced Planning
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 mb-8 border border-gray-700/50 transform transition-all hover:shadow-glow-intense duration-500">
          <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
            <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
            How AI Transforms Planning
          </h2>
          <p className="mb-8 text-gray-300 leading-relaxed ml-5 border-l-2 border-cyan-800/30 pl-4">
            AI technologies can revolutionize the planning phase of SDLC by analyzing historical project data,
            predicting potential risks, and suggesting optimal resource allocation strategies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                  <i className="fas fa-brain text-cyan-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-medium text-cyan-300">Predictive Analysis</h3>
              </div>
              <p className="text-gray-300 ml-16">
                AI algorithms can analyze past projects to predict timelines, potential bottlenecks,
                and resource requirements, enabling more accurate project planning.
              </p>
            </div>
            
            <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                  <i className="fas fa-calendar-check text-cyan-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-medium text-cyan-300">Intelligent Scheduling</h3>
              </div>
              <p className="text-gray-300 ml-16">
                AI-powered scheduling tools can optimize task assignments based on team member skills,
                availability, and project dependencies.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-8 text-white flex items-center">
            <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
            Planning Tools with AI Capabilities
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Microsoft Project AI", icon: "fab fa-microsoft" },
              { name: "Jira Predictive Analytics", icon: "fab fa-jira" },
              { name: "Asana Workflow AI", icon: "fas fa-tasks" },
              { name: "ClickUp ML Estimation", icon: "fas fa-chart-line" }
            ].map((tool, index) => (
              <div 
                key={index} 
                className="bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg border border-gray-700/30 flex items-center transform transition-all duration-300 hover:scale-[1.03] hover:border-cyan-800/50 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-3 group-hover:bg-cyan-900/50 transition-colors">
                  <i className={`${tool.icon} text-cyan-400 group-hover:text-cyan-300 transition-colors`}></i>
                </div>
                <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/20 rounded-lg">
            <p className="text-gray-400 flex items-start">
              <i className="fas fa-lightbulb text-yellow-400 mr-3 mt-1"></i>
              <span>
                Companies using AI-powered planning tools report up to 35% improvement in project delivery accuracy and 28% reduction in planning time.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningPage; 