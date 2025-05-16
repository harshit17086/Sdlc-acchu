import React from 'react';
 
const TestingPage: React.FC = () => {
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
        <div className="mb-12 flex items-center">
          <div>
            <h1 className="text-4xl font-bold mb-3 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Testing
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
          <div className="ml-auto opacity-20">
            <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 transform transition-all hover:shadow-glow-intense duration-500">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Revolutionizing Software Testing with AI
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5 border-l-2 border-cyan-800/30 pl-4">
          AI is transforming software testing by automating test case generation, 
          predicting high-risk areas for testing focus, and enabling intelligent test execution.
        </p>
        
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-robot text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">Smart Test Generation</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
              AI can analyze code and requirements to automatically generate comprehensive 
              test cases, reducing manual effort and increasing test coverage.
            </p>
          </div>
          
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-magic text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">Self-Healing Test Automation</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
              AI-powered test frameworks can automatically adapt to UI changes, 
              reducing test maintenance overhead and test flakiness.
            </p>
          </div>
        </div>
      </div>
      
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Deep Dive: AI for Test Case Generation
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5">
          Modern AI systems can analyze requirements, user stories, and code to generate 
          test cases that cover functional requirements, edge cases, and potential security vulnerabilities.
        </p>
        
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30 group hover:border-cyan-800/50 transition-all transform hover:scale-[1.01] duration-300">
                <h3 className="text-xl font-medium mb-6 text-cyan-300 flex items-center">
                  <i className="fas fa-trophy text-cyan-400 mr-3"></i>
                  Key Benefits
                </h3>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {[
                    { text: "80% reduction in test creation time", icon: "fas fa-clock", color: "from-green-400 to-cyan-300" },
                    { text: "Increased test coverage", icon: "fas fa-shield-alt", color: "from-cyan-400 to-blue-300" },
                    { text: "Consistent test quality", icon: "fas fa-check-double", color: "from-blue-400 to-indigo-300" },
                    { text: "Early issue detection", icon: "fas fa-search", color: "from-indigo-400 to-purple-300" }
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
      
          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 sticky top-20">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Leading AI Testing Tools
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: "Testim", desc: "AI-powered test automation", icon: "fas fa-vial" },
                  { name: "Mabl", desc: "Intelligent test execution", icon: "fas fa-cogs" },
                  { name: "Applitools", desc: "Visual testing with AI", icon: "fas fa-eye" },
                  { name: "ReTest", desc: "Self-healing test frameworks", icon: "fas fa-first-aid" },
                  { name: "Functionize", desc: "NLP-based test creation", icon: "fas fa-language" },
                  { name: "Diffblue", desc: "Automatic test generation", icon: "fas fa-code-branch" }
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
                  <span className="text-cyan-300 font-medium">Testing Efficiency</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Organizations using AI for testing report finding up to 3x more defects before production and reducing testing cycles by 40%.
                </p>
              </div>
              
              {/* Testing visualization */}
              <div className="mt-8 p-4 bg-gray-900/70 border border-gray-700/50 rounded-lg overflow-hidden">
                <div className="flex justify-center">
                  <div className="relative w-full h-24">
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-700"></div>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute bottom-1 w-4 bg-cyan-400 rounded-t-sm animate-test-bar"
                        style={{
                          height: `${Math.random() * 60 + 20}%`,
                          left: `${i * 12.5 + 2}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    ))}
                    <div className="absolute inset-x-0 bottom-8 h-0.5 bg-cyan-800/30 border-dashed border-t border-cyan-400/30"></div>
                    <span className="absolute bottom-9 right-0 text-xs text-cyan-400">AI-assisted</span>
                    <span className="absolute bottom-0 right-0 text-xs text-gray-500">Traditional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingPage; 