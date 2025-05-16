import React from 'react';

const DesignPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Design</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Transforming Software Design with AI</h2>
        <p className="mb-4">
          AI is revolutionizing software design by generating architecture recommendations, 
          optimizing component interactions, and suggesting design patterns based on requirements.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">Architecture Recommendation</h3>
            <p>
              AI systems can analyze requirements to suggest optimal architectural approaches,
              considering factors like scalability, security, and performance.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">UI/UX Design Generation</h3>
            <p>
              Generative AI tools can create user interface mockups and design elements
              based on best practices and user preference data.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Design Pattern Recommendation</h2>
        <p className="mb-4">
          AI systems can analyze your project requirements and suggest appropriate design patterns
          that address your specific challenges, reducing technical debt before it happens.
        </p>
        
        <div className="border border-gray-200 rounded-lg p-4 mt-4">
          <h3 className="text-xl font-medium mb-3">Benefits</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Faster design decisions</li>
            <li>Reduced architectural flaws</li>
            <li>More consistent system design</li>
            <li>Better alignment with requirements</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">AI Design Tools</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>IBM Watson for architectural decisions</li>
          <li>Figma with AI design capabilities</li>
          <li>Midjourney for UI concept generation</li>
          <li>GitHub Copilot for design pattern implementation</li>
        </ul>
      </div>
    </div>
  );
};

export default DesignPage; 