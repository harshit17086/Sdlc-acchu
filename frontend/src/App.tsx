import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './pages/MainPage';
import PlanningPage from './pages/PlanningPage';
import RequirementsPage from './pages/RequirementsPage';
import DesignPage from './pages/DesignPage';
import DevelopmentPage from './pages/DevelopmentPage';
import TestingPage from './pages/TestingPage';
import DeploymentPage from './pages/DeploymentPage';
import Navigation from './components/Navigation'; 
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Navigation />
        <main className="flex-grow bg-gray-900">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sdlc" element={<MainPage />} />
            <Route path="/planning" element={<PlanningPage />} />
            <Route path="/requirements" element={<RequirementsPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="/testing" element={<TestingPage />} />
            <Route path="/deployment" element={<DeploymentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;