import React from 'react';

const RequirementsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI for Requirements Gathering</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Revolutionizing Requirements Gathering with AI</h2>
        <p className="mb-4">
          AI technologies are transforming how teams gather, analyze, and manage requirements. 
          By leveraging natural language processing, machine learning, and predictive analytics, 
          organizations can reduce ambiguity and improve requirements quality.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">Natural Language Processing</h3>
            <p>
              AI-powered NLP tools can analyze stakeholder interviews, documentation, and 
              user feedback to extract key requirements and identify inconsistencies.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-medium mb-3">Automated Requirements Classification</h3>
            <p>
              Machine learning algorithms can categorize requirements by type, priority, 
              complexity, and impact, helping teams focus on high-value requirements first.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Deep Dive: AI Requirements Gathering</h2>
        <p className="mb-4">
          Modern AI systems can generate user stories, acceptance criteria, and even 
          detect potential security requirements based on the system domain and context.
        </p>
        
        <div className="border border-gray-200 rounded-lg p-4 mt-4">
          <h3 className="text-xl font-medium mb-3">Case Study</h3>
          <p>
            Companies using AI-powered requirements tools report up to 40% reduction in requirements 
            defects and 25% faster requirements gathering processes.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">AI Tools for Requirements</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>IBM Watson for requirements analysis</li>
          <li>QRALab for automated requirements quality assessment</li>
          <li>ReqSuite with AI-powered requirements generation</li>
          <li>Custom GPT models for requirements validation</li>
        </ul>
      </div>
    </div>
  );
};

export default RequirementsPage; 