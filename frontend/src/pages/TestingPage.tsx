import React from 'react';

const TestingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Testing</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Revolutionizing Software Testing with AI</h2>
        <p className="mb-4">
          AI is transforming software testing by automating test case generation, 
          predicting high-risk areas for testing focus, and enabling intelligent test execution.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">Smart Test Generation</h3>
            <p>
              AI can analyze code and requirements to automatically generate comprehensive 
              test cases, reducing manual effort and increasing test coverage.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">Self-Healing Test Automation</h3>
            <p>
              AI-powered test frameworks can automatically adapt to UI changes, 
              reducing test maintenance overhead and test flakiness.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Deep Dive: AI for Test Case Generation</h2>
        <p className="mb-4">
          Modern AI systems can analyze requirements, user stories, and code to generate 
          test cases that cover functional requirements, edge cases, and potential security vulnerabilities.
        </p>
        
        <div className="border border-gray-200 rounded-lg p-4 mt-4">
          <h3 className="text-xl font-medium mb-3">Key Benefits</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Up to 80% reduction in test case creation time</li>
            <li>Increased test coverage by identifying overlooked scenarios</li>
            <li>Consistent test quality across projects</li>
            <li>Early detection of potential issues</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Leading AI Testing Tools</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Testim for AI-powered test automation</li>
          <li>Mabl for intelligent test execution</li>
          <li>Applitools for visual testing with AI</li>
          <li>ReTest for self-healing tests</li>
          <li>Functionize for NLP-based test creation</li>
          <li>Diffblue for automatic test generation</li>
        </ul>
      </div>
    </div>
  );
};

export default TestingPage; 