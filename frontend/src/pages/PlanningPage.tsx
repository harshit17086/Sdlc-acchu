import React from 'react';

const PlanningPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI-Enhanced Planning</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">How AI Transforms Planning</h2>
        <p className="mb-4">
          AI technologies can revolutionize the planning phase of SDLC by analyzing historical project data,
          predicting potential risks, and suggesting optimal resource allocation strategies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">Predictive Analysis</h3>
            <p>
              AI algorithms can analyze past projects to predict timelines, potential bottlenecks,
              and resource requirements, enabling more accurate project planning.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">Intelligent Scheduling</h3>
            <p>
              AI-powered scheduling tools can optimize task assignments based on team member skills,
              availability, and project dependencies.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Planning Tools with AI Capabilities</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Microsoft Project with AI enhancements</li>
          <li>Jira with predictive analytics</li>
          <li>Asana with intelligent workflow suggestions</li>
          <li>ClickUp with ML-based estimation</li>
        </ul>
      </div>
    </div>
  );
};

export default PlanningPage; 