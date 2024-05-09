// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Sidebar from './components/navigation/Sidebar';
import CaretakerRegistration from './components/CaretakerRegistration';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Patient Care App</h1>
        </header>
        <div className="app-body">
          <Sidebar />
          <div className="content-area">
            <Routes>
              <Route path="/caretaker" element={<CaretakerRegistration />} />
              <Route path="/" element={<img src={logo} className="App-logo" alt="logo" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
