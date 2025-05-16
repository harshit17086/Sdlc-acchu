import React, { useState } from 'react';
import axios from 'axios';

const AIToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'testing'>('requirements');
  const [projectDescription, setProjectDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [testFramework, setTestFramework] = useState('Jest');
  const [generatedRequirements, setGeneratedRequirements] = useState('');
  const [generatedTestCases, setGeneratedTestCases] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRequirementsGeneration = async () => {
    if (!projectDescription.trim()) {
      setError('Please enter a project description');
      return;
    }
    
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post(
        'http://localhost:3000/api/ai/requirements',
        { projectDescription }
      );
      setGeneratedRequirements(response.data.requirements);
    } catch (err) {
      console.error('Error generating requirements:', err);
      setError('Failed to generate requirements. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestCaseGeneration = async () => {
    if (!requirements.trim()) {
      setError('Please enter requirements for test generation');
      return;
    }
    
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post(
        'http://localhost:3000/api/ai/testcases',
        { requirements, framework: testFramework }
      );
      setGeneratedTestCases(response.data.testCases);
    } catch (err) {
      console.error('Error generating test cases:', err);
      setError('Failed to generate test cases. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered SDLC Tools
          </h1>
          <p className="text-xl text-gray-300 mb-6">Leverage artificial intelligence to automate and enhance your software development process</p>
          
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 rounded-lg p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'requirements'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Requirements Analysis
            </button>
            <button
              onClick={() => setActiveTab('testing')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'testing'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Test Case Generation
            </button>
          </div>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-900/40 border border-red-700 rounded-lg text-red-200">
            {error}
          </div>
        )}
        
        {/* Requirements Analysis Tab */}
        {activeTab === 'requirements' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">Project Description</h2>
              <p className="text-gray-400 mb-4">
                Provide a detailed description of your software project, and our AI will analyze it to generate structured requirements.
              </p>
              <textarea
                className="w-full h-64 p-4 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="Describe your project here... (e.g., 'A web application for managing inventory with user authentication, product categories, and reporting features')"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
              <button
                onClick={handleRequirementsGeneration}
                disabled={isLoading}
                className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : (
                  'Generate Requirements'
                )}
              </button>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">Generated Requirements</h2>
              <div className="h-64 overflow-auto p-4 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 whitespace-pre-wrap">
                {generatedRequirements || 'Your generated requirements will appear here...'}
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => {
                    setRequirements(generatedRequirements);
                    setActiveTab('testing');
                  }}
                  disabled={!generatedRequirements}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Use for Test Generation
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedRequirements);
                  }}
                  disabled={!generatedRequirements}
                  className="px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Test Case Generation Tab */}
        {activeTab === 'testing' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">Software Requirements</h2>
              <p className="text-gray-400 mb-4">
                Enter the software requirements for which you want to generate test cases.
              </p>
              <textarea
                className="w-full h-52 p-4 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="Enter software requirements here..."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />
              
              <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-200">Testing Framework</h3>
              <select
                className="w-full p-3 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                value={testFramework}
                onChange={(e) => setTestFramework(e.target.value)}
              >
                <option value="Jest">Jest (JavaScript)</option>
                <option value="Cypress">Cypress (JavaScript)</option>
                <option value="Selenium">Selenium (Web Browser)</option>
                <option value="Pytest">Pytest (Python)</option>
                <option value="JUnit">JUnit (Java)</option>
                <option value="Postman">Postman (API)</option>
              </select>
              
              <button
                onClick={handleTestCaseGeneration}
                disabled={isLoading}
                className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Test Cases...
                  </span>
                ) : (
                  'Generate Test Cases'
                )}
              </button>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">Generated Test Cases</h2>
              <div className="h-80 overflow-auto p-4 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 whitespace-pre-wrap font-mono text-sm">
                {generatedTestCases || 'Your generated test cases will appear here...'}
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedTestCases);
                }}
                disabled={!generatedTestCases}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy to Clipboard
              </button>
            </div>
          </div>
        )}
        
        {/* Information Section */}
        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow-sm p-8 border border-gray-700/50">
          <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300">How AI Enhances SDLC</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">AI-Powered Requirements Analysis</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Extracts structured requirements from project descriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Identifies missing requirements and potential inconsistencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Categorizes requirements by functionality type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Prioritizes requirements based on project dependencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Analyzes natural language for ambiguities and clarity</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">AI-Powered Test Case Generation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Creates comprehensive test cases based on requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Generates test scenarios for edge cases and exceptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Supports multiple testing frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Provides detailed expected outcomes for each test case</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Reduces manual effort in test planning and creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIToolsPage; 