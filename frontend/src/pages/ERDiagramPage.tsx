import React, { useState } from 'react';
import axios from 'axios';

const ERDiagramPage: React.FC = () => {
  const [databaseDescription, setDatabaseDescription] = useState('');
  const [plantUmlCode, setPlantUmlCode] = useState('');
  const [sqlSchema, setSqlSchema] = useState('');
  const [activeTab, setActiveTab] = useState<'diagram' | 'schema'>('diagram');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [dbType, setDbType] = useState('MySQL');

  const handleGenerateDiagram = async () => {
    if (!databaseDescription.trim()) {
      setError('Please enter a database description');
      return;
    }
    
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post(
        'http://localhost:3000/api/ai-tools/er-diagram',
        { databaseDescription }
      );
      setPlantUmlCode(response.data.plantUmlCode);
    } catch (err) {
      console.error('Error generating ER diagram:', err);
      setError('Failed to generate ER diagram. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateSchema = async () => {
    if (!databaseDescription.trim()) {
      setError('Please enter a database description');
      return;
    }
    
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post(
        'http://localhost:3000/api/ai-tools/database-schema',
        { databaseDescription, dbType }
      );
      setSqlSchema(response.data.sqlSchema);
    } catch (err) {
      console.error('Error generating database schema:', err);
      setError('Failed to generate database schema. Please try again.');
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
            AI Database Designer
          </h1>
          <p className="text-xl text-gray-300 mb-6">Generate ER diagrams and database schemas from natural language descriptions</p>
          
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 rounded-lg p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('diagram')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'diagram'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              ER Diagram
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'schema'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              SQL Schema
            </button>
          </div>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-900/40 border border-red-700 rounded-lg text-red-200">
            {error}
          </div>
        )}
        
        {/* Input Section - Common for both tabs */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-6 border border-gray-700/50 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">Database Description</h2>
          <p className="text-gray-400 mb-4">
            Describe your database in natural language. Include entities, their attributes, relationships, and any constraints.
          </p>
          <textarea
            className="w-full h-40 p-4 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            placeholder="E.g. Create a database for an e-commerce application with users, products, categories, orders, and reviews. Users can place multiple orders and write reviews for products they've purchased. Products belong to categories. Each order contains multiple products with quantities."
            value={databaseDescription}
            onChange={(e) => setDatabaseDescription(e.target.value)}
          />
          
          {activeTab === 'schema' && (
            <div className="mt-4">
              <label className="block text-lg font-semibold mb-2 text-gray-200">Database Type</label>
              <select
                className="w-full md:w-1/3 p-3 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                value={dbType}
                onChange={(e) => setDbType(e.target.value)}
              >
                <option value="MySQL">MySQL</option>
                <option value="PostgreSQL">PostgreSQL</option>
                <option value="SQLite">SQLite</option>
                <option value="SQL Server">SQL Server</option>
                <option value="Oracle">Oracle</option>
              </select>
            </div>
          )}
          
          <button
            onClick={activeTab === 'diagram' ? handleGenerateDiagram : handleGenerateSchema}
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
              `Generate ${activeTab === 'diagram' ? 'ER Diagram' : 'SQL Schema'}`
            )}
          </button>
        </div>
        
        {/* Result Section - ER Diagram Tab */}
        {activeTab === 'diagram' && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">PlantUML Code</h2>
            <div className="h-96 overflow-auto p-4 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 whitespace-pre-wrap font-mono text-sm">
              {plantUmlCode || 'Your PlantUML code will appear here...'}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(plantUmlCode);
              }}
              disabled={!plantUmlCode}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy Code
            </button>
          </div>
        )}
        
        {/* Result Section - SQL Schema Tab */}
        {activeTab === 'schema' && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow p-6 border border-gray-700/50">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">{dbType} Schema</h2>
            <div className="h-96 overflow-auto p-4 bg-gray-900/80 text-gray-200 rounded-lg border border-gray-700 whitespace-pre-wrap font-mono text-sm">
              {sqlSchema || `Your ${dbType} schema will appear here...`}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(sqlSchema);
              }}
              disabled={!sqlSchema}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy Schema
            </button>
          </div>
        )}
        
        {/* Information Section */}
        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-glow-sm p-8 border border-gray-700/50">
          <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300">How It Works</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">ER Diagram Generation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>AI analyzes your database description to identify entities and relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>PlantUML syntax is generated to represent the database structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Primary keys, foreign keys, and relationships are properly defined</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>You can copy the PlantUML code to use in your preferred editor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Customize the generated code to match your specific needs</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">SQL Schema Generation</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>AI converts natural language into formal SQL schema definitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Support for different database systems (MySQL, PostgreSQL, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Creates proper data types, constraints, and relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>SQL output can be directly executed in your database management tool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Dramatically reduces time spent on database design and implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERDiagramPage; 