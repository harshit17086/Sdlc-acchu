import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  const sdlcStages = [
    {
      title: 'Planning',
      description: 'AI-powered project planning and resource allocation',
      path: '/planning',
      iconClass: 'far fa-calendar-alt'
    },
    {
      title: 'Requirements',
      description: 'Automated requirements gathering and analysis using AI',
      path: '/requirements',
      iconClass: 'fas fa-tasks'
    },
    {
      title: 'Design',
      description: 'Intelligent design suggestions and architecture optimization',
      path: '/design',
      iconClass: 'fas fa-pencil-ruler'
    },
    {
      title: 'Development',
      description: 'AI-assisted coding and intelligent development tools',
      path: '/development',
      iconClass: 'fas fa-code'
    },
    {
      title: 'Testing',
      description: 'Automated test case generation and intelligent test execution',
      path: '/testing',
      iconClass: 'fas fa-vial'
    },
    {
      title: 'Deployment',
      description: 'Smart deployment strategies and predictive analytics',
      path: '/deployment',
      iconClass: 'fas fa-rocket'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Transforming SDLC with AI</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Discover how artificial intelligence is revolutionizing each stage of the 
          Software Development Life Cycle, leading to faster delivery, higher quality, 
          and reduced costs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sdlcStages.map((stage, index) => (
          <Link 
            key={index} 
            to={stage.path}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <i className={`${stage.iconClass} text-2xl text-blue-600 mr-3`}></i>
              <h2 className="text-2xl font-semibold">{stage.title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{stage.description}</p>
            <div className="text-blue-600 font-medium">
              Learn more <i className="fas fa-arrow-right ml-1"></i>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Why AI in SDLC Matters</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="text-xl font-medium mb-2">Increased Efficiency</h3>
            <p>Reduce manual effort and accelerate delivery with AI-powered automation</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="text-xl font-medium mb-2">Higher Quality</h3>
            <p>Produce more reliable software with AI-driven testing and quality checks</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="text-xl font-medium mb-2">Reduced Costs</h3>
            <p>Lower development costs through intelligent resource optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 