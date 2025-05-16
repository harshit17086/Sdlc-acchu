import React from 'react';
 
const DevelopmentPage: React.FC = () => {
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
              AI in Development
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
          <div className="ml-auto opacity-20">
            <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 13.364V10.636C2 8.8 2 7.9 2.586 7.314C3.172 6.728 4.071 6.728 5.879 6.728H6.929C7.5037 6.728 7.791 6.728 8.066 6.7C8.42744 6.66506 8.77979 6.56856 9.104 6.416C9.35082 6.3025 9.57931 6.14312 10.04 5.823L10.65 5.421C11.748 4.688 12.298 4.321 12.9 4.321C13.503 4.321 14.052 4.688 15.15 5.421L15.96 5.823C16.42 6.143 16.65 6.302 16.897 6.416C17.221 6.56831 17.5731 6.66456 17.935 6.7C18.209 6.728 18.496 6.728 19.071 6.728H20.121C21.929 6.728 22.828 6.728 23.414 7.314C24 7.9 24 8.8 24 10.636V13.364C24 15.2 24 16.1 23.414 16.686C22.828 17.272 21.929 17.272 20.121 17.272H19.071C18.496 17.272 18.209 17.272 17.935 17.301C17.5734 17.3355 17.2208 17.432 16.896 17.584C16.6495 17.6978 16.4207 17.8572 16 18.177L15.15 18.579C14.052 19.312 13.502 19.679 12.9 19.679C12.298 19.679 11.748 19.312 10.65 18.579L10.04 18.177C9.57931 17.857 9.35082 17.6977 9.104 17.584C8.77931 17.4318 8.42679 17.3354 8.065 17.3C7.79102 17.2717 7.50388 17.272 6.929 17.272H5.879C4.071 17.272 3.172 17.272 2.586 16.686C2 16.1 2 15.2 2 13.364Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 15L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 12L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 transform transition-all hover:shadow-glow-intense duration-500">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Revolutionizing Development with AI
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5 border-l-2 border-cyan-800/30 pl-4">
                AI is transforming software development by automating routine coding tasks, 
                offering intelligent code suggestions, and helping developers write better, 
                more efficient code faster than ever before.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-code text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">AI-Assisted Coding</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
                    AI coding assistants like GitHub Copilot and Amazon CodeWhisperer help 
                    developers by generating code suggestions based on comments and context.
                  </p>
                </div>
                
                <div className="border border-gray-700/50 bg-gray-900/40 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-cyan-800/50 hover:shadow-glow-sm group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-4 group-hover:bg-cyan-900/50 transition-colors">
                      <i className="fas fa-sync-alt text-cyan-400 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-medium text-cyan-300">Intelligent Refactoring</h3>
                  </div>
                  <p className="text-gray-300 ml-16">
                    AI tools can identify code smells and suggest refactoring solutions to 
                    improve maintainability and performance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Code Quality Enhancement
              </h2>
              <p className="mb-8 text-gray-300 leading-relaxed ml-5">
                AI-powered static analysis tools can identify bugs, security vulnerabilities, 
                and performance issues before code reaches production.
              </p>
              
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30 group hover:border-cyan-800/50 transition-all transform hover:scale-[1.01] duration-300">
                <h3 className="text-xl font-medium mb-6 text-cyan-300 flex items-center">
                  <i className="fas fa-chart-line text-cyan-400 mr-3"></i>
                  Impact on Development Process
                </h3>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {[
                    { text: "Up to 55% faster code writing", icon: "fas fa-tachometer-alt", color: "from-green-400 to-cyan-300" },
                    { text: "30% reduction in bugs", icon: "fas fa-bug", color: "from-cyan-400 to-blue-300" },
                    { text: "Automated documentation", icon: "fas fa-file-alt", color: "from-blue-400 to-indigo-300" },
                    { text: "Improved code consistency", icon: "fas fa-code-branch", color: "from-indigo-400 to-purple-300" }
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
                
                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/20 rounded-lg">
                  <p className="text-gray-400 flex items-start text-sm">
                    <i className="fas fa-lightbulb text-yellow-400 mr-3 mt-1"></i>
                    <span>
                      Teams using AI-assisted development report completing sprints up to 40% faster with fewer defects and higher code quality.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-8 border border-gray-700/50 sticky top-20">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                Leading AI Development Tools
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: "GitHub Copilot", desc: "AI pair programmer for code completion", icon: "fab fa-github" },
                  { name: "Tabnine", desc: "Intelligent code suggestions", icon: "fas fa-keyboard" },
                  { name: "DeepCode", desc: "AI-powered bug detection", icon: "fas fa-bug" },
                  { name: "Kite", desc: "Smart IDE integrations", icon: "fas fa-feather" },
                  { name: "CodeGuru", desc: "Automated code reviews", icon: "fab fa-aws" }
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
              
              {/* Code animation block */}
              <div className="mt-8 p-5 bg-gray-900/70 border border-gray-700/50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-gray-400">AI Coding Assistant</div>
                </div>
                <div className="font-mono text-xs text-gray-400 p-3 bg-gray-950 rounded-md overflow-hidden">
                  <div className="animate-typing">
                    <span className="text-blue-400">function</span> <span className="text-cyan-300">optimizeCode</span><span className="text-yellow-300">(</span><span className="text-orange-300">input</span><span className="text-yellow-300">)</span> <span className="text-yellow-300">{'{'}</span><br/>
                    <span className="ml-4">
                      <span className="text-green-400">// AI analyzing code patterns</span><br/>
                      <span className="text-blue-400">const</span> <span className="text-cyan-300">result</span> <span className="text-white">=</span> <span className="text-blue-400">new</span> <span className="text-cyan-300">AIOptimizer</span><span className="text-yellow-300">()</span><span className="text-white">.</span><span className="text-cyan-300">enhance</span><span className="text-yellow-300">(</span><span className="text-orange-300">input</span><span className="text-yellow-300">)</span><span className="text-white">;</span><br/>
                      <span className="text-blue-400">return</span> <span className="text-cyan-300">result</span><span className="text-white">;</span>
                    </span><br/>
                    <span className="text-yellow-300">{'}'}</span>
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

export default DevelopmentPage; 