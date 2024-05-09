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
      <header className="row">
        <h2 className='col-12'>Patient Care App</h2>
      </header>
      <div className="row">
        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
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
