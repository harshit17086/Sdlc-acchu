import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Transforming Software Development Life Cycle</h1>
        <h2 className="text-2xl text-center text-gray-600 mb-8">Leveraging AI to Revolutionize SDLC</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 mb-4">
            The integration of AI into the Software Development Life Cycle (SDLC) is essential to address
            the growing complexity and demands of modern software projects. The Software Development Life
            Cycle (SDLC) typically encompasses stages such as Planning, Requirement Gathering, Design,
            Development, Testing, and Deployment.
          </p>
          
          <p className="text-gray-700 mb-4">
            Our project highlights how AI can revolutionize each stage of SDLC by automating repetitive tasks,
            providing intelligent insights, and enhancing decision-making capabilities throughout the
            development process.
          </p>
          
          <p className="text-gray-700 mb-4">
            We've done a deep dive on using AI for requirement gathering and test case generation,
            showcasing how machine learning and natural language processing can transform these
            critical phases of software development.
          </p>
          
          <p className="text-gray-700">
            Explore our comprehensive guide to discover how AI is being leveraged by companies
            to optimize their software development processes and deliver higher quality products
            faster and more efficiently.
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/sdlc" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            Explore AI in SDLC
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;