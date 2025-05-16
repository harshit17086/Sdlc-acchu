import React from 'react';

const DevelopmentPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI in Development</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Revolutionizing Development with AI</h2>
        <p className="mb-4">
          AI is transforming software development by automating routine coding tasks, 
          offering intelligent code suggestions, and helping developers write better, 
          more efficient code faster than ever before.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">AI-Assisted Coding</h3>
            <p>
              AI coding assistants like GitHub Copilot and Amazon CodeWhisperer help 
              developers by generating code suggestions based on comments and context.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">Intelligent Refactoring</h3>
            <p>
              AI tools can identify code smells and suggest refactoring solutions to 
              improve maintainability and performance.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Code Quality Enhancement</h2>
        <p className="mb-4">
          AI-powered static analysis tools can identify bugs, security vulnerabilities, 
          and performance issues before code reaches production.
        </p>
        
        <div className="border border-gray-200 rounded-lg p-4 mt-4">
          <h3 className="text-xl font-medium mb-3">Impact on Development Process</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Up to 55% faster code writing</li>
            <li>30% reduction in bugs</li>
            <li>Automated documentation generation</li>
            <li>Improved code consistency across teams</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Leading AI Development Tools</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>GitHub Copilot for code completion</li>
          <li>Tabnine for intelligent code suggestions</li>
          <li>DeepCode for bug detection</li>
          <li>Kite for IDE integrations</li>
          <li>CodeGuru for code reviews</li>
        </ul>
      </div>
    </div>
  );
};

export default DevelopmentPage; 