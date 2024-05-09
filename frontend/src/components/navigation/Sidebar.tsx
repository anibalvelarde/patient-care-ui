// src/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/caretaker" className={({ isActive }) => isActive ? 'active' : ''}>
            Caretaker
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Logo (default)
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
